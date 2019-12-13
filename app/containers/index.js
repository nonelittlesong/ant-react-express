/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import UploadForm from './uploadimagedemo/UploadForm';

const { Header, Sider, Content } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  render() {
    return (
      <Router basename="/">
        <Layout>
          <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/User">
                  <Icon type="user" />
                  <span>User</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/Form">
                  <Icon type="video-camera" />
                  <span>Form</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              <Switch>
                <Route exact path="/">Home</Route>
                <Route path="/Form" component={UploadForm} />
                <Route path="/User">User</Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
