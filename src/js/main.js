document.addEventListener("DOMContentLoaded", function () {
	/*======переключение активного класса ====*/ 
	function toggleActiveClass(parentClass, childClass) {
		const parents = document.querySelectorAll('.' + parentClass);
		parents.forEach(parent => {
			parent.addEventListener('click', function (e) {

				if (e.target.classList.contains(childClass)) {
					// Удаляем класс 'active' у всех дочерних элементов внутри родителя
					parent.querySelectorAll('.' + childClass).forEach(child => {
						child.classList.remove('active');
					});
					// Добавляем класс 'active' элементу, по которому был клик
					e.target.classList.add('active');
				}
			});
		});
	}
	toggleActiveClass('catalogy-tags', 'tag')
	

});