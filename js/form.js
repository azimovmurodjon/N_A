const form = document.querySelectorAll(".form-inline");
const successMessage = document.querySelector(".msg-alert");
const url = "";
//https://fzd-global.de/backend/api/v1/contactscientech/

const postForm = async (name, email, message) => {
    const data = await fetch(url, {
        method: "POST",
        withCredentials: true,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            name,
            email,
            message,
        }),
    });
    const json = data.json();
    return json;
};

form.forEach((singleForm) => {
    singleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#comments").value;

        postForm(name, email, message);

        successMessage.style.display = "flex";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);

        singleForm.reset();
    });
});