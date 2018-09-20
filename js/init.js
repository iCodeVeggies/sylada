/* PARALLAX */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var options = {};
  var instances = M.Parallax.init(elems, options);
});

/* SIDENAV */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var options = {};
  var instances = M.Sidenav.init(elems, options);
});

/* MODALS */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var options = {};
  var instances = M.Modal.init(elems, options);
});
