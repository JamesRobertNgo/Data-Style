function dataStyle(attrib, media) {
	var def = [];
	
	var elements = document.querySelectorAll('[' + attrib + ']');
	for (var i = 0; i < elements.length; i++) {
		var id = elements[i].getAttribute('id');
		if (!id) {
			id = 'data-style-' + Math.floor(Math.random() * 1000000);
			elements[i].setAttribute('id', id);
		}
		def.push('#' + id + ' { ' + elements[i].getAttribute(attrib) + ' } ');
	}
	
	var style = document.createElement('style');
	style.setAttribute('media', media);
	style.innerHTML = def.join('\n');
	document.head.appendChild(style);
}
