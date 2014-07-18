/**
 * @file
 * Government(PH) Website template footer generator script file
 * @author voltz jeturian voltz
 */

// NOTE: must use native js coding
// TODO: obsfucate the codes

alert('footer');
// TODO: must create an iframe element
// TODO: must create a time cache to save bandwidth of gwt-footer CDN
(function(d, footerID){
	footer = d.getElementById(footerID);
	//footer.innerHTML = '<iframe src="https://gwt-footer.googlecode.com/git/footer-source.html" style="border: 0; width: 100%; height: 100%;"></iframe';
	footer.innerHTML = '<iframe src="http://localhost/gwt-footer/footer-source.html" id="footer-gwt-frame" scrolling="no" style="border: 0; width: 100%;"></iframe';

	iFrameResize({
		autoResize: true,
		resizedCallback: function(messageData){ // Callback fn when resize is received
			console.log('iframe id = '+ messageData.iframe.id);
			console.log('message data = '+ messageData.height);
		}
	}, '#footer-gwt-frame');

}(document, 'gwt-standard-footer'));


/*iFrameResize({
	autoResize: true,
	resizedCallback: function(messageData){ // Callback fn when resize is received
		console.log('iframe id = '+ messageData.iframe.id);
		console.log('message data = '+ messageData.height);
	},
},
'footer-gwt-frame');*/
/*
(function(d, footerID){
	function httpGet(theUrl, responseCallback) {
	    // code for IE7+, Firefox, Chrome, Opera, Safari
	    if (window.XMLHttpRequest) {
	        xmlhttp=new XMLHttpRequest();
	    }
	    // code for IE6, IE5
	    else{
	        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    xmlhttp.onreadystatechange=function()
	    {
	        if (xmlhttp.readyState==4 && xmlhttp.status==200)
	        {
	        	responseCallback(xmlhttp.responseText);
	            return xmlhttp.responseText;
	        }
	    }
	    xmlhttp.open("GET", theUrl, false);
	    xmlhttp.send();    
	}

	// first find the gwt-standard-footer id.
	footer = d.getElementById(footerID);

	// NOTE: this source code is for foundation 5 implementation only
	// then retrieve the content of the footer-source.json
	footerSource = 'http://localhost/gwt-footer/footer-source.html';
	httpGet(footerSource, function(test){
	//httpGet(footerSource, function(test){
		/*
		console.log(test);
		// TODO: add a JSON parser here
		var text = JSON.parse(test);
		console.log(text);
		footer.innerHTML = text.gwt_standard_footer;
		*
		footer.innerHTML = test;
	});
}(document, 'gwt-standard-footer'));
*/