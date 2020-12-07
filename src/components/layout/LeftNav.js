import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { BarChartOutlined, RetweetOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

class LeftNav extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <React.Fragment>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <center>
            <div className="logo title" style={{ padding: 15, fontSize: 18 }}>
              HAT
            </div>
          </center>
          <Menu
            defaultSelectedKeys={["GeneralInfo"]}
            defaultOpenKeys={["singleWorkunit", "compareWorkunit"]}
            mode="inline"
          >
            <SubMenu
              key="singleWorkunit"
              icon={<BarChartOutlined />}
              title="Single Workunit"
            >
              <Menu.Item key="GeneralInfo">
                <Link to="/Info">Workunit Info</Link>
              </Menu.Item>
              <Menu.Item key="WorkunitDetails">
                <Link to="/Graph">Graph Analysis</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="compareWorkunit"
              icon={<RetweetOutlined />}
              title="Compare Workunits"
            >
              <Menu.Item key="Compare">
                <Link to="/Compare">Compare</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </React.Fragment>
    );
  }
}

export default LeftNav;
