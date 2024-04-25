// import { configureStore } from '@reduxjs/toolkit';
// import {rootRducer} from './RootReducer';

// const MyStore = configureStore ({

//   reducer: rootRducer
// });

// export default MyStore;

// import counterReducer from './CreatSlice.js'

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducer';


const MyStore = configureStore({
    reducer: RootReducer,
    remove: RootReducer
});

export default MyStore;
