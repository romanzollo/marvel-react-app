import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AppBanner from '../appBanner/AppBanner';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

// Хотелось бы вынести функцию по загрузке данных как отдельный аргумент
// Но тогда мы потеряем связь со стэйтами загрузки и ошибки
// А если вынесем их все в App.js - то они будут одни на все страницы

const SinglePage = ({ Component, dataType }) => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const { getComic, getCharacter, clearError, process, setProcess } =
        useMarvelService();

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, [id]);

    const updateData = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id)
                    .then(onDataLoaded)
                    // finite state machine
                    .then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id)
                    .then(onDataLoaded)
                    // finite state machine
                    .then(() => setProcess('confirmed'));
        }
    };

    const onDataLoaded = (data) => {
        setData(data);
    };

    return (
        <>
            <AppBanner />
            {
                // finite state machine
                setContent(process, Component, data)
            }
        </>
    );
};

export default SinglePage;
