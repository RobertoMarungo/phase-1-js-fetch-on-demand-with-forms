const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const input = document.querySelector("input#searchByID");
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        if (input.value < 4) {
            fetch(`http://localhost:3000/movies/${input.value}`)
                .then((res) => res.json())
                .then((data) => {
                    title.innerText = data.title;
                    summary.innerText = data.summary;
                });
        } else {
            title.innerText = "Please Enter A Valid ID";
            summary.innerText = "";
        }
    });
};

document.addEventListener("DOMContentLoaded", init);
