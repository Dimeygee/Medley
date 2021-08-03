let preloader = document.querySelector('#preloader')
	
	
	
setTimeout(() => {
    preloader.classList.add('isnotactive')
    setTimeout(() => {
        preloader.style.display = 'none'
    },500)
},2000)