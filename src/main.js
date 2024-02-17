document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = document.querySelector('[data-tab-id="' + botao.target.dataset.tabButton + '"]');
            
            console.log(botao.target.dataset.tabButton);
            
            escondeTodasAbas();
            removeBotaoAtivo();

            if (abaAlvo) {
                abaAlvo.classList.add('shows__list--is-active');
                botao.target.classList.add('shows__tabs__button--is-active');
            }
        });
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
