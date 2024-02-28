const div = document.getElementById('show')

function getApiGitHub(){
    fetch('https://api.github.com/users/gabriecgaldino/repos')
        .then(async res=> {
            if(!res.ok){
                throw new Error(res.status)
            }

            var data = await res.json()

            data.map(item => {
                let child = document.createElement('div')
                

                child.innerHTML = `
                    
                <div class='projeto'> <a href='https://github.com/gabriecgaldino/${item.name}'>${item.name.toUpperCase()}</a></div>
                `
            
            div.appendChild(child)
            })
        }).catch(e => console.log(e))
}


getApiGitHub()