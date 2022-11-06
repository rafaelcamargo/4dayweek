import '@glorious/taslonic/taslonic.css';
import './index.styl';
import ReactDOM from 'react-dom';
import { Router } from './router';
import analyticsService from '@src/base/services/analytics';

analyticsService.init();
ReactDOM.render(<Router />, document.querySelector('[data-app]'));
