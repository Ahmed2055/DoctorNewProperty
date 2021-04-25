export const initialState = {
    message:{}
    
};

export const actionTypes = {
        
    };


export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => parseFloat(item.itemPrice) + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type){
        case actionTypes.SET_USER:
            return {
               
            };
        
        default:
            return state;

    }
};

export default reducer; 

