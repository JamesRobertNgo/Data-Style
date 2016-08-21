/* -------------------------------------------------------------------------------- *\
   Data Styles
   
   By James Robert Huggins Ngo
   https://github.com/JamesRobertNgo/
   
   This work is licensed under a Creative Commons Attribution 4.0 International License.
   http://creativecommons.org/licenses/by/4.0/
\* -------------------------------------------------------------------------------- */

(function dataStyle() {
	var def = '';
	var el = document.querySelectorAll('[data-style]');
	
	for (var i = 0; i < el.length; i++) {
		var id = el[i].getAttribute('id');
		if (!id) {
			id = 'id' + Math.floor(Math.random() * 1000000);
			el[i].setAttribute('id', id);
		}
		
		def += '/* -- #' + id + ' -- */';
		
		var style = el[i].getAttribute('style');
		if (style) {
			def += '#id' + id + ' { ' + style + ' } ';
		}
		
		style = el[i].getAttribute('data-style');
		if (style) {
			def += style.replace(/{/g, '{ #' + id + ' { ').replace(/}/g, '} }');
		}
	}
	
	var style = document.createElement('style');
	style.innerHTML = def.replace(/\s+/g, ' ').replace(/({|}|;|\*\/)\s*/g, '$1\n');
	document.head.appendChild(style);
})();
