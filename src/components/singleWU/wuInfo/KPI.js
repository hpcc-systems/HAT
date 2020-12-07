import React from "react";
import { PageHeader, Statistic, Row, Col, Spin } from "antd";
// import DrawerForm from '../../layout/DrawerForm';

class KPI extends React.Component {
  render() {
    if (this.props.data.length !== 0) {
      return (
        <React.Fragment>
          <PageHeader
            className="site-page-header-responsive"
            title={this.props.data.Workunit.Wuid}
            subTitle={this.props.data.Workunit.Jobname}
            extra={[
              // <Button key="1" type="primary">
              //   + New Request
              // </Button>,
              // <DrawerForm mode="singleWorkunit" />
            ]}
          >
            <br/>
            <div>
              <Row gutter={16}>
                <Col span={4}>
                  <Statistic
                    title="State"
                    value={this.props.data.Workunit.State}
                  />
                </Col>
                <Col span={4}>
                  <Statistic
                    title="Total Cluster Time"
                    value={this.props.data.Workunit.TotalClusterTime}
                  />
                </Col>
                <Col span={4}>
                  <Statistic
                    title="Owner"
                    value={this.props.data.Workunit.Owner}
                  />
                </Col>
                <Col span={4}>
                  <Statistic
                    title="Cluster"
                    value={this.props.data.Workunit.Cluster}
                  />
                </Col>
                <Col span={4}>
                  <Statistic
                    title="Error Count"
                    value={this.props.data.Workunit.ErrorCount}
                  />
                </Col>
                <Col span={4}>
                  <Statistic
                    title="Warning Count"
                    value={this.props.data.Workunit.WarningCount}
                  />
                </Col>
              </Row>
            </div>
          </PageHeader>
        </React.Fragment>
      );
    } else {
      return <Spin size="large"></Spin>;
    }
  }
}

export default KPI;
