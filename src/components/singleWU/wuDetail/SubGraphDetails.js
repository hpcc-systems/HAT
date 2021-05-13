import React from "react";
import { Table, Spin } from "antd";

function SubGraphDetails(props) {
  if (props.data.length !== 0) {
    // Utility function to check if the given "key" exists in the node and return the formatted value if it exists else return ""
    function filterFunction(obj, key) {
      let result = !obj.Properties.Property.filter((p) => p.Name === key)[0]
        ? ""
        : obj.Properties.Property.filter((p) => p.Name === key)[0].Formatted;

      return result;
    }

    // Filter only sub-graphs from the entire list
    const subGraphData = props.data.Scopes.Scope.filter(
      (sg) => sg.ScopeType === "subgraph"
    );
    let data = [];

    subGraphData.forEach(function (node) {
      let m = {
        ScopeName: node.ScopeName,
        WhenStarted: filterFunction(node, "WhenStarted"),
        TimeElapsed: filterFunction(node, "TimeElapsed"),
        CostExecute: filterFunction(node, "CostExecute"),
        NumSlaves: filterFunction(node, "NumSlaves"),
        NumExecutions: filterFunction(node, "NumExecutions"),
        NumAvgExecutions: filterFunction(node, "NumAvgExecutions"),
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
        title: "WhenStarted",
        dataIndex: "WhenStarted",
        align: "left",
      },
      {
        title: "TimeElapsed",
        dataIndex: "TimeElapsed",
        align: "right",
      },
      {
        title: "CostExecute",
        dataIndex: "CostExecute",
        align: "right",
      },
      {
        title: "NumSlaves",
        dataIndex: "NumSlaves",
        align: "left",
      },
      {
        title: "NumExecutions",
        dataIndex: "NumExecutions",
        align: "right",
      },
      {
        title: "NumAvgExecutions",
        dataIndex: "NumAvgExecutions",
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
          title={() => "Sub-Graphs"}
          size="small"
        />
      </React.Fragment>
    );
  } else {
    return <Spin size="large"></Spin>;
  }
}

export default SubGraphDetails;
