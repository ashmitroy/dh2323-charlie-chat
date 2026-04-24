let myShader;

  function preload() {
    myShader = loadShader('shaders/hello.vert', 'shaders/hello.frag');
  }                                                                                              
  
  function setup() {                                                                             
    createCanvas(960, 540, WEBGL);                          
    noStroke();
  }

  function draw() {                                                                              
    shader(myShader);
    myShader.setUniform('uResolution', [width, height]);  
    myShader.setUniform('uMouse', [mouseX / width, mouseY / height]);                                        
    plane(width, height);                                   
  }
