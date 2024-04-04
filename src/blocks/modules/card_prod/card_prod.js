const CardProd = class CardProd {
    constructor(){}
    openTxt() {
        document.addEventListener('DOMContentLoaded', function () {
            var faqBlocks = document.querySelectorAll('.card_prod__txt-info');
            faqBlocks.forEach(function (block) {
                block.addEventListener('click', function () {
                    // Получаем родительский элемент
                    const parentElement = this.closest('.card_prod__mini');
                    // Добавляем или удаляем класс isActive
                    if (parentElement) {
                        parentElement.classList.toggle('isActive');
                    }
                });
            });
        });
    }
    init() {
        this.openTxt();
    }
}

export default CardProd;