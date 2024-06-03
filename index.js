function handleFormSubmit(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const user = {
        username: name,  // Use the name variable here
        email: email,
        phone: phone
    };
    localStorage.setItem(user.email, JSON.stringify(user));
    showUserOnScreen(user);
}

function showUserOnScreen(user){
    const parent = document.getElementById("userList");
    const child = document.createElement("li");
    child.textContent = user.username + '    ' + user.email + '    ' + user.phone;  // Use user.username here
    parent.appendChild(child);
}
    


    




