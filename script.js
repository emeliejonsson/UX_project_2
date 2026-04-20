const pillButtons = document.querySelectorAll('.pill');
const dropdowns = document.querySelectorAll('.dropdown');
const searchField = document.querySelector('#search-input');


function renderRecipeCount() {
    let recipeCountEl = document.getElementById('recipe-count');
    recipeCountEl.textContent = ('82/423 recept');
};

pillButtons.forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelector('#select-ingredient-container').style.display = 'block';
        renderRecipeCount();
    })
});

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', () => {
        document.querySelector('#select-ingredient-container').style.display = 'block';
        renderRecipeCount();
    })
});

searchField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('#select-ingredient-container').style.display = 'block';
        renderRecipeCount();
    }
});