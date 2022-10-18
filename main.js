function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

let open = document.getElementById('open');
let close = document.getElementById('close');
let mobilenav = document.getElementById('mobilenav');

open.addEventListener('click', () =>{
	open.classList.add("close");
	close.classList.remove("close");
	mobilenav.classList.remove('close');
	mobilenav.classList.remove('hidden');
	mobilenav.classList.add('mobilenav');
})

close.addEventListener('click',() =>{
	open.classList.remove("close")
	close.classList.add("close")
	mobilenav.classList.add('hidden');
	mobilenav.classList.remove('mobilenav');
})