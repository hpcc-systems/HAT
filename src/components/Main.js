import React from 'react';
import GetInfo from "./singleWU/wuInfo/GetInfo";
import GetDetail from "./singleWU/wuDetail/GetDetail";

// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//        <GetInfo parameters={{'wuid':'W20201022-190330', 'ip':'http://10.173.147.1:8010/'}}/>
//       </div>
//     );
//   }
// }

const Main = (props) => {
    return (
      <div>
       <GetInfo parameters={props.parameters}/>
       <br/>
       <GetDetail parameters={props.parameters}/> 
      </div>
    );
  
}

export default Main;