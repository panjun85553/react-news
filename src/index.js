import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css';
import Login from './compponents/Login/index'
import AppHeader from './compponents/header/index';
import pageList from './containers/List/index';
import Detail from './containers/Detail/index';
import Vip from "./containers/Vip/index";
const { Header, Footer, Content } = Layout;


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{minWidth: 1240, height: '100%'}}>
                    <Header className="header">
                        <AppHeader></AppHeader>
                    </Header>
                    <Content className= "content">
                        <Login/>
                            <Switch>
                                <Route path="/vip" component={Vip}/>
                                <Route path="/details/:id" component={Detail}/>
                                <Route path="/:id?" component={pageList}/>
                            </Switch>
                    </Content>
                    <Footer className="footer">@copyright jun-pan</Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

