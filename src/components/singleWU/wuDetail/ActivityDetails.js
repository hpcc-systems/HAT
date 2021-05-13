import React from "react";
import { Table, Spin } from "antd";

function ActivityDetails(props) {
  if (props.data.length !== 0) {
    // Utility function to check if the given "key" exists in the node and return the formatted value if it exists else return ""
    function filterFunction(obj, key) {
      let result = !obj.Properties.Property.filter((p) => p.Name === key)[0]
        ? ""
        : obj.Properties.Property.filter((p) => p.Name === key)[0].Formatted;

      return result;
    }

    // Filter only activity from the entire list
    const activity = props.data.Scopes.Scope.filter(
      (act) => act.ScopeType === "activity"
    );
    let data = [];

    activity.forEach(function (node) {
      let m = {
        ScopeName: node.ScopeName,
        TimeAvgLocalExecute: filterFunction(node, "TimeAvgLocalExecute"),
        TimeMinLocalExecute: filterFunction(node, "TimeMinLocalExecute"),
        TimeMaxLocalExecute: filterFunction(node, "TimeMaxLocalExecute"),
        TimeDeltaLocalExecute: filterFunction(node, "TimeDeltaLocalExecute"),
        TimeStdDevLocalExecute: filterFunction(node, "TimeStdDevLocalExecute"),
        NodeMinLocalExecute: filterFunction(node, "NodeMinLocalExecute"),
        NodeMaxLocalExecute: filterFunction(node, "NodeMaxLocalExecute"),
        SkewMinLocalExecute: filterFunction(node, "SkewMinLocalExecute"),
        SkewMaxLocalExecute: filterFunction(node, "SkewMaxLocalExecute"),
        Label: filterFunction(node, "Label"),
        EclText: filterFunction(node, "EclText"),
        RecordSize: filterFunction(node, "RecordSize"),
        PredictedCount: filterFunction(node, "PredictedCount"),
        DefinitionList: filterFunction(node, "DefinitionList"),
        Kind: filterFunction(node, "Kind"),
      };
      data.push(m);
    });

    const columns = [
      {
        title: "ScopeName",
        dataIndex: "ScopeName",
        align: "left",
      },
      {
        title: "TimeAvgLocalExecute",
        dataIndex: "TimeAvgLocalExecute",
        align: "left",
      },
      {
        title: "TimeMinLocalExecute",
        dataIndex: "TimeMinLocalExecute",
        align: "right",
      },
      {
        title: "TimeMaxLocalExecute",
        dataIndex: "TimeMaxLocalExecute",
        align: "right",
      },
      {
        title: "TimeDeltaLocalExecute",
        dataIndex: "TimeDeltaLocalExecute",
        align: "left",
      },
      {
        title: "TimeStdDevLocalExecute",
        dataIndex: "TimeStdDevLocalExecute",
        align: "right",
      },
      {
        title: "NodeMinLocalExecute",
        dataIndex: "NodeMinLocalExecute",
        align: "right",
      },
      {
        title: "NodeMaxLocalExecute",
        dataIndex: "NodeMaxLocalExecute",
        align: "left",
      },
      {
        title: "SkewMinLocalExecute",
        dataIndex: "SkewMinLocalExecute",
        align: "right",
      },
      {
        title: "SkewMaxLocalExecute",
        dataIndex: "SkewMaxLocalExecute",
        align: "right",
      },
      {
        title: "Label",
        dataIndex: "Label",
        align: "left",
      },
      {
        title: "EclText",
        dataIndex: "EclText",
        align: "right",
      },
      {
        title: "RecordSize",
        dataIndex: "RecordSize",
        align: "right",
      },
      {
        title: "PredictedCount",
        dataIndex: "PredictedCount",
        align: "right",
      },
      {
        title: "DefinitionList",
        dataIndex: "DefinitionList",
        align: "right",
      },
      {
        title: "Kind",
        dataIndex: "Kind",
        align: "right",
      },
    ];

    return (
      <React.Fragment>
        <Table
          rowKey={(record) => {
            return record.ScopeName;
          }}
          columns={columns}
          dataSource={data}
          title={() => "Activities"}
          size="small"
        />
      </React.Fragment>
    );
  } else {
    return <Spin size="large"></Spin>;
  }
}

export default ActivityDetails;
