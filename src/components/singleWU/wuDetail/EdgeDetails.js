import React from 'react';
import { Table, Spin } from "antd";

class EdgeDetails extends React.Component{

    render() {
        if (this.props.data.length !== 0) {
          // Utility function to check if the given "key" exists in the node and return the formatted value if it exists else return ""
          function filterFunction(obj, key) {
            let result = !obj.Properties.Property.filter(
              (p) => p.Name === key
            )[0]
              ? ""
              : obj.Properties.Property.filter((p) => p.Name === key)[0]
                  .Formatted;

            return result;
          }

          // Filter only activity from the entire list
          const edge = this.props.data.Scopes.Scope.filter(
            (e) => e.ScopeType === "edge"
          );
          let data = [];

          edge.forEach(function (node) {
            let m = {
              ScopeName: node.ScopeName,
              NumRowsProcessed: filterFunction(node, "NumRowsProcessed"),
              NumAvgRowsProcessed: filterFunction(node, "NumAvgRowsProcessed"),
              NumStarts: filterFunction(node, "NumStarts"),
              NumAvgStarts: filterFunction(node, "NumAvgStarts"),
              NumStops: filterFunction(node, "NumStops"),
              NumAvgStops: filterFunction(node, "NumAvgStops"),
              IdSource: filterFunction(node, "IdSource"),
              IdTarget: filterFunction(node, "IdTarget"),
              SourceIndex: filterFunction(node, "SourceIndex"),
              TargetIndex: filterFunction(node, "TargetIndex"),
              IsDependency: filterFunction(node, "IsDependency"),
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
              title: "NumRowsProcessed",
              dataIndex: "NumRowsProcessed",
              align: "left",
            },
            {
              title: "NumAvgRowsProcessed",
              dataIndex: "NumAvgRowsProcessed",
              align: "right",
            },
            {
              title: "NumStarts",
              dataIndex: "NumStarts",
              align: "right",
            },
            {
              title: "NumAvgStarts",
              dataIndex: "NumAvgStarts",
              align: "left",
            },
            {
              title: "NumStops",
              dataIndex: "NumStops",
              align: "right",
            },
            {
              title: "NumAvgStops",
              dataIndex: "NumAvgStops",
              align: "right",
            },
            {
              title: "IdSource",
              dataIndex: "IdSource",
              align: "left",
            },
            {
              title: "IdTarget",
              dataIndex: "IdTarget",
              align: "right",
            },
            {
              title: "SourceIndex",
              dataIndex: "SourceIndex",
              align: "right",
            },
            {
              title: "TargetIndex",
              dataIndex: "TargetIndex",
              align: "left",
            },
            {
              title: "IsDependency",
              dataIndex: "IsDependency",
              align: "left",
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
                title={() => "Edges"}
                size="small"
              />
            </React.Fragment>
          );
        } else {
          return <Spin size="large"></Spin>;
        }
           
    }
}

export default EdgeDetails;