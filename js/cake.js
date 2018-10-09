var 
    renderer = new THREE.WebGLRenderer({antialias: true}),  
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(45, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000),
    ambient = new THREE.AmbientLight(0xFFFFFF, 0.2),
    light = new THREE.SpotLight(0xFFFFFF, 1.6, 2000),
    cake = new THREE.Object3D(),
    cylHeight = 0,
    cylCounter = 0,
    isDragging = false,
    mouseStartPos = {x: 0, y: 0, z: 0},
    mouseDif = {x: 0, y: 0, z: 0},
    cylSize = {cyl1: 1, cyl2: 1, cyl3: 1, cyl4: 1, cyl5: 1},
    prevSize = 1,
    layerName = '',
    prevLayer = '',
    prevColor = 0x000000;

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

// camera.lookAt(scene.position);
// renderer.setClearColor("hsl(35, 58%, 65%)");
renderer.setClearColor("hsl(44, 64%, 60%)");
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;



// camera.position.set(250, 30, 0);
camera.position.set(0, 30, 250);
// camera.rotation.x = -0.4;
// camera.rotation.y = 1.55;
// camera.rotation.z = 0.3;



// ambient.position.set(0, 1, 0);

// ambient.castShadow = true;

scene.add(ambient);

light.position.set(0, 400, 300);
// light.rotation.set(-0.4, 0.9, 0);
light.castShadow = true;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 3000;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;



scene.add(light);

createCylinder();

light.target = cake;

var floorGeom = new THREE.CylinderGeometry(50, 50, 1, 32); 
var floorMat = new THREE.MeshLambertMaterial({color: "hsl(44, 64%, 60%)"});

var floor = new THREE.Mesh(floorGeom, floorMat);

floor.position.y = -8;
// floor.rotation.x = -1.57;
// floor.position.y = -7.5;

floor.recieveShadow = true;

scene.add(floor);

// function animate() {
//     requestAnimationFrame( animate );
function loop(){
    // combo.rotation.y += 0.01;
    // combo.children[0].rotation.x += 0.01;
    // combo.children[0].material = new THREE.MeshBasicMaterial({color: 0x000000});
    $(".output").append(renderer.domElement);

    


    renderer.render( scene, camera ); 
    requestAnimationFrame(function(){loop();});
}

loop();

// }
// animate();

function createCylinder() {
    var cylinderGeom = new THREE.CylinderGeometry(30, 30, 15, 32);
    var cylinderMat = new THREE.MeshLambertMaterial({color: 0xBBBBBB, wireframe: false});

    var cylinder = new THREE.Mesh(cylinderGeom, cylinderMat);

    cylCounter++;
    cylinder.name = "cyl" + cylCounter;
    $('.sel').append('<option class="opt" id="'+cylCounter+'" value="cyl'+cylCounter+'" selected>Слой '+cylCounter+'</option>');

    cylinder.position.y = cylHeight;
    cake.add(cylinder);
    cake.castShadow = true;
    // cylinder.recieveShadow = false;
    cylHeight += 15;
    scene.add(cake);
};



function onClick( event ) {
    if(prevLayer != ""){
        cake.getObjectByName(prevLayer).material.color.set(prevColor);
    }

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    // console.log(intersects);

    raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects( cake.children );
    console.log(raycaster.intersectObjects( cake.children)[0].object.name);
    layerName = intersects[0].object.name;
    console.log($('.sel>option[value='+layerName+']').attr('id'));
    selLayer(layerName);
    // $('.sel').find(layerName).prop({selected: true});
	// for ( var i = 0; i < intersects.length; i++ ) {
            prevLayer = layerName;
            prevColor = intersects[0].object.material.color.getStyle();
            console.log(intersects[0].object.material.color);
            intersects[0].object.material.color.set( 0xff0000 );
            $('.cardOverlay').animate({bottom: "-325px"}, 400, "easeInOutBack");

	// }

}

window.addEventListener( 'mousedown', onClick, false );
