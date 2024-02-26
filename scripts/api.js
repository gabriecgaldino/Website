const div = document.querySelector('section')

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
                    
                <h4> <a href='https://github.com/gabriecgaldino/${item.name}'>${item.name.toUpperCase()}</a></h4>
                `
            
            div.appendChild(child)
            })
        }).catch(e => console.log(e))
}


getApiGitHub()