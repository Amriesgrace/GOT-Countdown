/**
* Countdown timer to when the next and final season of the amazing series 
* Game of thrones will be available.
*
**/

var app ={
	initCountdownTimer: function(){
		let endDate = new Date('07/21/2019 12:00 PM');

		let gotSec = 1000;
		let gotMin = gotSec * 60;
		let gotHour = gotMin * 60;
		let gotDay = gotHour * 24;
		let timer;

		function countDown() {
			let currDate = new Date();
			let timeLeft = endDate - currDate;

			if( timeLeft < 0 ){
				clearInterval( timer );
				console.log('The final season of Game of Throne is out people!!!!');
				return;
			}

			let days = Math.floor( timeLeft/ gotDay );
			let hours = Math.floor( (timeLeft % gotDay) / gotHour );
			let minutes = Math.floor( (timeLeft% gotHour) / gotMin );
			let seconds = Math.floor( (timeLeft % gotMin) / gotSec );

			let clock = document.getElementById("countdown_clock");
			clock.innerHTML = days +" days "+ minutes+" mins "+seconds+"s to winter ";

		}
		timer = setInterval(countDown, 1000);
	}, //function that counts down to release date;

	initMenuOverlay: function() {
		let menuBtn = document.getElementById("menu_btn");

		const toggleMenu = (ev) => {
			let eventTarget = ev.target;
			let speed = 1;
			let menuOverlay = document.getElementById("menu_overlay");			
			ev.preventDefault();
			if (eventTarget.className == "open-menu-btn") {
				fadeIn(menuOverlay, speed);
				eventTarget.className = "close-menu-btn";
				menuOverlay.style.display = "block"
			} else if (eventTarget.className == 'close-menu-btn') {

				fadeOut(menuOverlay, speed);
				eventTarget.className = "open-menu-btn";
				menuOverlay.style.display = "none";
			}
		}

		//fades in the overlay menu
		const fadeIn = (elem, speed) => {
			let interval = setInterval(function(){
				elem.style.opacity = Number(elem.style.opacity)+ 0.02;
				if(elem.style.opacity >= 1){
					elem.style.opacity = 1;
					clearInterval(interval)
				}
			}, speed)
		}

		//fades Out the overlay menu 
		const fadeOut = (elem, speed) => {
			let interval = setInterval(function(){
				elem.style.opacity = Number(elem.style.opacity)- 0.02;
				if(elem.style.opacity <= 0){
					elem.style.opacity = 0;
					clearInterval(interval)
				}
			}, speed)
		}

		menuBtn.addEventListener('click', toggleMenu);
    },//toggles overlay menu
    
    initImgOverlay: () => {
        const galleryImg = document.getElementsByClassName('gallery-img');
        const showOverlay = (ev) => {
            let overlay = ev.target.nextElementSibling;
            console.log(overlay)
            if (overlay.className ===  'hide-img-overlay') {
                console.log('yes');
                overlay.className = 'show-img-overlay';
            }
        }
        const hideOverlay = (ev) => {
            let overlay = ev.target.children[1];
            console.log(overlay);
            if(overlay.className === 'show-img-overlay'){
                console.log('show should hide')
                overlay.className = 'hide-img-overlay';
            }
        }
        for(let i = 0; i < galleryImg.length; i++) {
            galleryImg[i].addEventListener('mouseover', showOverlay);
            galleryImg[i].addEventListener('mouseleave', hideOverlay);
        }
    }, // toggles view of icons on hover image in the gallery

}; 