import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WorkunitInfo from "./singleWU/wuInfo/WorkunitInfo";
import WorkunitDetail from "./singleWU/wuDetail/WorkunitDetail";
import CompareWorkunits from "./compareWU/CompareWorkunits";
import LeftNav from './layout/LeftNav';
import { Layout } from "antd";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Layout style={{ minHeight: "100vh" }}>
              <LeftNav />
              <Route path="/Info" exact component={WorkunitInfo} />
              <Route path="/Graph" exact component={WorkunitDetail} />
              <Route path="/Compare" exact component={CompareWorkunits} />
            </Layout>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;