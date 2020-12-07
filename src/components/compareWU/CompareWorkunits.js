import React from 'react';
import { Result, Layout } from "antd";
import { FundProjectionScreenOutlined } from "@ant-design/icons";

class CompareWorkunits extends React.Component{
    render() {
        return (
          <React.Fragment>
            <Layout className="site-layout" style={{ marginLeft: 20 }}>
              <br />
              <Result
                icon={<FundProjectionScreenOutlined />}
                status="success"
                title="Under development!"
              />
            </Layout>
          </React.Fragment>
        );
    }
}

export default CompareWorkunits;