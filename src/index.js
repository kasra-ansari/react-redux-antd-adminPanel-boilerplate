import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './app/worker/index';
import store from "./app/redux/store/index";
import App from "./app/sciences/index";
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

ReactDOM.render(<Provider store={store}><LocaleProvider locale={enUS}><App/></LocaleProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
