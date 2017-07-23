import React, {Component} from 'react';
import {Route, Router} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import ExLayout from './layout/index';

const history = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/" component={ExLayout}/>
                </div>
            </Router>

        );
    }
}

export default App;