import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage, ComicsPage } from '../pages';

import AppHeader from '../appHeader/AppHeader';

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <MainPage />
                        </Route>
                        <Route path="/comics" exact>
                            <ComicsPage />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
