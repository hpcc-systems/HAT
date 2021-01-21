import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 
import Main from './components/Main';
import 'antd/dist/antd.dark.css';
import './assets/index.css';

//ReactDOM.render(<Main parameters={{'wuid':'W20201022-190330', 'ip':'http://10.173.147.1:8010/'}} />, document.querySelector("#root"));
ReactDOM.render(<Main parameters={{'wuid':'W20201022-190330', 'ip':'http://10.173.147.1:8010/'}} />, document.querySelector("#root"));