function attributeSetFloats(gl, prog, attr_name, rsize, arr) {
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
	var attr = gl.getAttribLocation(prog, attr_name);
	gl.enableVertexAttribArray(attr);
	gl.vertexAttribPointer(attr, rsize, gl.FLOAT, false, 0, 0);
}

function getContext(canvasName) {
	var canvas = document.getElementById(canvasName);
	if(canvas == null) {
		alert(canvasName);
		alert("no canvas found"); return;
	}
	var names = ["webgl",
		"experimental-webgl",
		"webkit-3d",
		"moz-webgl"];
	var ctx = null;
	for(var i=0;i<names.length;i++) {
		try {
			ctx = canvas.getContext(names[i]);
		}
		catch(e) {}
		if(ctx) break;
	}
	if(ctx == null) { alert("webGL not found"); }
	else return ctx;
}

function getShader(gl, id) {
	var script = document.getElementById(id);
	if(!script) return null;
	var str="";
	var k = script.firstChild;
	while(k) {
		if(k.nodeType == 3) {
			str += k.textContent;
		}
		k = k.nextSibling;
	}
	var shader;
	if(script.type=="x-shader/x-fragment") {
		shader = gl.createShader(gl.FRAGMENT_SHADER);
	}
	else if(script.type=="x-shader/x-vertex") {
		shader = gl.createShader(gl.VERTEX_SHADER);
	}
	else return null;
	
	gl.shaderSource(shader, str);
	gl.compileShader(shader);
	
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return null;
    }
    return shader;
}

function initShaderProgram(gl) {
	var fShader = getShader(gl, "shader-fs");
	var vShader = getShader(gl, "shader-vs");
	
	
	var prog = gl.createProgram();
	gl.attachShader(prog, fShader);
	gl.attachShader(prog, vShader);
	
	gl.linkProgram(prog);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
		alert("Could not initialise shaders");
	}
	gl.useProgram(prog);	
	return prog;
}

function createVertexArray(phase) {
	var arr = [0,1,0];
	
	for(var i=0;i<=50;i++) {
		var xR,y,z;
		var xL;
		
		if(phase<0.5) xR = Math.sin(3.14159*2*i/100);
		else {
			var right = Math.sin(3.14159*2*i/100);
			var left = -right;
			var w = (phase-0.5)/0.5;
			xR = w*left + (1-w)*right;
		}
		arr.push(xR);
		y  = Math.cos(3.14159*2*i/100);
		arr.push(y);
		z  = 0;
		arr.push(z);
		
		if(phase>0.5) xL = -Math.sin(3.14159*2*i/100);
		else {
			var right  = Math.sin(3.14159*2*i/100);
			var left = -right;
			xL = (phase/0.5)*left + (1-phase/0.5)*right 
		}
		arr.push(xL);
		arr.push(y);
		arr.push(z);
	}
	
	return arr;
}

function draw(canvasName, date) {
	
	try {
		var gl = getContext(canvasName);
		if (!gl) { throw "x"; }
	} catch (err) {
		throw "Your web browser does not support WebGL!";
	}
	gl.clearColor(0.0, 0.0, 0.0, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);

	var prog = initShaderProgram(gl);

	var phase = moonPhase(date);
	
	var arr = createVertexArray(phase);
	
	attributeSetFloats(gl, prog, "pos", 3, arr);
	
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 102);	
}
