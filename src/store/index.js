import { createState } from 'quasi-react-store';
import reducer from './reducer';

var store = createState(reducer, {
    text: 'Hello World!'
});

export default store;