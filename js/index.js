[].forEach.call(document.querySelectorAll('.steklo'), (e) => {
    var t = [Math.floor(Math.random() * 220), Math.floor(Math.random() * 220), Math.floor(Math.random() * 220)];
    e.style.backgroundColor = `rgba(${t[0]},${t[1]},${t[2]},0.30)`;
});

[].forEach.call(document.querySelectorAll('a'), (e) => {
	e.onclick = ()=>{return false;}
});

BG.addEventListener('click', function() {
    if (BG.style.backgroundImage === "") {
        BG.style.backgroundImage = "url('../land.png')";
    } else {
        BG.style.backgroundImage = "";
    };
});

var k =1, a=1, m=1;

ismenbuth1.addEventListener('click', function() {
	if (k === 2) {
		k -=1;
		header.style.backgroundPosition = "0px";
		header.style.transitionDuration = "1s";
	}
		else if (k === 3) {
		k -=1;
		header.style.backgroundPosition = "50% 0px";
		header.style.transitionDuration = "1s";
	}

});

ismenbuth2.addEventListener('click', function() {
	if (k === 1) {
		k +=1;
		header.style.backgroundPosition = "50% 0px";
		header.style.transitionDuration = "1s";
	}
		else if (k === 2) {
		k +=1;
		header.style.backgroundPosition = "100% 0px";
		header.style.transitionDuration = "1s";
	}

});

ismenbuta1.addEventListener('click', function() {
	if (a === 2) {
		a -=1;
		article.style.backgroundPosition = "0px";
		article.style.transitionDuration = "1s";
	}
		else if (a === 3) {
		a -=1;
		article.style.backgroundPosition = "50% 0px";
		article.style.transitionDuration = "1s";
	}

});

ismenbuta2.addEventListener('click', function() {
	if (a === 1) {
		a +=1;
		article.style.backgroundPosition = "50% 0px";
		article.style.transitionDuration = "1s";
	}
		else if (a === 2) {
		a +=1;
		article.style.backgroundPosition = "100% 0px";
		article.style.transitionDuration = "1s";
	}

});

ismenbutf1.addEventListener('click', function() {
	if (m === 2) {
		m -=1;
		footer.style.backgroundPosition = "0px";
		footer.style.transitionDuration = "1s";
	}
		else if (m === 3) {
		m -=1;
		footer.style.backgroundPosition = "50% 0px";
		footer.style.transitionDuration = "1s";
	}

});

ismenbutf2.addEventListener('click', function() {
	if (m === 1) {
		m +=1;
		footer.style.backgroundPosition = "50% 0px";
		footer.style.transitionDuration = "1s";
	}
		else if (m === 2) {
		m +=1;
		footer.style.backgroundPosition = "100% 0px";
		footer.style.transitionDuration = "1s";
	}

});

var menu = document.querySelector('.menushka');

if(document.body.offsetWidth<500) {
	menu.addEventListener('click', function() {		
		if (document.querySelector('.menumob').style.display === "none") {
			document.querySelector('.menumob').style.display = "block"
		} else {document.querySelector('.menumob').style.display = "none"}
	})
	
};

var hei=document.querySelector('.solnkrugbig').offsetWidth;

document.querySelector('.solnkrugbig').style.height= "hei"

