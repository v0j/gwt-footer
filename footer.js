/**
 * @file
 * Government(PH) Website template footer generator script file
 * @author voltz jeturian voltz
 */

// NOTE: must use native js coding
// TODO: obsfucate the codes


(function(d, footerID){
	function httpGet(theUrl, responseCallback, footerSource) {
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
	// then retrieve the content of the footer-source.html
	httpGet(footerSource, function(test){
		footer.innerHTML = test;
	});

// local source http://localhost/gwt-footer/footer-source.html
}(document, 'gwt-standard-footer', 'https://gwt-footer.googlecode.com/git/footer-source.html'));