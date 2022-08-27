import React,{ useEffect,useState } from "react";
import {Tick,MTLModel} from 'react-3d-viewer';
import {OBJModel} from 'react-3d-viewer'
import './Threed.css'
import { BarLoader,DoubleOrbit, SlidingPebbles } from 'react-spinner-animated';
function Threed(model=0) {
  const [load,setLoad] = useState(0)
// const [rotation,setRotation] = useState({x:0,y:0})

  // useEffect(()=>{
  //   var tick = Tick(()=>{
  //     // var {rotation} = this.state
  //     rotation.y += 0.005
  //     setRotation({rotation})
  
  //   })
  //   return () => {
  //     tick.animate = false
  //   }
  // },[]);
  return (
    <div className="main-model">
        {/* <MTLModel 
        enableZoom = {false}
        position={{x:0,y:-100,z:0}}
        rotation={rotation}
        texPath="model"
        mtl="model/machine.mtl"
        src="model/machine.obj"
     /> */}
      {load ? null : <div className="loading"><DoubleOrbit text={"Loading..."}  
    center={true} width={"150px"} height={"150px"}/></div>}
      <OBJModel 
      src= {typeof model !== 'object' ? model :'model/machine.obj'} //"model/machine.obj" 
      texPath=""
      width="800" height="400"  
      position={{x:1000,y:-1000,z:0}} 
      onLoad={()=>{
        setLoad(1)
      }}
      onProgress={xhr=>{
        if (load === 0){
          setLoad(0)
        }
      }}
      />
    </div>
  )
}

export default Threed