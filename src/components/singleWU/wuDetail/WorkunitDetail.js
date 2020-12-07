import React from "react";
import { Result, Layout, BackTop } from "antd";
import GetDetail from "./GetDetail";

class WorkunitDetail extends React.Component {
  state = {
    wuid: "",
    ip: "",
    user: "",
    pass: "",
  };

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
    const params = WorkunitDetail.getQueryStringParams(
      this.props.location.search
    );
    if (params.wuid) {
      return (
        <React.Fragment>
          <Layout className="site-layout" style={{ marginLeft: 30 }}>
            <GetDetail
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

export default WorkunitDetail;
