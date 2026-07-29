const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const sbumitBtnRegister = document.getElementById("submitBtn-register");
const submitBtnLogin = document.getElementById("submitBtn-login");
const nameRegister = document.getElementById("name-inputRegister");
const emailRegister = document.getElementById("email-inputRegister");
const passwordRegister = document.getElementById("password-inputRegister");
const passwordLogin = document.getElementById("password-inputLogin");
const emailLogin = document.getElementById("email-inputLogin");
const message = document.getElementById("message");


loginBtn.addEventListener("click", function () {
    registerForm.style.display = "none"
    loginForm.style.display = "block"
})

registerBtn.addEventListener("click", function () {
    loginForm.style.display = "none"
    registerForm.style.display = "block"
})

sbumitBtnRegister.addEventListener("click", async function () {
    const name = nameRegister.value
    const email = emailRegister.value
    const password = passwordRegister.value

    try {
        const res = await fetch("https://progress-tracker-706k.onrender.com/api/auth/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ name, email, password })
        })
        const data = await res.json()
        console.log(data)

        message.style.color = "green"
        message.textContent = "Registered successfully!"
    }
    catch (error) {
        message.style.color = "red"
        message.textContent = error.message
    }


})

submitBtnLogin.addEventListener("click", async function () {
    const email = emailLogin.value
    const password = passwordLogin.value

    try {
        const respose = await fetch("https://progress-tracker-706k.onrender.com/api/auth/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const data = await respose.json()
        console.log(data)
        localStorage.setItem("token", data.token)
        window.location.href = "dashboard.html"
    }
    catch(error){
        message.textContent=error.message
    }
})

