import React from "react";
import { Card } from "antd";

function Query(props) {
  if (props.data.length !== 0) {
    console.log(props.data.Workunit);
    const text = props.data.Workunit.Query.Text;
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Query" bordered={false}>
          {text}
        </Card>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Query;
