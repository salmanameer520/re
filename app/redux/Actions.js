// import { ADD_TO_CARD } from "./Constant";

// export const addtoCard = (item) =>{
//     return{
//         type: ADD_TO_CARD,
//         data:item
//     }
        
// }
export const ADD_TO_CARD = 'add_to_card';
export const REMOVE_TO_CARD = 'remove_to_card';


export const addToCard = (item) => {
    return {
        type: ADD_TO_CARD,
        data: item
    };
};

export const removeToCard = (item) =>{

    return{
        type:REMOVE_TO_CARD,
        data: item
    }
};

