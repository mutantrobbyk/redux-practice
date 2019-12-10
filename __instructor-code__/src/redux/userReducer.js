import axios from 'axios';

const initialState = {
    user: {},
    loading: false,
    errorMessage: ''
}

const GET_USER = 'GET_USER';

export function getUser(){
    const randomUser = axios.get('https://randomuser.me/api/').then(res => res.data.results[0]).catch(err => err.message)

    return {
        type: GET_USER,
        payload: randomUser
    }
}

export default function userReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER + '_PENDING':
            return {...state, loading: true};
        case GET_USER + '_FULFILLED':
            return {...state, user: payload, loading: false};
        case GET_USER + '_REJECTED':
            return {...state, errorMessage: payload};
        default:
            return state;
    }
}