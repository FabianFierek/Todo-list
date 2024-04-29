window.onload = function() {

    const form = document.querySelector('.add_task_form');

    form.addEventListener('submit', (e) => getDataFromForm(e));

    const getDataFromForm = (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const dataObject = {};
        for(const [key, value] of data) {
            dataObject[key] = value;
        }
        console.log(dataObject);
    }
} 