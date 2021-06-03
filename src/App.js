import store from './store';
import { changeText } from './store/actions';

function handleClick() {
    store.dispatch(changeText(document.getElementById('inp').value));
}

export default function App() {
    let state = store.getState();
    return (
        <main>
            <h1 style="text-align: center;">{state.text}</h1>
            <input type="text" id="inp" />
            <button onclick={handleClick}>Change Text</button>
        </main>
    )
}