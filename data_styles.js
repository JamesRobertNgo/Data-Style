/* -------------------------------------------------------------------------------- *\
   Data Styles
   
   By James Robert Huggins Ngo
   https://github.com/JamesRobertNgo/
   
   This work is licensed under a Creative Commons Attribution 4.0 International License.
   http://creativecommons.org/licenses/by/4.0/
\* -------------------------------------------------------------------------------- */


// Main function
// E.g. dataStyles([['data-style-all', 'all'], ['data-style-tablet', 'all and (min-width: 500px)'], ['data-style-desktop', 'all and (min-width: 720px)']]);
function dataStyles(mediaMap) {
	
	// 1. Build selector from mediaMap (parameter)
	var selector = '';
	for (var i = 0; i < mediaMap.length; i++) {
		if (selector.length > 0) 
			selector += ',';
		selector += '[' + mediaMap[i][0] + ']';
	}
	
	// 2. Get all elements using the selector
	var elements = document.querySelectorAll(selector);
	
	// 3. Build style definitions
	var def = '';
	for (var i = 0; i < elements.length; i++) {
		var id = elements[i].getAttribute('id');
		if (!id) {
			id = 'id' + Math.floor(Math.random() * 1000000);
			elements[i].setAttribute('id', id);
		}
		
		// 3.1 Add comment identifying the element
		def += '/* -- #' + id + ' -- */';
		
		// 3.2 Add value from the style attribute
		if (elements[i].getAttribute('style')) {
			def += '#' + id + ' { ' + elements[i].getAttribute('style') + ' } ';
			elements[i].removeAttribute('style'); // ?? Remove style attribute after ??
		}
		
		// 3.3 Add values from attributes defined by the mediaMap
		for (var j = 0; j < mediaMap.length; j++) {
			var attr = mediaMap[j][0]; // Attribute
			var style = elements[i].getAttribute(attr); // Attribute value
			
			// 3.3.1 Add attribute value (aka style) only when available
			if (style) {
				def += '@media ' + mediaMap[j][1] + ' { #' + id + ' { ' + style + ' } } ';
				elements[i].removeAttribute(attr); // ?? Remove attribute after ??
			}
		}
	}
	
	// 4. Create style tag and append to the head tag
	var style = document.createElement('style');
	style.innerHTML = def.replace(/\s+/g, ' ').replace(/({|}|;|\*\/)\s*/g, '$1\n');
	document.head.appendChild(style);
}
