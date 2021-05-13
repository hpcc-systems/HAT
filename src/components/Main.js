import React from 'react';
import GetInfo from "./singleWU/wuInfo/GetInfo";
import GetDetail from "./singleWU/wuDetail/GetDetail";



const hatComp = (props) => {
  return(
    <div>
      <GetInfo parameters={props.parameters}/>
      <br/>
      <GetDetail parameters={props.parameters}/> 
    </div>
  );
}

function Hat(props){
  return hatComp(props)
}

export default Hat;