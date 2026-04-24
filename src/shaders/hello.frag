#ifdef GL_ES                                              
  precision highp float;                                                    
  #endif                                                    

  varying vec2 vTexCoord;                                                   
  uniform vec2 uMouse;
                                                                            
  void main() {                                             
    vec2 toLight = uMouse - vTexCoord;
    float dist = length(toLight);
    float brightness = 1.0 - dist;
    gl_FragColor = vec4(vec3(brightness), 1.0);
  }                                            