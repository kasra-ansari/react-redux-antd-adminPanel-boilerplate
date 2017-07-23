import React, {Component} from 'react';
import {Menu, Icon, message} from 'antd';
import {dispatch} from '../../services/dispatch';
import {failedLogin} from "../../redux/actions/index";
import {withRouter} from 'react-router-dom';
import './style/index.less';

class Sidebar extends Component {
    handleClick = e => {
        switch (e.key) {
            case 'dashboard':
                this.props.history.push('/dashboard');
                break;
            case 'logout':
                this.logOut();
                break;
            default:
                return;
        }
    };


    logOut = () => {
        dispatch(failedLogin());
        message.success('You are successfully logout.');
        this.props.history.push('/login');
    };

    render() {
        return (
            <div>
                <div className="logo"/>
                <Menu theme="dark" mode={this.props.mode}
                      defaultSelectedKeys={['dashboard']}
                      onClick={this.handleClick}>
                    <Menu.Item key="dashboard">
                        <span>
                            <Icon type="home"/>
                            <span className="nav-text">Dashboard</span>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="logout">
                            <span>
                                <Icon type="logout"/>
                                <span className="nav-text">LogOut</span>
                            </span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(Sidebar);