(function() {
	'use strict';

	angular
	.module('AppSkol')
	.directive('menuSelected', MenuSelected);

	MenuSelected.$inject = [];

	/* @ngInject */
	function MenuSelected() {

		var TOGGLE_CLASS = 'style-color-yellow style-border-bottom-yellow';
		var groups = {};

		var directive = {
			link: link,
			restrict: 'A'
		};

		return directive;

		function link(scope, elem, attrs) {

			var groupName = attrs.toggle || 'default';
			addElement(groupName, elem);

			elem.bind('click', function () {
				setActive(groupName, elem);
			});

			scope.$on('$destroy', function () {
				removeElement(groupName, elem);
			});

		}

		function addElement(groupName, elem) {
			var list = groups[groupName] || (groups[groupName] = []);
			if (list.indexOf(elem) === -1) {
				list.push(elem);
			}
		}

		function removeElement(groupName, elem) {
			var list = groups[groupName] || [];
			var idx = list.indexOf(elem);
			if (idx !== -1) {
				list.splice(idx, 1);
			}
		}

		function setActive(groupName, elem) {
			angular.forEach(groups[groupName], function (el) {
				el.removeClass(TOGGLE_CLASS);
			});
			elem.addClass(TOGGLE_CLASS);
		}

	}

})();