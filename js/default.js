 var windowWidth = window.innerWidth, windowHeight = window.innerHeight;
 var camera,renderer,scene;
 Init();
 animate();

function Init(){
        //
        scene = new THREE.Scene();
  
       //setup camera
 		var VIEW_ANGLE = 2.64, ASPECT = windowWidth / windowHeight, NEAR = 0.1, FAR = 10000;
 		camera = new LeiaCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
 		camera.position.set(0,0,50);	
  
       //setup rendering parameter
 		renderer = new LeiaWebGLRenderer({
         antialias:true, 
 		renderMode: _renderMode, 
 		camPanelVisible: _camPanelVisible, 
 		gyroPanelVisible: _gyroPanelVisible,
 		camFov: _camFov,    
		devicePixelRatio: 1 
        } );
 		renderer.Leia_setSize( windowWidth, windowHeight );
 		document.body.appendChild( renderer.domElement );
  
       //add object to Scene
      var graph = new THREE.Mesh(new THREE.SphereGeometry(40, 30, 100, 100), new THREE.MeshLambertMaterial({color:0xffffff}));
	  scene.add(graph);
 }

 function animate() 
 {
 	requestAnimationFrame( animate );
  
    renderer.setClearColor(new THREE.Color().setRGB(1.0, 1.0, 1.0)); 
	renderer.Leia_render(scene, camera,undefined,undefined,0.4);
 }

 