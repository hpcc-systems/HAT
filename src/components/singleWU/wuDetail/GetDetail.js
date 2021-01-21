import React, { useState, useEffect } from "react";
import { Workunit } from "@hpcc-js/comms";
import GraphDetails from './GraphDetails';
import SubGraphDetails from './SubGraphDetails';
import ActivityDetails from './ActivityDetails';
import EdgeDetails from './EdgeDetails';

const GetDetail = (props) => {
  const [detail, SetDetail] = useState([]);

  useEffect(() => {
    let wu = Workunit.attach(
      {
        baseUrl: props.parameters.ip,
        userID: props.parameters.user,
        password: props.parameters.pass,
      },
      props.parameters.wuid
    );
    wu.WUDetails({
      PropertiesToReturn: {
        AllStatistics: true,
        AllAttributes: true,
        AllHints: true,
        AllScopes: true,
        AllProperties: true,
        AllNotes: true,
      },
      PropertyOptions: {
        IncludeName: true,
        IncludeRawValue: true,
        IncludeFormatted: true,
        IncludeMeasure: true,
      },
      ScopeOptions: {
        IncludeMatchedScopesInResults: true,
        IncludeScope: true,
        IncludeId: true,
        IncludeScopeType: true,
      },
    }).then((detail) => SetDetail(detail));
  }, [props.parameters.wuid, props.parameters.ip]);

  return (
    <React.Fragment>
      <GraphDetails data={detail} />
      <SubGraphDetails data={detail} />
      <ActivityDetails data={detail} />
      <EdgeDetails data={detail} />
    </React.Fragment>
  );
};

export default GetDetail;
