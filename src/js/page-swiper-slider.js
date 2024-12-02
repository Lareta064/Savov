document.addEventListener("DOMContentLoaded", function () {
    const resultSlider = new Swiper('.result-slider', {
        pagination: {
            el: ".swiper-pagination",
			clickable: true,
        },
    });

    resultSlider.on('slideChange', function () {
        // Получаем индекс активного слайда
        const activeIndex = resultSlider.activeIndex;

        // Находим все элементы .company-name
        const companyNames = document.querySelectorAll('.company-name');

        // Удаляем класс 'active' у всех .company-name
        companyNames.forEach(name => name.classList.remove('active'));

        // Добавляем класс 'active' элементу с текущим индексом
        if (companyNames[activeIndex]) {
			companyNames[activeIndex].classList.add('active');
        }
    });
});