  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50190232-1', 'akshatmittal.github.io');
  ga('send', 'pageview');

$("a").on('click', function(){ga('send', 'event', 'Tag click: a', 'click');}); // For nav analysis
$("button").on('click', function(){ga('send', 'event', 'Tag click: button', 'click');}); // For nav analysis
$(document).on('click', function() {ga('send', 'event', 'Page click', 'click');}); // Heat analysis
$("img").on('click', function(){ga('send', 'event', 'Tag click: img', 'click');}); // Img analysis
window.onresize = function() {ga('send', 'event', 'Window Resized', 'click');} // Why will they even resize the window?