import './bootstrap';
document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.0015}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .0025}deg;
		`
    })
})

$(function() {
    $.scrollify({
        section : ".layer_scroll",
    });
});