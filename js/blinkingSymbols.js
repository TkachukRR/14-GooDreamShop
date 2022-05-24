let fadingHeading = document.querySelectorAll('.fading');

for (let a = 0; a < fadingHeading.length; a++){
    let letters = fadingHeading[a].textContent.split('');
    let content = letters.map((val, i) => {
	    let delay = Math.floor((Math.random() * 1500) + 1);

	    return ('<span style="animation-delay: '+ delay + 'ms">'+ val +'</span>');
    });

    fadingHeading[a].innerHTML = "";
    for (let i = 0; i < content.length; i++) {
	    fadingHeading[a].innerHTML += content[i];
    };
};

let fadingHeading2 = document.querySelectorAll('.fading2');

for (let a = 0; a < fadingHeading2.length; a++){
    let letters = fadingHeading2[a].textContent.split('');
    let content = letters.map((val, i) => {
	    let delay = Math.floor((Math.random() * 1500) + 1);

	    return ('<span style="animation-delay: '+ delay + 'ms">'+ val +'</span>');
    });

    fadingHeading2[a].innerHTML = "";
    for (let i = 0; i < content.length; i++) {
	    fadingHeading2[a].innerHTML += content[i];
    };
};