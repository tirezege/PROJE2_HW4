#version 120

uniform sampler2D fbo_texture;
uniform float offset;
varying vec2 f_texcoord;
float3 InColor = tex1D(inSampler, IN.UV).xyz;
float3 OutColor;

 
void main(void) {
    vec2 texcoord = f_texcoord;
    texcoord.x += sin(texcoord.y * 4*2*3.14159 + offset) / 100;
    gl_FragColor = texture2D(fbo_texture, texcoord);
}

