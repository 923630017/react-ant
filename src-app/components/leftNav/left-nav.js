import React,{ Component }from 'react';
import { Menu} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import menuList from '../../configs/menuConfigs';
import './left-nav.less';
import { connect } from 'react-redux';
import { setTilte } from '../../redux/actions';
const { SubMenu } = Menu;

class LeftNav extends Component{
    constructor(props) {
        super();
    }
    getMenuList = (menuList) => {
        const path = this.props.location.pathname;
        return menuList.map((item) => {
            if(!item.children) {
                // 当前路径是否是目前页面所在路由，就需要将当前路由存入redux中
                if(item.path === path || path.indexOf(item.path) === 0) {
                    this.props.setTilte(item.title)
                }
                return (
                    <Menu.Item className='menu-item' key={item.path} icon={ item.icon ? item.icon : ''}>
                        <Link to={item.path} replace onClick={() => {this.props.setTilte(item.title)}} >{item.title}</Link>
                    </Menu.Item>  
                )
            } else if(item.children) {
                const items = item.children.find(items => items.path === path);
                this.openKey = items ? item.path : '';
                return(
                    <SubMenu key={item.path} icon={item.icon} title={item.title}>
                        {this.getMenuList(item.children)}
                    </SubMenu>
                )
            }
        });
    }
    render() {
        // 得到当前的path
        const menuLists = this.getMenuList(menuList);
        const path = this.props.location.pathname;
        return(
            <div className='left-nav'>
                <Menu
                    className='menu-list'
                    selectedKeys={[path]}
                    mode="inline"
                    theme="dark"
                    defaultOpenKeys={[this.openKey]}
                    >
                    {menuLists}
                </Menu> 
            </div>)
    }
}
export default connect(
    state => ({}),
    { setTilte }
)(withRouter(LeftNav));