
/* -------------------------------------------------------------------------------- *\
   Data Styles
   
   By James Robert Huggins Ngo
   https://github.com/JamesRobertNgo/
   
   This work is licensed under a Creative Commons Attribution 4.0 International License.
   http://creativecommons.org/licenses/by/4.0/
\* -------------------------------------------------------------------------------- */

(function() {

	var styleElements = document.querySelectorAll('[data-style-id]');
	for (var i = 0; i < styleElements.length; i++) {

		var styleElement = styleElements[i];
		var dataStyleId = styleElement.getAttribute('data-style-id');

		var elements = document.querySelectorAll('[data-style-' + dataStyleId + ']');
		for (var j = 0; j < elements.length; j++) {

			var element = elements[j];
			var style = '';

			if (element.getAttribute('data-style-selector')) {

				style += element.getAttribute('data-style-selector');

			} else {

				var id = element.getAttribute('id');

				if (!id) {
					id = 'id' + (new Date()).getTime() + '_' + Math.floor((Math.random() * 1000));
					element.setAttribute('id', id);
				}

				style += '#' + id;
			}

			style += ' { ' + element.getAttribute('data-style-' + dataStyleId) + ' } ';

			styleElement.innerHTML += style + '\n';
		}
	}

})();
