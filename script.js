const pillButtons = document.querySelectorAll('.pill');

pillButtons.forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelector('#select-ingredient-container').style.display = 'block';
    })
});

