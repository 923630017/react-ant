import React,{ Component }from 'react';
import Logo from '../../assets/image/logo.png';
import  './header.less';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import strogeUser from '../../utils/local';
import moment from 'moment';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';

class Header extends Component{
    constructor(props) {
        super();
        this.state = {
            user: '',
            date: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
        }
    }
    componentDidMount() {
        this.getInfo();
        this.timeId = setInterval(() => {
            this.setState({
                date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            })
        }, 1000)
    }
    getInfo = () => {
        this.setState({
            user: this.props.user
        })
    }
    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    logout = () => {
        Modal.confirm({
            title: '退出登录',
            icon: <ExclamationCircleOutlined />,
            content: '确认是否退出登录?',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                this.props.logout();
            },
        });
    }
    render() {
        if(!this.props.user) {
            <Redirect to='/login'></Redirect>
        }
        return(
         <div className='header'>
           <div className='header-logo'>
               <img src={Logo} alt='logo'></img>
               <span>react管理后台</span>
               <h3 style={{'margin': '0 50px', 'fontSize': '30px'}}>{this.props.headTitle}</h3>
           </div>
           <div className='user'>
               <div className='user-info'>
                    <span>欢迎{this.props.user}</span>
                    <Button onClick={() => {this.logout()}} type="text">退出</Button>
               </div>
               <div className='date-show'>
                   {this.state.date} 
               </div>
           </div>
        </div>)
    }
}
export default connect(
    state =>({headTitle: state.headTitle, user: state.user}),
    { logout }
)(withRouter(Header));