# Goverment Website Template (GWT) footer script generator
**Authored by: Voltz Jeturian voltz.jeturian@icto.dost.gov.ph**

#### v1-stable

The gwt-footer is a footer script generator for the Government Website Template (GWT). The main purpose of a footer generator is to provide a uniform look and feel and to comply with the guidelines on the standard footer. The footer generator automatically retrieves the updated version of html codes of the footer template to ensure that the contents and the links are up to date. We recommend the use of the footer script for websites using static html.

### How to add footer generator
To add the footer generator on your template, simply add this syntax to the lowest part of your template.

```
<div id="gwt-standard-footer">
</div>
<script type="text/javascript">
    (function(d, s, id) {
      var js, gjs = d.getElementById('gwt-standard-footer');

      js = d.createElement(s); js.id = id;
      js.src = "http://gwt-footer.googlecode.com/git/footer.js";
      gjs.parentNode.insertBefore(js, gjs);

    }(document, 'script', 'gwt-footer-jsdk'));
</script>
```
**Note:** Please remove the old standard footer region and replace it with the footer script with "gwt-standard-footer" container.

For support, comments, and suggestions, and if you find any bugs, please email us at gwtsupport@i.gov.ph.

###### CHANGE LOGS
**06-25-2014**
- created GWT footer script generator

**07-01-2014**
- added automated script that generates template from source code
- added embed script sample to index.html for sample

**07-29-2014**
- added autoresizer script

**08-13-2014**
- release to Beta version

**10-29-2014**
- release to Stable version
