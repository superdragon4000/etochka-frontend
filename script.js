const gameBtns = document.querySelectorAll('.game__btn');
gameBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        console.log('sadas')
        e.target.disabled = true;
        e.target.innerText = 'Уже использовано';
    })
})