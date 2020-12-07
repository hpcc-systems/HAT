import React, { useState, useEffect } from "react";
import { Workunit } from "@hpcc-js/comms";
import GraphDetails from './GraphDetails';

const GetDetail = (props) => {
  const [detail, SetDetail] = useState([]);

  useEffect(() => {
    let wu = Workunit.attach(
      {
        baseUrl: props.ip,
        userID: props.user,
        password: props.pass,
      },
      props.wuid
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
  }, [props.wuid, props.ip]);

  return (<GraphDetails data={detail} />);
};

export default GetDetail;
