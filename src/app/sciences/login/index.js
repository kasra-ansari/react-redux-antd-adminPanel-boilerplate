import React, {Component} from 'react';
import {Button, Form, Input, Icon, Row, Col, Checkbox, message, Spin} from 'antd';
import {dispatch} from '../../services/dispatch';
import {successfulLogin} from "../../redux/actions/index";
import {withRouter} from 'react-router-dom';
import './styles/index.less';

const FormItem = Form.Item;

class Login extends Component {
    state = {
        loading: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.submitLogin(values);
            }
        })
    };


    submitLogin = () => {
        this.setState({loading: true});

        dispatch(successfulLogin());
        message.success('You are successfully logged in.');

        this.setState({loading: false});
    };

    componentWillUnmount() {
        this.setState({loading: false})
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row type="flex" align={'center'} justify={'center'} className={'form-layout'}>
                <Col xl={6} sm={12} xs={20} className={'login-form'}>
                    <h3>login account</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!'
                                }, {
                                    required: true, message: 'Please input your username!'
                                }]
                            })(
                                <Input prefix={<Icon type="user"/>} placeholder="Email"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your password!'}]
                            })(
                                <Input prefix={<Icon type="lock"/>} type="Password" placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Checkbox>Remember me</Checkbox>
                            <br />
                            <Spin spinning={this.state.loading} delay={500}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Spin>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Form.create()(withRouter(Login));