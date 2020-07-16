let user = '';

// Get req to Github APi

function searchUsers(username){
    
    let url = "https://api.github.com/search/users?q=" + username + "+in:user&per_page=100";

    $.get(url, function (data) {
            console.log(data)
           $('#results-list').empty();
            data.items.forEach(item => {
                user = `<a target="_blank" href="${item.html_url}"> <img class="img-thumbnail ml-4" width="75" height="75" src="${item.avatar_url}"/> </a>`;                
                $("#results-list").append(user);
              
            })
        },
       
    );
}


// Set up function to watch form 
function watchForm() {
    
    $('form').submit(event => {
        event.preventDefault();
        let username = $("#username").val();
        searchUsers(username)
    })

}


// call form function 
$(watchForm);