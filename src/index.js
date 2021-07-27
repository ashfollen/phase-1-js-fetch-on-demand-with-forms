//to make sure the JS we write executes when the DOM is fully loaded, any code related to DOM manipulation should either go in init or in a function called within init

const init = () => { 
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID'); //retrieves the value of what we type into the form

        fetch(`http://localhost:3000/movies/${input.value}`)//modify our URL based on the data typed into our form
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    });
}

document.addEventListener('DOMContentLoaded', init);





