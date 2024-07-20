document.addEventListener('DOMContentLoaded', function(){
    const nome = document.getElementById('name')
    const nomeUsuario = document.getElementById('name-user')
    const repos = document.getElementById('repos')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')
    const link = document.getElementById('link')
    const avatar = document.getElementById('avatar')

    fetch('https://api.github.com/users/oLucasGregory')
    .then(function(resposta){
        return resposta.json();
        console.log(resposta)
    })
    .then(function(json){
        nome.innerText = json.name;
        nomeUsuario.innerHTML = json.login;
        repos.innerHTML = json.public_repos
        seguindo.innerText = json.following;
        seguidores.innerText = json.followers;
        link.href = json.html_url;
        avatar.src = json.avatar_url;
    })
})