import React from "react";
import "./Drawer.css";
import { Drawer, Form, Button, Col, Row, Input } from "antd";
import { BrowserRouter, Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Workunit } from "@hpcc-js/comms";

class DrawerForm extends React.Component {
  state = {
    visible: false,
    wuid1: "",
    host1: "",
    wuid2: "",
    host2: "",
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  // Based on LeftSideNav selection, control display on Drawer
  DisplayForm = () => {
    if (this.props.mode === "compareWorkunit") {
      return (
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="workunitId1"
                label="Workunit ID 1"
                rules={[
                  { required: true, message: "Please enter workunit id 1" },
                ]}
              >
                <Input
                  placeholder="Please enter workunit id 1"
                  value={this.state.wuid1}
                  onChange={(e) => {
                    if (e.target.value.match(/^[a-zA-Z-0-9]+$/g)) {
                      this.setState({ wuid1: e.target.value });
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="host1"
                label="URL 1"
                rules={[
                  {
                    required: true,
                    message: "Please enter URL 1 (http://hostname:port)",
                  },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Please enter URL 1 (http://hostname:port)"
                  value={this.state.host1}
                  onChange={(e) => {
                    if (e.target.value.match(/^[a-zA-Z-0-9_.:/]+$/g)) {
                      this.setState({ host1: e.target.value });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <br />
          <Row gutter={16} className="">
            <Col span={12}>
              <Form.Item
                name="wuid2"
                label="Workunit ID 2"
                rules={[
                  { required: true, message: "Please enter workunit id 2" },
                ]}
              >
                <Input
                  placeholder="Please enter workunit id 2"
                  value={this.state.wuid2}
                  onChange={(e) => {
                    if (e.target.value.match(/^[a-zA-Z-0-9]+$/g)) {
                      this.setState({ wuid2: e.target.value });
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="host2"
                label="URL 2"
                rules={[
                  {
                    required: true,
                    message: "Please enter URL 2 (http://hostname:port)",
                  },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Please enter URL 2 (http://hostname:port)"
                  value={this.state.host2}
                  onChange={(e) => {
                    if (e.target.value.match(/^[a-zA-Z-0-9_.:/]+$/g)) {
                      this.setState({ host2: e.target.value });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      );
    } else {
      return (
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="workunitId"
                label="Workunit ID"
                rules={[
                  { required: true, message: "Please enter workunit id" },
                ]}
              >
                <Input
                  placeholder="Please enter workunit id"
                  value={this.state.wuid1}
                  onChange={(e) => {
                    if (e.target.value.match(/^[a-zA-Z-0-9]+$/g)) {
                      this.setState({ wuid1: e.target.value });
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="host"
                label="URL"
                rules={[
                  {
                    required: true,
                    message: "Please enter URL (http://hostname:port)",
                  },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Please enter URL (http://hostname:port)"
                  value={this.state.host1}
                  onChange={(e) => {
                    if (e.target.value.match(/^[a-zA-Z-0-9_.:/]+$/g)) {
                      this.setState({ host1: e.target.value });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      );
    }
  };

  render() {
     const linkTarget = {
       pathname: `/Graph?wuid=${this.state.wuid1}&ip=${this.state.host1}` ,
       key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
       state: {
         applied: true,
       },
     };

    return (
      <div>
        <Button
          type="primary"
          style={{ position: "absolute", right: 10 }}
          onClick={this.showDrawer}
        >
          <PlusOutlined /> New request
        </Button>
        <Drawer
          title="Submit a new request"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <BrowserRouter>
                <Link to={linkTarget} className="button btn">
                  Submit
                </Link>
              </BrowserRouter>
            </div>
          }
        >
          {this.DisplayForm()}
        </Drawer>
      </div>
    );
  }
}

export default DrawerForm;
