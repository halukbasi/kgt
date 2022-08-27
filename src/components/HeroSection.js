import React,{ useEffect,useState } from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Tick,MTLModel} from 'react-3d-viewer';

// render(){
//   return(
//     <div>
//      <MTLModel 
//         enableZoom = {false}
//         position={{x:0,y:-100,z:0}}
//         rotation={this.state.rotation}
//         texPath="./src/lib/model/"
//         mtl="./src/lib/model/freedom.mtl"
//         src="./src/lib/model/freedom.obj"
//      />
//     </div>
//   )
// }
// componentWillMount(){
//     this.tick.animate = false
// }
// componentDidMount(){
//   this.tick = Tick(()=>{
//     var {rotation} = this.state
//     rotation.y += 0.005
//     this.setState({rotation})

//   })
// }




function HeroSection() {
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
    <div className='hero-container'>
      {/* <MTLModel 
        enableZoom = {false}
        position={{x:0,y:-100,z:0}}
        rotation={rotation}
        texPath="model"
        mtl="model/machine.mtl"
        src="model/machine.obj"
     /> */}
      <video src='/videos/video-6.mp4' autoPlay loop muted />
      <h1>KGT MAKİNE</h1>
      <p>Siz değerli müşterilerimiz ile sadece müşteri - satıcı ilişkisi olarak değil,</p>
      <p>iş partneri olmak hedefi ile yola çıkan KGT Makine her geçen gün kendini geliştirmektedir.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ÜNİTELER
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          VİDEOLAR <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
  
}



export default HeroSection;
