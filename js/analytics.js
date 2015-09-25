if ('protocol' in location) {
  if (location.protocol == "http:") location.protocol = "https:";
}
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-50190232-1', 'akshatmittal.github.io');
ga('require', 'displayfeatures');
ga('send', 'pageview');
window.onload = function() {
  if (self != top) top.location = self.location;
}
