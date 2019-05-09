import * as React from "react";
import { NavLink } from 'react-router-dom';
import PcRouter from './pc.router';
import "./pc.ui.css";
import { Menu, Icon, Layout, Avatar, Row, Col  } from "antd";


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const height = document.body.clientHeight;
const Index = [
  {
    icon: 'pie-chart',
    path: '/pc/order',
    name: '订单管理',
  },
  {
    icon: 'desktop',
    path: '/pc/room',
    name: '房态管理',
  },
  {
    icon: 'desktop',
    path: '/pc/hotel',
    name: '酒店管理',
    children: [
      {
        path: '/pc/hotel/qualification',
        name: '资质管理'
      },
      {
        path: '/pc/hotel/info',
        name: '信息管理'
      }
    ]
  }
];

interface Props {
  index: string[];
  getIndex: () => void;
  getList: () => void;
}
interface State {
  collapsed: boolean
}

class Pc extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
    this.state = state;
  }

  change = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout style={{ height: height }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" />
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {Index.map((i) => {
              if (i.children) {
                return (
                  <SubMenu
                    key={i.path}
                    title={
                      <span>
                        <Icon type={i.icon} />
                        <span>{i.name}</span>
                      </span>
                    }>
                    {
                      i.children.map((child) =>
                        <Menu.Item key={child.path}>
                          {child.name}
                          <NavLink to={child.path}></NavLink>
                        </Menu.Item>
                      )
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={i.path}>
                    <Icon type={i.icon} />
                    <span>{i.name}</span>
                    <NavLink to={i.path}></NavLink>
                  </Menu.Item>
                )
              }
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
              <Row>
                <Col span={1} offset={1}>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col span={2} >
                   yangkai.sun
                </Col>
              </Row>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <PcRouter></PcRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            住行科技©2018 Created by sun.yangkai
        </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Pc;

