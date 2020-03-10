const random = (targetElement) => {
    const n = Math.floor(Math.random() * 9) + 1;
    if (targetElement !== null) {
        if (n !== targetElement.id) {
            return n.toString();
        } else {
            console.log("Iguales");
            return random(targetElement);
        }
    } else {
        return n.toString();
    }
}

const callback = (e) => {
    if (e.target.id === document.querySelector('.target').id) {
        alert("Has ganado!");
        clearInterval(id);
    }
}

const circulosList = document.querySelectorAll('.circulo');

circulosList.forEach(e => e.addEventListener('click', callback));

const redButton = () => {
    const targetElement = document.querySelector('.target');

    if (targetElement !== null) {
        targetElement.classList.remove('target');
    }

    document.getElementById(random(targetElement)).className = 'target';
};

const id = setInterval(redButton, 1000);