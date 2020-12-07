import React from "react";
import { Table, Tooltip } from "antd";

class DebugValues extends React.Component {
  render() {
    if (this.props.data.length !== 0) {
      const data = this.props.data.Workunit.DebugValues.DebugValue;
      const columns = [
        {
          title: "Name",
          dataIndex: "Name",
          align: "left",
        },
        {
          title: "Value",
          dataIndex: "Value",
          align: "right",
          ellipsis: {
            showTitle: false,
          },
          render: (Value) => (
            <Tooltip placement="topLeft" title={Value}>
              {Value}
            </Tooltip>
          ),
        },
      ];
      return (
        <div>
          <Table
            rowKey={(record) => record.Name}
            columns={columns}
            dataSource={data}
            title={() => "Debug Values"}
                  size="small"
                  style={{fontSize:'8'}}
          />
        </div>
      );
    } else {
      return <Table></Table>;
    }
  }
}

export default DebugValues;
