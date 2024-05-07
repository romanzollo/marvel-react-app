import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = ({ onCharSelected }) => {
    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const { loading, error, getAllCharacters } = useMarvelService();

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

        getAllCharacters(offset).then(onCharListLoaded);
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

    console.log('render');

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
            );
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return <ul className="char__grid">{items}</ul>;
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
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
