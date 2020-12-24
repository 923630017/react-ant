import {
    MenuUnfoldOutlined,
    LineChartOutlined,
    UserDeleteOutlined,
    DesktopOutlined,
    HomeOutlined,
} from '@ant-design/icons';
const menuList = [
    {
        title: '首页',
        path: '/home',
        icon: <HomeOutlined></HomeOutlined>,
    },
    {
        title: '商品',
        path: '/products',
        icon: <MenuUnfoldOutlined></MenuUnfoldOutlined>,
        children: [
            {
                title: '品类管理',
                path: '/category',   
            },
            {
                title: '商品管理',
                path: '/product',   
            },
        ]
    },
    {
        title: '用户管理',
        path: '/user',
        icon: <UserDeleteOutlined></UserDeleteOutlined>,
    },
    {
        title: '角色管理',
        path: '/role',
        icon: <DesktopOutlined></DesktopOutlined>,
    },
    {
        title: '数据管理',
        path: '/echart',
        icon: <LineChartOutlined></LineChartOutlined>,
    },
]

export default menuList;