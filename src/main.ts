import * as GUI from "babylonjs-gui";
import * as BABYLON from "babylonjs";

var canvas: any = document.getElementById("renderCanvas");
var engine: BABYLON.Engine = new BABYLON.Engine(canvas, true);


var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    // GUI
    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var text1 = new GUI.TextBlock();
    text1.text = "Hello world";
    text1.color = "red";
    text1.fontSize = 24;
    advancedTexture.addControl(text1);    

    return scene;

};

let scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', function(){
    engine.resize();
});