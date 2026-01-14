let toggleDark = document.getElementById('theme-toggle-drk');
let toggleLight = document.getElementById('theme-toggle-light');
let main = document.getElementById('main');

function toggleLgt() {
    main.style.cssText = `
        background-color: #fff;
        color: rgb(2, 2, 83);
    `;

    toggleLight.style.cssText = `
        display: block;
        color: rgb(2, 2, 83);
    `;

    toggleDark.style.display = 'none';
}

function toggleDrk() {
    main.style.cssText = `
        background-color: rgb(1, 1, 23);
        color: #fff;
    `;

    toggleDark.style.cssText = `
        display: block;
        color: #fff;
    `;

    toggleLight.style.display = 'none';
}


toggleLight.addEventListener('click', () => toggleDrk())


toggleDark.addEventListener('click', () => toggleLgt())


let form = document.getElementById('form')

function openForm(){
    form.style.display = 'block'
}

function closeForm(){
    form.style.display = 'none'
}