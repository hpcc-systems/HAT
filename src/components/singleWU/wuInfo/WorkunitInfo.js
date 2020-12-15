import React from "react";
import { Result,Layout, BackTop } from "antd";
import GetInfo from "./GetInfo";

class WorkunitInfo extends React.Component {
  state = {
    wuid: "",
    ip: "",
    user: "",
    pass: "",
  };

  // componentDidUpdate() {
  //   const newProps = this.getQueryStringParams(this.props.location.search);
  //   if (newProps.wuid !== this.state.wuid) {
  //     this.setState({ wuid: newProps.wuid });
  //   }
  //   if (newProps.ip !== this.state.ip) {
  //     this.setState({ wuid: newProps.wuid });
  //   }
  // }

  // static getDerivedStateFromProps(props, state) {
  //   const newProps = GraphAnalytics.getQueryStringParams(props.location.search);
  //   console.log("Inside GetDerivedState");
  //   console.log(newProps);
  //   if (newProps.wuid !== state.wuid) {
  //     return {
  //       wuid: newProps.wuid,
  //       ip: newProps.ip,
  //     };
  //   }
  //   return null;
  // }

  // Extract query parameters from URL
  static getQueryStringParams = (query) => {
    return query
      ? (/^[?#]/.test(query) ? query.slice(1) : query)
          .split("&")
          .reduce((params, param) => {
            let [key, value] = param.split("=");
            params[key] = value
              ? decodeURIComponent(value.replace(/\+/g, " "))
              : "";
            return params;
          }, {})
      : {};
  };

  render() {
    console.log(this.props.location.search);
    const params = WorkunitInfo.getQueryStringParams(
      this.props.location.search
    );

    if (params.wuid && params.ip) {
      return (
        <React.Fragment>
          <Layout className="site-layout" style={{ marginLeft: 30 }}>
            <GetInfo
              wuid={params.wuid}
              ip={params.ip}
              user={params.user}
              pass={params.pass}
            />
            <BackTop />
          </Layout>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Layout className="site-layout" style={{ marginLeft: 30 }}>
            <br />
            <Result status="warning" title="Missing Workunit ID and/or IP!" />
          </Layout>
        </React.Fragment>
      );
    }
  }
}

export default WorkunitInfo;
