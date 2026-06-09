function login(){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    if(name==="" || email===""){
        alert("Please Fill All Fields");
        return;
    }

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

    window.location.href="dashboard.html";
}