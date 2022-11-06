import '@glorious/taslonic/taslonic.css';
import './index.styl';
import ReactDOM from 'react-dom';
import { Router } from './router';

ReactDOM.render(<Router />, document.querySelector('[data-app]'));
