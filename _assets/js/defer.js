/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.23
 */
(function(){if(window&&window.addEventListener){var e=Object.create(null),l,r,d=function(){clearTimeout(r);r=setTimeout(l,100)},p=function(){},t=function(){var g;window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);window.MutationObserver?(g=new MutationObserver(d),g.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),p=function(){try{g.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",d,
!1)}catch(m){}}):(document.documentElement.addEventListener("DOMSubtreeModified",d,!1),p=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)})},u=function(g){function e(a){var c;void 0!==a.protocol?c=a:(c=document.createElement("a"),c.href=a);return c.protocol.replace(/:/g,"")+c.host}var d,n;window.XMLHttpRequest&&(d=new XMLHttpRequest,n=e(location),g=e(g),d=void 0===d.withCredentials&&
""!==g&&g!==n?XDomainRequest||void 0:XMLHttpRequest);return d};l=function(){function d(){--q;0===q&&(p(),t())}function m(a){return function(){!0!==e[a.base]&&a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash)}}function l(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden","true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow=
"hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,f,h,q=0,b,k;p();k=document.getElementsByTagName("use");for(h=0;h<k.length;h+=1){try{c=k[h].getBoundingClientRect()}catch(v){c=!1}f=(a=k[h].getAttributeNS("http://www.w3.org/1999/xlink","href"))&&a.split?a.split("#"):["",""];a=f[0];f=f[1];b=c&&0===c.left&&0===c.right&&0===c.top&&0===c.bottom;c&&0===c.width&&0===c.height&&!b?a.length&&(b=e[a],!0!==b&&setTimeout(m({useEl:k[h],base:a,
hash:f}),0),void 0===b&&(f=u(a),void 0!==f&&(b=new f,e[a]=b,b.onload=l(b),b.onerror=n(b),b.ontimeout=n(b),b.open("GET",a),b.send(),q+=1))):b?a.length&&e[a]&&m({useEl:k[h],base:a,hash:f})():void 0===e[a]?e[a]=!0:e[a].onload&&(e[a].abort(),delete e[a].onload,e[a]=!0)}k="";q+=1;d()};window.addEventListener("load",function m(){window.removeEventListener("load",m,!1);r=setTimeout(l,0)},!1)}})();

/*!
 * Google Analytics
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-8695781-1', 'auto');
ga('send', 'pageview');