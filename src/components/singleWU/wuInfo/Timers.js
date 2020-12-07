import React from "react";
import { Table, Tooltip } from "antd";

class Timers extends React.Component {
    render() {
        if (this.props.data.length !== 0) {
            const slimData = this.props.data.Workunit.Timers.ECLTimer.map(
              ({ SubGraphId, GraphName, count, ...rest }) => ({
                ...rest,
              })
            );
            const data = slimData;
            const columns = [
              {
                title: "Name",
                dataIndex: "Name",
                align: "left",
                ellipsis: {
                  showTitle: false,
                },
                render: (Name) => (
                  <Tooltip placement="topLeft" title={Name}>
                    {Name}
                  </Tooltip>
                ),
              },
              {
                title: "Value",
                dataIndex: "Value",
                align: "right",
              },
            ];
            return (
              <div >
                <Table
                  rowKey={(record) => record.Name}
                  columns={columns}
                  dataSource={data}
                  title={() => "Timers"}
                  size="small"
                />
              </div>
            );
        }
        else {
            return <Table></Table>;
          }
  }
}

export default Timers;
