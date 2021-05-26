import axios from 'axios';

export const GET_QUOTE = "GET_QUOTE";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const getQuote = ()=> (dispatch)=>{
    dispatch({type: GET_QUOTE})
    axios
    .get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(res=>{
        setTimeout(()=>dispatch({
            type: GET_SUCCESS, payload: res.data
        }),900)
    })
    .catch(err=>{
        dispatch({
            type: GET_ERROR, payload: JSON.stringify(err)
        })
    })
}