import React from "react";
import { Table, Tooltip } from "antd";

function Exceptions(props) {
  if (props.data.length !== 0) {
    if (props.data.Workunit.Exceptions) {
      const slimData = props.data.Workunit.Exceptions.ECLException.map(
        ({ Source, ...rest }) => ({
          ...rest,
        })
      );
      const data = slimData;
      const columns = [
        {
          title: "Severity",
          dataIndex: "Severity",
          align: "left",
        },
        {
          title: "Message",
          dataIndex: "Message",
          align: "left",
          ellipsis: {
            showTitle: false,
          },
          render: (Message) => (
            <Tooltip placement="topLeft" title={Message}>
              {Message}
            </Tooltip>
          ),
        },
        {
          title: "FileName",
          dataIndex: "FileName",
          align: "left",
          ellipsis: {
            showTitle: false,
          },
          render: (FileName) => (
            <Tooltip placement="topLeft" title={FileName}>
              {FileName}
            </Tooltip>
          ),
        },
        {
          title: "LineNo",
          dataIndex: "LineNo",
          align: "right",
        },
        {
          title: "Column",
          dataIndex: "Column",
          align: "right",
        },
        {
          title: "Code",
          dataIndex: "Code",
          align: "right",
        },
      ];
      return (
        <div>
          <Table
            rowKey={(record) => {
              return (
                record.Code + record.LineNo + record.Column + record.FileName
              );
            }}
            columns={columns}
            dataSource={data}
            title={() => "Exceptions"}
            size="small"
          />
        </div>
      );
    } else {
      return <Table title={() => "Exceptions"}></Table>;
    }
  } else {
    return <Table title={() => "Exceptions"}></Table>;
  }
}

export default Exceptions;
