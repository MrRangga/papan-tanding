// import { getStandingById } from './api.js'

// function saveData(data) {
//     var item  = getOne(data)
//     saveForLater(item)
//     console.log(data)
// }

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

   var instance = M.Carousel.init({
  });

// sidenav
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
