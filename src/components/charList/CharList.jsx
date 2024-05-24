import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import setContentList from '../../utils/setContentList';

import './charList.scss';

const CharList = ({ onCharSelected }) => {
    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const { getAllCharacters, process, setProcess } = useMarvelService();

    const onCharListLoaded = (newCharList) => {
        // проверка наличия следующих 9 элементов
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList((charList) => [...charList, ...newCharList]);
        setNewItemLoading((newItemLoading) => false);
        setOffset((offset) => offset + 9);
        setCharEnded((charEnded) => ended);
    };

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllCharacters(offset)
            .then(onCharListLoaded)
            // finite state machine
            .then(() => setProcess('confirmed'));
    };

    // создаем массив с ссылками на DOM-элементы (рефы)
    const refItems = useRef([]);

    // фокус на выбранный элемент и подсвечиваем его
    const focusOnItem = (id) => {
        refItems.current.forEach((item) =>
            item.classList.remove('char__item_selected')
        );
        refItems.current[id].classList.add('char__item_selected');
        refItems.current[id].focus();
    };

    // Этот метод создан для оптимизации,
    // чтобы не помещать такую конструкцию в метод render
    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = { objectFit: 'cover' };
            if (
                item.thumbnail ===
                'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
            ) {
                imgStyle = { objectFit: 'unset' };
            }

            return (
                <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames="char__item"
                >
                    <li
                        className="char__item"
                        // сохраняем ссылку на DOM-элемент в массив через рефы
                        ref={(ref) => (refItems.current[i] = ref)}
                        onClick={() => {
                            onCharSelected(item.id);
                            focusOnItem(i);
                        }}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                // предотвращаем прокрутку вниз при нажатии на Space
                                e.preventDefault();

                                onCharSelected(item.id);
                                focusOnItem(i);
                            }
                        }}
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.name}
                            style={imgStyle}
                        />
                        <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            );
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {/* component={null} -> to avoid a wrapping <div> */}
                <TransitionGroup component={null}>{items}</TransitionGroup>
            </ul>
        );
    }

    // useMemo - для того чтобы не перерисовывать компонент
    // без измениния process и работал focusOnItem (подсветка активного элемента)
    const elements = useMemo(() => {
        return setContentList(
            process,
            () => renderItems(charList),
            newItemLoading
        );
        // setContentList - finite state machine
    }, [process]);

    return (
        <div className="char__list">
            {elements}
            <button
                className="button button__main button__long"
                style={{ display: charEnded ? 'none' : 'block' }}
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

// использование PropTypes для определения типов пропсов
CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
