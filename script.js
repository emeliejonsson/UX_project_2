const pillButtons = document.querySelectorAll('.pill');
const meatDropdown = document.querySelector('.meat-dropdown');
const fishDropdown = document.querySelector('.fish-dropdown');
const searchField = document.querySelector('#search-input');

pillButtons.forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelector('#select-ingredient-container').style.display = 'block';
        renderRecipeCount();
    })
});

meatDropdown.addEventListener('change', () => {
    document.querySelector('#select-ingredient-container').style.display = 'block';
    renderRecipeCount();
});

fishDropdown.addEventListener('change', () => {
    document.querySelector('#select-ingredient-container').style.display = 'block';
    renderRecipeCount();
});

searchField.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
            document.querySelector('#select-ingredient-container').style.display = 'block';
        renderRecipeCount();
    }
});

function renderRecipeCount() {
    let recipeCountEl = document.getElementById('recipe-count');
    recipeCountEl.textContent = ('82/423 recept');
};