import { loadPage } from './pages.js'

    function loadNav() {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status != 200) return
   
          document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
            elm.innerHTML = xhr.responseText
          });

        
        document.querySelectorAll('.sidenav , .topnav').forEach(function(e){
          e.addEventListener('click',function(event){

                var sidenav = document.querySelector('.sidenav')
                M.Sidenav.getInstance(sidenav).close();

                    var page = event.target.getAttribute("href").substr(1);
                    loadPage(page);
            })
        })
        }
      };
      xhr.open("GET", "./src/nav.html", true);
      xhr.send();
    }


export {loadNav}