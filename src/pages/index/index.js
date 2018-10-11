import React from 'react';
import { Router, Link } from '@reach/router';

import { Layout, Menu } from 'antd';
import Essay from '../essay';
import Crystal from '../crystal';
import Laboratory from '../laboratory';
import Solution from '../solution';

const { Header, Content, Footer } = Layout;

const Index = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', float: 'right' }}
        >
          <Menu.Item key="1">
            <Link to="/">林中路</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/crystal">知识晶体</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/laboratory">实验室</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/solution">解题集</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Router>
            <Essay path="/" />
            <Solution path="/solution" />
            <Crystal path="/crystal" />
            <Laboratory path="/laboratory" />
          </Router>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>赤未吾止</Footer>
    </Layout>
  );
};

export default Index;
