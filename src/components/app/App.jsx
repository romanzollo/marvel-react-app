import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import AppHeader from '../appHeader/AppHeader';

// динамический импорт (lazy) обязательно после всех статических импортов
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleCharacterPage = lazy(() =>
    import('../pages/singleCharacterLayout/SingleCharacterLayout')
);
const SingleComicPage = lazy(() =>
    import('../pages/singleComicLayout/SingleComicLayout')
);
const SinglePage = lazy(() => import('../pages/SinglePage'));
const Page404 = lazy(() => import('../pages/404'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/comics" element={<ComicsPage />} />
                            <Route
                                // comicId это слаг который мы сами придумываем и позже вытащим из адресной строки через useParams в SingleComicPage
                                path="comics/:id"
                                element={
                                    <SinglePage
                                        Component={SingleComicPage}
                                        dataType="comic"
                                    />
                                }
                            />
                            <Route
                                path="characters/:id"
                                element={
                                    <SinglePage
                                        Component={SingleCharacterPage}
                                        dataType="character"
                                    />
                                }
                            />

                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
};

export default App;
