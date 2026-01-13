let toggleDark = document.getElementById('theme-toggle-drk');
let toggleLight = document.getElementById('theme-toggle-light');
let main = document.getElementById('main');

function toggle() {
    main.style.cssText = `
        background-color: #fff;
        color: rgb(2, 2, 83);
    `;

    toggleLight.style.cssText = `
        display: block;
        color: rgb(1, 1, 23);
    `;

    toggleDark.style.display = 'none';
}


toggleDark.addEventListener('click', () => toggle())