// import {combineReducres} from 'redux';
// import { reducer } from './Reducer';

// export default combineReducres ({
//     reducer,
// })

import { combineReducers } from 'redux';
import { reducer } from './Reducer';
import { remove } from './Reducer';

export default combineReducers({
    reducer,
    remove
});
