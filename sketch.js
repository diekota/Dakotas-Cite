// For the #WCCChallenge, theme: "as above, so below."

const num = 180;
let counter = 0;
let counting = true;
let mode = 0;

function setup() {
	createCanvas(windowHeight * 0.95, windowHeight * 0.95, WEBGL);
	strokeWeight(2);
	ang = createVector(0, 0, 0);
	tang = createVector(HALF_PI, 0, 0);

    cnv.parent('sketch-container');
}

function draw() {
	if (frameCount > num) {
		counter += 1 * counting;
		tang.y = map(mouseX, 0, width, -PI, PI, true);
		tang.x = map(mouseY, 0, height, -PI, PI, true);
	}
	ang.lerp(tang, 0.1);

	let m = 6 * TAU * cos(counter / 180) / num;
	orbitControl(0, 0, 0.5);
	rotateZ(ang.z)
	rotateY(ang.y);
	rotateX(ang.x);
	background(255);
	noFill();
	for (let i = 0; i < min(num, frameCount); i++) {
		let a = i * PI / num;
		let r = sin(a) * height / 1.25;
		stroke(0, (num - i) * (i % 2), i * (i % 2), 200);
		push();
		switch (mode) {
			case 0:
				rotateZ(2 * (i - num / 2) * m);
				break;
			case 1:
				rotateZ((i < num / 2) * PI);
				rotateY((i - num / 2) * m);
				break;
			case 2:
				rotateZ((i < num / 2) * PI);
				rotateX((i - num / 2) * m);
				break;
		}
		translate(0, 0, cos(a) * height / 2.5);
		arc(0, 0, r, r, 0, PI, OPEN, 36);
		pop();
	}
}

function keyPressed() {
	if (keyCode != 32) return;
	counting = !counting;
}

function mousePressed() {
	mode = (mode + 1) % 3;
	if (counting) {
		tang = createVector(HALF_PI * (mode == 0),0,(mode==2)*HALF_PI); 
		counter = 0;
		frameCount = 0;
	}
}