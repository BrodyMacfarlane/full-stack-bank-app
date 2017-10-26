import axios from 'axios'

const initialState = {
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO'

export function getUserInfo(){
    const user = axios.get('/auth/me').then(res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}