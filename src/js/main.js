document.addEventListener("DOMContentLoaded", function () {
	/*======переключение активного класса ====*/ 
	function toggleActiveClass(parentClass, childClass) {
		const parents = document.querySelectorAll('.' + parentClass);
		parents.forEach(parent => {
			parent.addEventListener('click', function (e) {

				if (e.target.classList.contains(childClass)) {
					
					parent.querySelectorAll('.' + childClass).forEach(child => {
						child.classList.remove('active');
					});
					
					e.target.classList.add('active');
				}
			});
		});
	}
	toggleActiveClass('catalogy-tags', 'tag')
	/*====video===========*/
	const videoBlock = document.querySelector('.video-box');
	if(videoBlock){
		const videoBlockContent = videoBlock.querySelector('video');
		videoBlock.addEventListener('click', ()=>{
			if(videoBlock.classList.contains('active')){
				videoBlockContent.pause();
				videoBlock.classList.remove('active');
			}else{
				videoBlockContent.play();
				videoBlock.classList.add('active');
			}
		});
		videoBlock.addEventListener("ended", function () {
			videoBlockContent.pause();
			videoBlock.classList.remove('active');
		});
	}
	/*==== SHOW HIDDEN CARDS =====*/
	const btnShowMore = document.getElementById('show-more-btn');
	if(btnShowMore){
		btnShowMore.addEventListener('click', function() {
			const parent = document.querySelector('.has-hidden');
			const hiddenElements = parent.querySelectorAll('.hidden');
			
			// Показать по 6 элементов
			for (let i = 0; i < 6 && i < hiddenElements.length; i++) {
				hiddenElements[i].classList.remove('hidden');
			}

			// Если больше скрытых элементов нет, скрыть кнопку
			if (parent.querySelectorAll('.hidden').length === 0) {
				this.classList.add('hidden');
			}
		});
	}
	/*******article-menu******* */
    const articleContent = document.getElementById('article-content');
    const articleMenu = document.getElementById('article-menu');
	const headings = articleContent.querySelectorAll('h2');
    if(articleMenu){
		headings.forEach(heading => {
			const anchorId = heading.id;
			const menuItem = document.createElement('li');
			const menuLink = document.createElement('a');

			menuLink.href = `#${anchorId}`;
			menuLink.textContent = heading.textContent;

		
			menuLink.addEventListener('click', function (e) {
				e.preventDefault(); 
				updateActiveMenuItemOnClick(menuLink);
				document.getElementById(anchorId).scrollIntoView({ behavior: 'smooth' }); 
			});

			menuItem.appendChild(menuLink);
			articleMenu.appendChild(menuItem);
			menuItem.classList.add('article-menu-item'); // Добавьте класс для стилей
		});

		function updateActiveMenuItem() {
			const scrollPosition = window.scrollY + window.innerHeight * 0.5; // 50% высоты экрана
			
			headings.forEach(heading => {
				const headingOffsetTop = heading.offsetTop;
				const headingHeight = heading.offsetHeight;

				if (scrollPosition >= headingOffsetTop && scrollPosition < headingOffsetTop + headingHeight) {
					
					const activeLink = articleMenu.querySelector(`a[href="#${heading.id}"]`);
					if (activeLink) {
						const currentActive = articleMenu.querySelector('a.active');
						if (currentActive) {
							currentActive.classList.remove('active');
						}
						activeLink.classList.add('active');
					}
				}
			});
		}
		function updateActiveMenuItemOnClick(menuLink) {
			const currentActive = articleMenu.querySelector('a.active');
			if (currentActive) {
				currentActive.classList.remove('active');
			}
			menuLink.classList.add('active');
		}
		window.addEventListener('scroll', updateActiveMenuItem);
		
		updateActiveMenuItem();
	}
	/******slick slider******** */
	 $('.catalogy-slider').slick({
		slidesToShow: 3,
		infinite: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 799,
				settings: {
				
					slidesToShow: 1.5,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 574,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					
				}
			},
		]
	});
	// Расчет ширины для .slick-dots li
    function setDotsWidth() {
        const dots = $('.slick-dots');
        const dotItems = dots.find('li');
        const totalWidth = dots.width();
        const numberOfDots = dotItems.length;

        // Рассчитываем ширину для каждого .slick-dots li
        const dotWidth = totalWidth / numberOfDots;

        // Устанавливаем ширину
        dotItems.css('width', dotWidth);
    }

    // Устанавливаем ширину точек при загрузке и изменении размера окна
    setDotsWidth();
    $(window).resize(setDotsWidth);
});