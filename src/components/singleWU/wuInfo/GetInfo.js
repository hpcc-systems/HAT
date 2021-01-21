import React, { useState, useEffect } from "react";
import { Workunit } from "@hpcc-js/comms";
import KPI from './KPI';
import Timers from './Timers';
import Query from './Query';
import Exceptions from './Exceptions';
import DebugValues from "./DebugValues";
import { Row, Col } from "antd";

const GetInfo = (props) => {
  const [info, SetInfo] = useState([]);

  useEffect(() => {
    let wu = Workunit.attach(
      {
        baseUrl: props.parameters.ip,
        userID: props.parameters.user,
        password: props.parameters.pass,
      },
      props.parameters.wuid
    );

    wu.WUInfo({
      IncludeGraphs: true,
      IncludeTimers: true,
      IncludeExceptions: true,
      IncludeDebugValues: true,
      IncludeResults: false,
      IncludeHelpers: false,
    }).then((info) => SetInfo(info));
  }, [props.parameters.wuid, props.parameters.ip]);

  return (
    <React.Fragment>
      <KPI data={info} />
      <br />
      <Row>
        <Col span={11}>
          <Timers data={info} />
        </Col>
        <Col span={11} offset={1}>
          <DebugValues data={info} />
        </Col>
      </Row>
      <br />
      <Exceptions data={info} />
      <br />
      <Query data={info} />
    </React.Fragment>
  );
};

export default GetInfo;
