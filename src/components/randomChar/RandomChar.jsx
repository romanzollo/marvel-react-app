import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import mjolnir from '../../resources/img/mjolnir.png';

import './randomChar.scss';

const RandomChar = ({ onCharSelected }) => {
    const [char, setChar] = useState({});

    const { getCharacter, clearError, process, setProcess } =
        useMarvelService();

    const onCharLoaded = (char) => {
        // eslint-disable-next-line
        setChar(char);
    };

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        // для сброса ошибок перед запросом
        clearError();
        getCharacter(id)
            .then(onCharLoaded)
            // finite state machine
            .then(() => setProcess('confirmed'));
    };

    useEffect(() => {
        updateChar();

        const timerId = setInterval(updateChar, 60000);

        // останавливает интервал при размонтировании компонента
        return () => {
            clearInterval(timerId);
        };

        // eslint-disable-next-line
    }, []);

    return (
        <div className="randomchar">
            {
                // finite state machine
                setContent(process, View, char, onCharSelected)
            }
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!
                    <br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">Or choose another one</p>
                <button className="button button__main" onClick={updateChar}>
                    <div className="inner">try it</div>
                </button>
                <img
                    src={mjolnir}
                    alt="mjolnir"
                    className="randomchar__decoration"
                />
            </div>
        </div>
    );
};

// разделил компонент RandomChar на подкомпонент View
// который отвечает за отображение случайного персонажа
const View = ({ data, method }) => {
    const { id, name, description, thumbnail, homepage, wiki } = data;
    let imgStyle = { objectFit: 'cover' };
    if (
        thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    ) {
        imgStyle = { objectFit: 'contain' };
    }

    return (
        <div className="randomchar__block">
            <img
                src={thumbnail}
                alt="Random character"
                className="randomchar__img"
                style={imgStyle}
                onClick={() => method(id)}
            />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">{description}</p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RandomChar;
