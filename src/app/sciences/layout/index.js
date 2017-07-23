import React, {Component} from 'react';
import {Link, Redirect, Route} from "react-router-dom";
import Login from "../login/index";
import {connect} from "react-redux";
import {ProtectedRoute} from "../../services/ProtectedRouteComponent";
import Sidebar from '../sidebar/index';
import Dashboard from "../dashboard/index";
import {Layout, Breadcrumb, Icon} from 'antd';
import './styles/index.less';

const {Content, Footer, Sider} = Layout;

@connect(({isLogin}) => ({isLogin}))
export default class ExLayout extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        isLogin: false,
        minHeight: window.innerHeight
    };

    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogin !== this.state.isLogin) {
            this.setState({isLogin: nextProps.isLogin})
        }
    }

    componentDidMount() {
        this.setState({isLogin: this.props.isLogin});

        window.onresize = (e) => {
            this.setState({minHeight: e.target.innerHeight})
        }
    }


    render() {
        return (
                <Layout style={{minHeight: this.state.minHeight}}>
                    {this.state.isLogin && <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <Sidebar mode={this.state.mode}/>
                    </Sider>}
                    <Layout>
                        <Content style={{margin: '0 16px', position: 'relative'}}>
                            {this.state.isLogin && <Breadcrumb style={{margin: '12px 0'}}>
                                <Breadcrumb.Item><Link to="/dashboard"><Icon type="home"/></Link></Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {this.props.location.pathname !== '/dashboard' ? this.props.location.pathname.replace("/", "") : ''}
                                </Breadcrumb.Item>
                            </Breadcrumb>}
                            <Route exact path="/" render={() => (
                                this.state.isLogin ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>
                            )}/>

                            <Route exact path="/login" render={() => (
                                this.state.isLogin ? <Redirect to="/dashboard"/> : <Login />
                            )}/>

                            <ProtectedRoute path="/dashboard" component={Dashboard}/>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            <a href="https://github.com/kasra-ansari/react-redux-antd-adminPanel-boilerplate"
                               target="_blank" rel="noopener noreferrer">Kasra Ansari</a> ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
        )
    }
}
