const form = document.getElementById("github-form");
const userList = document.getElementById("user-list");
const reposList = document.getElementById("repos-list");

document.addEventListener("DOMContentLoaded", ()=>{
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let search = e.target.search.value;
        fetch('https://api.github.com/search/users?q=' + search, {
        method: 'GET',
        header:{
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
        },
        body: JSON.stringify()
        })
        .then(res=>res.json())
        .then(users =>{
            users.items.forEach(user =>{
                let result = document.createElement("li");
                li.className = "all-users";
                li.innerHTML = 
                `<div class="content">
                    <h3>${user.login}</h3>
                    <p>${user.html_url}</p>
                    <div class="repos">
                        <button class="repo-button"> Repos </button>
                    </div>
                    <img src=${user.avatar_url}>
                </div>`;
                userList.append(result);

           
                })
            })
        .catch(err => console.log(err.message));
        })
    });