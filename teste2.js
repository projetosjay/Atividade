const nameForm = document.querySelector("name-form")
const welcomeContainer = document.querySelector("welcome")
const logoutBtn = document.querySelector("#logout")



    const nameInput = document.querySelector("#name")

    localStorage.setItem("name", nameInput.value)

    nameInput.value = "";
    