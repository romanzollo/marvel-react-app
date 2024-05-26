import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import setContentList from '../../utils/setContentList';

import './comicsList.scss';

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const { getAllComics, process, setProcess } = useMarvelService();
    const onComicsListLoaded = (newComicsList) => {
        // проверка наличия следующих 9 элементов
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList((comicsList) => [...comicsList, ...newComicsList]);
        setNewItemLoading((newItemLoading) => false);
        setOffset((offset) => offset + 8);
        setComicsEnded((comicsEnded) => ended);
    };

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllComics(offset)
            .then(onComicsListLoaded)
            // finite state machine
            .then(() => setProcess('confirmed'));
    };

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, []);

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <CSSTransition classNames="comics__item" key={i} timeout={500}>
                    <li className="comics__item">
                        <Link to={`/comics/${item.id}`}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="comics__item-img"
                            />
                            <div className="comics__item-name">
                                {item.title}
                            </div>
                            <div className="comics__item-price">
                                {item.price}
                            </div>
                        </Link>
                    </li>
                </CSSTransition>
            );
        });

        return (
            <ul className="comics__grid">
                {/* component={null} -> to avoid a wrapping <div> */}
                <TransitionGroup component={null}>{items}</TransitionGroup>
            </ul>
        );
    }

    return (
        <div className="comics__list">
            {
                // finite state machine
                setContentList(
                    process,
                    () => renderItems(comicsList),
                    newItemLoading
                )
            }
            <button
                className="button button__main button__long"
                style={{ display: comicsEnded ? 'none' : 'block' }}
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export default ComicsList;
