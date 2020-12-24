import React,{ Component }from 'react';
import './login.less'
import Logo from '../../assets/image/logo.png';
import { Redirect } from 'react-router-dom'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { initLogin } from '../../redux/actions';
class Login extends Component{
    constructor(props) {
        super();
        this.state = {
            userInfo: {
                userName: '',
                password: '',
            }
        }
    }
    validatorPwd = (rule, value) => {
         if(!value) {
            return Promise.reject('请输入密码')
        } else if(! (value.length >= 4)) {
            return Promise.reject('密码至少4位')
        } else {
            return Promise.resolve();
        }
    }
    render() {
       const  onFinish = (values) => {
            this.setState({
                userInfo: values
            });
            this.props.initLogin(this.state.userInfo);
        };
        if(this.props.user) {
            return <Redirect to='/'></Redirect>
        }
        return(
            <div className='login'>
                <div className='login-header'>
                    <div>
                        <img className='login-logo' alt='logo' src={Logo}></img>
                        <span className='login-name'>管理后台</span>
                    </div>
                </div>
                <div className='login-content'>
                    <h2 className='title'>用户登录</h2>
                    <Form
                        className="login-form"
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        >
                        <Form.Item
                            name="userName"
                            rules={[
                            {
                                required: true,
                                message: '输入用户名',
                                whitespace: true,
                            },
                            {
                                min: 4,
                                message: '至少4位',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" className="login-form-input" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                            {
                                validator: this.validatorPwd,
                            }
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                            className="login-form-input"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({user: state.user}),
    { initLogin }
)(Login);