(function(){
    //Escena Camara Render
    // DEFINIMOS LA ESCENA
    let scene=new THREE.Scene();

    // DEFINIMOS CAMARA
    const aspectRatio=window.innerWidth/window.innerHeight;
    let camera=new THREE.PerspectiveCamera(75,aspectRatio,0.1,100);
  
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    camera.position.z=50;
    camera.position.y=5;
    // armammos el muñeco de nieve
    let esferageometry = new THREE.SphereGeometry(11,32,32);
    let groundMaterial= new THREE.MeshPhongMaterial({
        color: 0xffefff
    });
    let esfera =new THREE.Mesh(esferageometry,groundMaterial);
    
    
    let esferageometry2 = new THREE.SphereGeometry(15,20,10);
    let groundMaterial2= new THREE.MeshPhongMaterial({
        color: 0xfffffe
    });
    let esfera2 =new THREE.Mesh(esferageometry2,groundMaterial2);
    
    let esferageometry3 = new THREE.SphereGeometry(8,20,10);
    let groundMaterial3= new THREE.MeshPhongMaterial({
        color: 0xffffee
    });
    let esfera3 =new THREE.Mesh(esferageometry3,groundMaterial3);

    let circulogeometry = new THREE.CircleGeometry(13,32);
    let groundMaterial4= new THREE.MeshPhongMaterial({
        color: 0x225588
    });
    let circulo =new THREE.Mesh(circulogeometry,groundMaterial4);
    
    let cilindrogeometry = new THREE.CylinderGeometry(5,5,8,32);
    let groundMaterial5= new THREE.MeshPhongMaterial({
        color: 0x2285ff
    });
    let cilindro =new THREE.Mesh(cilindrogeometry,groundMaterial5);
    
    let ojogeometry1 = new THREE.SphereGeometry(1,20,10);
    let groundMaterial6= new THREE.MeshPhongMaterial({
        color: 0x005500
    });
    let ojoi =new THREE.Mesh(ojogeometry1,groundMaterial6);

    let ojogeometry2 = new THREE.SphereGeometry(1,20,10);
    let groundMaterial7= new THREE.MeshPhongMaterial({
        color: 0x005500
    });
    let ojod =new THREE.Mesh(ojogeometry2,groundMaterial7);
    
    let narizgeometry = new THREE.ConeGeometry(1,8,32);
    let groundMaterial8= new THREE.MeshPhongMaterial({
        color: 0xff5500
    });
    let nariz =new THREE.Mesh(narizgeometry,groundMaterial8);


    function CustomSinCurve( scale ) {

        THREE.Curve.call( this );
    
        this.scale = ( scale === undefined ) ? 1 : scale;
    
    }
    
    CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
    CustomSinCurve.prototype.constructor = CustomSinCurve;
    
    CustomSinCurve.prototype.getPoint = function ( t ) {
        var tx = t * 3 - 1.5;
        // aqui se define cuantas curvas tendra la forma
        var ty = Math.sin( 1 * Math.PI * t );
        var tz = 0;
    
        return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
    
    };
    var path = new CustomSinCurve( 7 );
    var geometry10 = new THREE.TubeGeometry( path, 20, 0, 32, false );
    var material10 = new THREE.MeshPhongMaterial( { color: 0x224433 } );
    var brazoiz = new THREE.Mesh( geometry10, material10 );

    var path = new CustomSinCurve( 7 );
    var geometry11 = new THREE.TubeGeometry( path, 20, 0, 32, false );
    var material11 = new THREE.MeshPhongMaterial( { color: 0x224433 } );
    var brazoder = new THREE.Mesh( geometry11, material11 );
    
    
    let pointLight= new THREE.PointLight(0xdfebff);
    
    pointLight.position.y=15;
    pointLight.position.z=20;
    
    scene.background= new THREE.Color(0xeeeeee);
    esfera.position.set(0,3.5,0);
    
    esfera2.position.set(0,-11,0);
    
    esfera3.position.set(0,16.5,0);
    
    circulo.position.set(2.5,21.5,0);
    circulo.rotation.y=12;
    circulo.rotation.x=8;
    
    cilindro.position.set(4.5,25.5,0);
    cilindro.rotation.y=1;
    cilindro.rotation.x=1;
    cilindro.rotation.z=2;
    
    ojoi.position.set(-3,18,7);
    ojod.position.set(2,18,7);
    
    nariz.position.set(0,17,9);
    nariz.rotation.x=20;
    nariz.rotation.z=6.3;
    
    brazoiz.position.set(-15,12,2);
    brazoiz.rotation.x=4;
    brazoiz.rotation.z=6.3;
    
    brazoder.position.set(15,12,2);
    brazoder.rotation.x=4;
    brazoder.rotation.z=6.3;

    scene.add(esfera);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(esfera2);
    scene.add(esfera3);
    scene.add(circulo);
    scene.add(cilindro);
    scene.add(ojoi);
    scene.add(ojod);
    scene.add(nariz);
    scene.add( brazoiz);
    scene.add( brazoder);
    scene.add(pointLight);
    scene.background = new THREE.Color( 'skyblue' );
    //funcion que hara girar al muñeco
    function loop(){
        requestAnimationFrame(loop)
        scene.rotation.y +=0.0008;
        renderer.render(scene,camera);
    }
    loop();
})();