/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UploadForm from './uploadimagedemo/UploadForm';
import { actions } from '../reducers';

const { Header, Sider, Content } = Layout;

class App extends Component {
  handleClick = () => {
    const { collapsed, toggle } = this.props;
    toggle(collapsed);
  }

  render() {
    const { collapsed } = this.props;
    return (
      <Router basename="/">
        <Layout>
          <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
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
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.handleClick}
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

const { toggle } = actions;

const mapStateToProps = (state) => ({
  collapsed: state.index.collapsed
});

const mapDispatchToProps = (dispatch) => ({
  toggle: bindActionCreators(toggle, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
