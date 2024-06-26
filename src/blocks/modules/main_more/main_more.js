const MainMore = class MainMore {
    constructor(){}
    openFaq() {
        document.addEventListener('DOMContentLoaded', function () {
            var faqBlocks = document.querySelectorAll('.main_more__block');
            faqBlocks.forEach(function (block) {
                block.addEventListener('click', function () {
                    this.classList.toggle('isActive');
                });
            });
        });
    }
    init() {
        this.openFaq();
    }
}

export default MainMore;