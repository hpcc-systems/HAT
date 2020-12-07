import React from 'react';
import { Spin } from "antd";

class GraphDetails extends React.Component{

    render() {
        if (this.props.data.length !== 0) {
          console.log(this.props.data.Scopes.Scope);

          //const graphs = this.props.data.Scopes.Scope.map(function (g) { return [g.ScopeName,g.ScopeType] });
          const graphs = this.props.data.Scopes.Scope.filter((g) => g.ScopeType === "graph");
          console.log("Graphs: " + graphs);
          return <React.Fragment>Test123</React.Fragment>;
        } else {
          return <Spin size="large"></Spin>;
        }

    }
}

export default GraphDetails;