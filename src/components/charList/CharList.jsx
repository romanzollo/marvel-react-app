import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    const onCharListLoading = () => {
        setNewItemLoading(true);
    };

    const onCharListLoaded = (newCharList) => {
        // проверка наличия следующих 9 элементов
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        // this.setState(({ charList, offset }) => ({
        //     charList: [...charList, ...newCharList],
        //     loading: false,
        //     newItemLoading: false,
        //     offset: offset + 9,
        //     charEnded: ended,
        // }));

        setCharList((charList) => [...charList, ...newCharList]);
        setLoading((loading) => false);
        setNewItemLoading((newItemLoading) => false);
        setOffset((offset) => offset + 9);
        setCharEnded((charEnded) => ended);
    };

    const onError = () => {
        setError((error) => !error);
        setLoading((loading) => false);
    };

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = (offset) => {
        onCharListLoading();

        marvelService
            .getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError);
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
                <li
                    className="char__item"
                    key={item.id}
                    // сохраняем ссылку на DOM-элемент в массив через рефы
                    ref={(ref) => (refItems.current[i] = ref)}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            // предотвращаем прокрутку вниз при нажатии на Space
                            e.preventDefault();

                            props.onCharSelected(item.id);
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
            );
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return <ul className="char__grid">{items}</ul>;
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !charList)
        ? renderItems(charList)
        : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {content}
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
