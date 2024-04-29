import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import mjolnir from '../../resources/img/mjolnir.png';

import './randomChar.scss';

const RandomChar = () => {
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    };

    const onCharLoading = () => {
        setLoading((loading) => true);
    };

    const onError = () => {
        setError((error) => !error);
        setLoading((loading) => false);
    };

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        onCharLoading();

        marvelService.getCharacter(id).then(onCharLoaded).catch(onError);
    };

    useEffect(() => {
        updateChar();

        const timerId = setInterval(updateChar, 60000);

        // останавливает интервал при размонтировании компонента
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="randomchar">
            {spinner}
            {errorMessage}
            {content}
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
const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char;
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
