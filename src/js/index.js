import { loadNav } from './nav.js'
import { loadPage } from './pages.js'

function main () {

	// navigation
		
		var elems = document.querySelectorAll(".sidenav");
	    M.Sidenav.init(elems);
	    
	    loadNav();

		var page = window.location.hash.substr(1)
		if(page === "") page = "home";
		loadPage(page)
		

}

export default main

