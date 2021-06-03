import { render } from 'quasi-react';
import App from './App';

window.onload = function() {
    render(document.body, App);
}