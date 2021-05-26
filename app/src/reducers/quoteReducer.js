import { GET_QUOTE, GET_SUCCESS } from '../actions'
const initialData = {
    data: null,
    isFetching: false
};

const reducer = (state=initialData, action)=>{
    switch(action.type){
        case GET_QUOTE:
            return({
                ...state,
                data: null,
                isFetching: true
            });
        case GET_SUCCESS:
            return({
                ...state,
                isFetching: false,
                data: {...action.payload}
            })
        default:
            return state;
    }
}
export default reducer;