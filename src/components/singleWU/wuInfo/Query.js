import React from "react";
import { Card } from "antd";

class Query extends React.Component {
  render() {
      if (this.props.data.length !== 0) {
          console.log(this.props.data.Workunit);
          const text = this.props.data.Workunit.Query.Text;
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
}

export default Query;
