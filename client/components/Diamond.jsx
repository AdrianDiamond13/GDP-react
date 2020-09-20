import React, { Component } from 'react';
import { Link , Redirect , withRouter } from 'react-router-dom';
import * as THREE from 'three';
import * as GLTFLoader from 'three-gltf-loader';
import { BrowserRouter as Router } from 'react-router-dom';


class Diamond extends Component{
    constructor(props){
        super(props)
       
        this.diamond = 'yo';
        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD GLTF LOADER    
        this.loader = new GLTFLoader();
        //BIND HELPER METHODS
        this.load = this.load.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        
        //Flag to determine if mouse is over the box
        this.isMouseOver = false;
        this.hasClicked = 0;
    
        //Raycaster
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.diamondClass;
    }

    load(){
        this.loader.load(
            // resource URL
            '../../diamond_object/scene.gltf',
            // called when the resource is loaded
             ( gltf ) => {
        
                this.diamond = gltf.scene
                this.scene.add( gltf.scene );
               
                //Call start here once the asset has loaded
                this.start()
            },
            // called while loading is progressing
             ( xhr ) => {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
             ( error ) => {
                console.log( 'An error happened', error );
            }
        ); 
    }







    //onMouseMove function
    onMouseMove(event){
      event.preventDefault();
      this.hasClicked++
      // console.log("hasClicked", this.hasClicked)
      
      this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      var intersects = this.raycaster.intersectObjects(this.scene.children, true);
      if(intersects.length === 0){
          this.isMouseOver = false;
          // console.log('NO INTERSECTION')
      }
      for(var i=0; i<intersects.length; i++){
          this.isMouseOver = true
          // console.log('INTERSECTION')
          this.props.toggle()
          console.log('this.props.history', this.props.history)
          //This comes up as an TypeError...but it works so...IDK
          this.props.history('/main')

      }
  }

  





  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight    
    
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)
    this.camera.position.z = 5    
    
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.mount.appendChild(this.renderer.domElement)    

    //ADD DIAMOND
    this.load()


    //LIGHT RESOURCES
    let intensity = 3;
    let rectLight = new THREE.RectAreaLight( '#00FF00', intensity,  3, 3 );
    rectLight.position.set( 2, 2, 1 );
    rectLight.lookAt( 0, 0, 0 );
    this.scene.add( rectLight )

    // var light = new THREE.PointLight('#008000', 1, 500);
    // light.position.set(0,0,2);
    // light.lookAt(0,0,0)
    // this.scene.add(light); 

    let rectLight2 = new THREE.RectAreaLight( '#00FF00', intensity,  3, 3 );
    rectLight2.position.set( -2, -2, -1 );
    rectLight2.lookAt( 0, 0, 0 );
    this.scene.add( rectLight2 )

    let rectLight3 = new THREE.RectAreaLight( '#00FF00', intensity,  5, 5 );
    rectLight3.position.set( 0, -3, -3 );
    rectLight3.lookAt( 0, 0, 0 );
    this.scene.add( rectLight3 )

    let rectLight4 = new THREE.RectAreaLight( '#00FF00', 1,  5, 5 );
    rectLight4.position.set( 0, 5, 0 );
    rectLight4.lookAt( 0, 0, 0 );
    this.scene.add( rectLight4 )


    //Event listener when someone hovers over the diamond
    window.addEventListener("click", this.onMouseMove); 
    
    //resize the renderer and the camera aspect ratio when we shrink/expand the window
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      //we call this everytime an adjustment on the window is made
      this.camera.updateProjectionMatrix();
  })
  }
  



  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
   this.diamond.rotation.x += 0.01
   this.diamond.rotation.y += 0.01
   this.diamond.rotation.z += 0.005    
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
 renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    let diamondClass = this.props.state.showDiamond? "show":"hidden"
  


    return(
      
        // <div className={diamondClass}  onClick={this.props.toggle}>
        // <Link to="/main"   onClick={this.props.toggle}>
      <div className={diamondClass}
        style={{ width: '20px',  height: '20px' }}
        ref={(mount) => { this.mount = mount}}
        />
        // </Link>
        // </div>
    )
  }
}

//By adding withRouter, you have access to three props: history, location, path.
export default withRouter(Diamond);