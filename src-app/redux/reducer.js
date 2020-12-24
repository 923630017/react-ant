
// 根据旧的state和action生成并返回新的state
import storge from '../utils/local';
import { combineReducers } from 'redux';
import { SET_TITLE, SET_USER, REMOVE_USER } from './action-types';
const initTitle = '首页'
function headTitle(state=initTitle, action) {
    switch (action.type) {
        case SET_TITLE:
            return action.data
        default:
            return state
    }
}
const initUser = storge.getUser();
function user(state=initUser, action) {
    switch (action.type) {
        case SET_USER: 
            return action.data
        case REMOVE_USER:
            return ''
        default:
            return state
    }
}
export default combineReducers({
    headTitle,
    user,
})