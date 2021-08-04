document.getElementById('ch').onclick = function(){

	let ds = document.getElementById('ks');
	ds.style.display = 'block';
	let kq = document.getElementById('name');
	kq.style.display = 'none';
let sec = 60;
let kj = 9;
let min = 60;
let j = 99;
let k = Math.random() * 60;
k = Math.ceil(k);
let logo = document.getElementById('logo');
let body = document.getElementById('body');
body.style.background = 'url(b.jfif)';
logo.style.display = 'none';
let b = Math.random(0) * 24;
b = Math.ceil(b);
let hrs = document.getElementById('hou');
hrs.innerHTML = b;
if (b <= 9) {
		hrs.style.left = '450px';
	}
	else if (b > 9) {
		hrs.style.left = '350px';
}


let q = Math.random(0) * 300;
q = Math.ceil(q);
let day = document.getElementById('day');
day.innerHTML = q;
if (q <= 9) {
		day.style.left = '450px';
	}
	
else if (q > j) {
	day.style.left = '230px';
}

let p = Math.random(0) * 80;
p = Math.ceil(p);
let yrs = document.getElementById('yrs');
yrs.innerHTML = p;
if (p <= 9) {
		yrs.style.left = '450px';
	}
let sech = document.getElementById('sec');
let n = document.getElementById('min');
if (k <= 9) {
		n.style.left = '450px';
	}
n.innerHTML = k;
setInterval( function(){
	sec-=1;
	sech.innerHTML = sec;
	if (sec == 0) {
		sec = 60;
	}
	if (sec <= 9) {
		sech.style.left = '400px';
	}
	else if (sec > 9) {
		sech.style.left = '350px';
	}
}, 1000);
setInterval( function(){
	k-=1;
	
	n.innerHTML = k;
	if (k == 0) {
		n.innerHTML = '00';
		n.style.color = 'red';
		k=0;
		n.style.left = '350px';
	}
}, 60000);
}