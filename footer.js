/**
 * @file
 * Government(PH) Website template footer generator script file
 * @author voltz jeturian voltz
 */

// NOTE: must use native js coding
// TODO: obsfucate the codes


// TODO: first find the gwt-standard-footer id.
// then retrieve the content of the footer-source.html
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

	footer = d.getElementById(footerID);

	httpGet('http://localhost/gwt-footer/footer-source.html', function(test){
		footer.innerHTML = test;
	});

}(document, 'gwt-standard-footer'));