

	

 function toggleMenu() {
	const menus = document.querySelectorAll('.hamburger');
	const sm_menu = document.querySelector('.sm_menu')
    const lists = document.querySelectorAll('.sm_li ul li')
    menus.forEach(menu => {
        menu.classList.toggle('active');
    })
    sm_menu.classList.toggle('active');
        lists.forEach(list => {
            list.classList.toggle('active')
        })	
    }



	


	 


