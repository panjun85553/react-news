import React, { Component, Fragment} from 'react';
import logo from './logo.png';
import './style.css';
import { MailOutlined,AppstoreOutlined, SettingOutlined, CoffeeOutlined, CompassOutlined, ControlOutlined} from '@ant-design/icons';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';
class AppHeader extends Component {
    constructor(props) {
         super(props);
         this.state = {

         }
    }

    render() {
        return (
            <Fragment>
                <Link to="/">
                   <img src={logo} className="app-header-logo" alt="header-logo" />
                </Link>
                <Menu mode="horizontal" className="app-header-menu">
                    <Menu.Item key="1" icon={<MailOutlined />}>
                        <Link to= '/1'>
                        VOA慢速英语
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        <Link to="/2">
                        VOA常速英语
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SettingOutlined />}>
                        <Link to="/3">
                        VOA英语教学
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<CoffeeOutlined />}>
                        <Link to= "/4">
                        VOA走遍美国
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CompassOutlined />}>
                        <Link to="/5">
                        VOA空中英语教室
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<ControlOutlined />}>
                        <Link to="/6">
                        VOA大家说英语
                        </Link>
                    </Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}

export default AppHeader;
