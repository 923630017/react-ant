// 包含 n个 action 包括同步和异步
/**
 * 同步： 返回对象 { type: 'xxx', data: 数据值 }
 * 异步： 函数 dispatch => {}
*/
import { message } from 'antd';
import { login } from '../api/login';
import { SET_TITLE, SET_USER, REMOVE_USER } from './action-types';
import userInfo from '../utils/local';
import storgeUser from '../utils/local';
export const setTilte = (title) => ({type: SET_TITLE, data: title});
export const user = (userInfo) => ({type: SET_USER, data: userInfo})
export const logout = () => {
    storgeUser.removeUser();
    return { type: REMOVE_USER }
}
// 登录异步
export const initLogin = (params) => {
    return dispatch => {
        //这里面才执行异步操作
        login(params).then((res) => {
            if(res.code === 200) {
                userInfo.saveUser(res.data);
                dispatch(user(res.data));
                message.success('登录成功');
            }
        })
        /**
         * 失败执行相应的同步的action,成功执行相应的action
         * */ 
    }
}