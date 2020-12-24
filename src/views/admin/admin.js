import React,{ Component }from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import LeftNav from '../../components/leftNav/left-nav';
import ReactHeader from '../../components/header/header';
import Home from '../home/home';
import Category from '../category/category';
import Echart from '../echart/echart';
import Product from '../product/product';
import User from '../user/user';
import Role from '../role/role';
import strogeUser from '../../utils/local';
import { connect } from 'react-redux';
import './admin.less'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

class Admin extends Component{
    constructor(props) {
        super()
    }
    render() {
        if(!this.props.user) {
            return(
                <Redirect to='/login'></Redirect>
            )
        }else {
            return(
                <div className='admin'>
                    <Layout>
                        <Header className='admin-header'>
                            <ReactHeader></ReactHeader>
                        </Header>
                        <Layout className='admin-body'>
                            <Sider className='admin-sider'>
                                <LeftNav></LeftNav>
                            </Sider>
                            <Content className='admin-content'>
                                <Switch>
                                    <Route path='/home' component={Home}></Route>
                                    <Route path='/category' component={Category}></Route>
                                    <Route path='/product' component={Product}></Route>
                                    <Route path='/user' component={User}></Route>
                                    <Route path='/role' component={Role}></Route>
                                    <Route path='/echart' component={Echart}></Route>
                                    <Route path='home' component={Home}></Route>
                                    <Redirect to='/home'></Redirect>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            )
        }
    }
}
export default connect(
    state => ({ user: state.user }),
    {}
)(Admin)