var MenuController=Class.create({menuStart:new Hash,menuHideTimeout:new Hash,doMenuToggle:function(a,b){Element.visible(b)?this.doMenuHide(b):this.doMenuShow(a,b)},doMenuShow:function(a,b){this.doMenuHideAll();this.menuHideTimeout.get(b)&&(clearTimeout(this.menuHideTimeout.get(b)),this.menuHideTimeout.unset(b));var c=$(b),d=$(a);Element.hide(c);Element.absolutize(c);c.setStyle({zIndex:100});var g=d.offsetHeight,f=d.offsetWidth,e=d.viewportOffset(),h=document.viewport.getWidth();document.viewport.getScrollOffsets();
var k=c.getWidth(),e=h-(e.left+(k+16));0<e&&(e=0);0>e&&k>f&&(e=f-k);Element.clonePosition(c,d,{setWidth:!1,setHeight:!1,offsetTop:g,offsetLeft:e});d.addClassName("menuSelected");d.addClassName("menuopen");d.addClassName("menu_click_"+c.identify());Element.show(c);this.menuStart.set(b,!0);d.down("img.disclosureicon").addClassName("menu_discl_"+c.identify());d.down("img.disclosureicon").src=AppImages.disclosureOpen},showRelativeTo:function(a,b,c,d){b=$(b);a=$(a);Element.hide(b);Element.absolutize(b);
b.setStyle({zIndex:100});var g=a.offsetHeight,f=0;null!=d&&(g=d);null!=c&&(f=c);var e=a.viewportOffset();c=document.viewport.getWidth();d=document.viewport.getScrollOffsets();var h=b.getWidth(),e=c-(e.left+(h+16+f));0>e&&c>h&&(f+=e);Prototype.Browser.IE&&(g+=d[1],f+=d[0]);Element.clonePosition(b,a,{setWidth:!1,setHeight:!1,offsetTop:g,offsetLeft:f});Try.these(Element.show.curry(b))},doMenuHide:function(a,b){if(b){this.menuHideTimeout.get(a)&&(clearTimeout(this.menuHideTimeout.get(a)),this.menuHideTimeout.unset(a));
var c=setTimeout(this.doMenuHide.bind(this,a),b);this.menuHideTimeout.set(a,c)}else if(c=Element.identify(a),this.menuStart.get(c)){Element.hide(a);this.menuStart.unset(c);var d="menu_click_"+c,g="menu_discl_"+c;$$("."+d).each(function(a){$(a).removeClassName("menuSelected","menuopen",d)});$$("img."+g).each(function(a){$(a).removeClassName(g);$(a).src=AppImages.disclosure})}},doMenuHideAll:function(){var a=!1,b=this;this.menuStart.each(function(c){b.doMenuHide(c.key);a=!0});return a},_menukeyDownHandler:function(a){var b;
a.keyCode?b=a.keyCode:a.which&&(b=a.which);if(b==Event.KEY_ESC&&Try.these(this.doMenuHideAll.bind(this)))return!1},_mouseoutMenuHide:function(a,b){Event.element(a);var c=Event.relatedTarget(a);a.relatedTarget&&(c=$(a.relatedTarget));c.descendantOf(b)||this.doMenuHide(b,1500)},_mouseoverMenuRestore:function(a,b){Event.element(a);var c=Event.relatedTarget(a);a.relatedTarget&&(c=$(a.relatedTarget));!c.descendantOf(b)&&this.menuHideTimeout.get(b)&&(clearTimeout(this.menuHideTimeout.get(b)),this.menuHideTimeout.unset(b))}});