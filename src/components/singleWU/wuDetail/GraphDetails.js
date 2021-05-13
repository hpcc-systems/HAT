import React from "react";
import { Table, Spin } from "antd";

function GraphDetails(props) {
  if (props.data.length !== 0) {
    console.log(props.data.Scopes.Scope);

    // Utility function to check if the given "key" exists in the node and return the formatted value if it exists else return ""
    function filterFunction(obj, key) {
      let result = !obj.Properties.Property.filter((p) => p.Name === key)[0]
        ? ""
        : obj.Properties.Property.filter((p) => p.Name === key)[0].Formatted;

      return result;
    }

    // Filter only graphs from the entire list
    const graphData = props.data.Scopes.Scope.filter(
      (g) => g.ScopeType === "graph"
    );
    let data = [];

    graphData.forEach(function (node) {
      let m = {
        ScopeName: node.ScopeName,
        WhenStarted: filterFunction(node, "WhenStarted"),
        TimeElapsed: filterFunction(node, "TimeElapsed"),
        WhenFinished: filterFunction(node, "WhenFinished"),
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
        title: "WhenFinished",
        dataIndex: "WhenFinished",
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
          title={() => "Graphs"}
          size="small"
        />
      </React.Fragment>
    );
  } else {
    return <Spin size="large"></Spin>;
  }
}

export default GraphDetails;
