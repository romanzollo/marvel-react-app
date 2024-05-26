import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = ({ charId }) => {
    const [char, setChar] = useState(null);

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [charId]);

    const { getCharacter, clearError, process, setProcess } =
        useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const updateChar = () => {
        if (!charId) {
            return;
        }

        // для сброса ошибок перед запросом
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            // finite state machine
            .then(() => setProcess('confirmed'));
    };

    return <div className="char__info">{setContent(process, View, char)}</div>;
};

const View = ({ data }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = data;

    let imgStyle = { objectFit: 'cover' };
    if (
        thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    ) {
        imgStyle = { objectFit: 'contain' };
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0
                    ? null
                    : 'There is no comics with this character'}
                {comics.slice(0, 10).map((item, i) => {
                    // обрезаем ссылку с конца и до первого слеша
                    let id = item.resourceURI.split('/').pop();

                    return (
                        <li key={i} className="char__comics-item">
                            <Link to={`/comics/${id}`}>{item.name}</Link>
                            {/* <a href={item.resourceURI}>{item.name}</a> */}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

CharInfo.propTypes = {
    charId: PropTypes.number,
};

export default CharInfo;
