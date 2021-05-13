import React from "react";
import { PageHeader, Statistic, Row, Col, Spin } from "antd";
// import DrawerForm from '../../layout/DrawerForm';

function KPI(props) {
  if (props.data.length !== 0) {
    return (
      <React.Fragment>
        <PageHeader
          className="site-page-header-responsive"
          title={props.data.Workunit.Wuid}
          subTitle={props.data.Workunit.Jobname}
          extra={
            [
              // <Button key="1" type="primary">
              //   + New Request
              // </Button>,
              // <DrawerForm mode="singleWorkunit" />
            ]
          }
        >
          <br />
          <div>
            <Row gutter={16}>
              <Col span={4}>
                <Statistic title="State" value={props.data.Workunit.State} />
              </Col>
              <Col span={4}>
                <Statistic
                  title="Total Cluster Time"
                  value={props.data.Workunit.TotalClusterTime}
                />
              </Col>
              <Col span={4}>
                <Statistic title="Owner" value={props.data.Workunit.Owner} />
              </Col>
              <Col span={4}>
                <Statistic
                  title="Cluster"
                  value={props.data.Workunit.Cluster}
                />
              </Col>
              <Col span={4}>
                <Statistic
                  title="Error Count"
                  value={props.data.Workunit.ErrorCount}
                />
              </Col>
              <Col span={4}>
                <Statistic
                  title="Warning Count"
                  value={props.data.Workunit.WarningCount}
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

export default KPI;
