var repositorios = document.querySelector("#arquivosderepositorios");
fetch("https://api.github.com/users/nork22/repos")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.length);
        var i = 0;
        for (i = 0; i < data.length; i++) {
            repositorios.innerHTML += `<div class="github"> 			
            <a href="${data[i].html_url}" target="blank_"> 
             ${data[i].name} </a> 	
            </div>`;
        }

    });