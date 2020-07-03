import { getStandings,getSavedTeams,getStandingById } from './api.js'

   

function loadPage(page){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var content = document.querySelector('#main')
            
            if(this.status == 200) {
                
                    console.log(page)
                if (page === 'klassmen') {

                    console.log(page)
                    getStandings()
                } 

                else if(page === 'saved') {

                    console.log(page)
                    getSavedTeams();

                }

                else if(page === 'detail') {
                    console.log(page)
                    getStandingById();

                }

                content.innerHTML = this.responseText

            }
        } else { 

            document.querySelector('main').innerHTML = `<h1>Halaman Tidak Ditemukan</h1>`
        }
    }

    xhr.open('GET','./src/pages/' + page + ".html",true)
    xhr.send()
}

export {loadPage}