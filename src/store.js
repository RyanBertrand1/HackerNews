import {createStore} from 'redux';

function reducer(oldState = [], action){
    switch(action.type){
        case 'INIT': {
            const newState = action.stories;
            return newState;
        }
        case 'ADD_NEWS': {
            const newState = [...oldState, action.story.objectID];
            localStorage.removeItem('stories');
            localStorage.setItem('stories', JSON.stringify(newState))
            return newState;
        }

        default:
            return oldState;
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);