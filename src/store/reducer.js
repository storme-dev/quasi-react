export default function(state, action) {
    if(action.type === 'changeText') {
        return { ...state, text: action.text };
    }
    return state;
}