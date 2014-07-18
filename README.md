# Goverment Website Template (GWT) footer script generator
**Authored by: Voltz Jeturian voltz.jeturian@icto.dost.gov.ph**

The gwt-footer is a footer script generator for GWT template. The main purpose of having a footer generator is to provide a uniform feel and enforce the guideline of the standard footer. The footer generator automatically retrieves the updated version of html codes of the footer template to ensure that the contents and the links are up to date.

##Note
This version is Alpha only and experimental and shoud **NOT** be used on production. There might be changes in the future.

### How to add footer source
- Add a this syntax at to your template.

```
<div id="gwt-standard-footer">
</div>
<script>(function(d, s, id) {
  var js, gjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//gwt-footer.googlecode.com/git/footer.js";
  //js.src = "http://localhost/gwt-footer/footer.js";
  gjs.parentNode.insertBefore(js, gjs);
}(document, 'script', 'gwt-footer-jsdk'));
</script>
```
- **Note** that gwt-standard-footer id is where the standard footer will embed, so rename your footer container id to "gwt-standard-footer".

###### CHANGE LOGS
**06-25-2014**
- created GWT footer script generator

**07-01-2014**
- added automated script that generates template from source code
- added embed script sample to index.html for sample