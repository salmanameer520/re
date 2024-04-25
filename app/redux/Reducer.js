import  {ADD_TO_CARD} from './Actions';
import { REMOVE_TO_CARD } from './Actions';

const initialState  = 
{
    cart: [],
    userToken: '',
    user: {}
};

export const reducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case ADD_TO_CARD:
        // return{ 
        //         ...state,
        //        cart :[ action.data],
        // }; 
        return { 
       ...state,
       cart: [...state.cart, action.data]
   };
            
        default :
         return {...state }
    }
};

export const remove = (state = initialState, action) =>{

    switch (action.type) {
        case REMOVE_TO_CARD:
          // Assuming state is an array of items
          return state.filter(item => item.id !== action.payload.id);
        default:
          return state;
      }
};