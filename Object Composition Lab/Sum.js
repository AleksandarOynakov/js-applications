function domModify() {

    function init(selector1, selector2, resultSelector) {
        this.firstValue = document.getElementById(`${selector1.slice(1)}`);
        this.secValue = document.getElementById(`${selector2.slice(1)}`);
        this.resultElement = document.getElementById(`${resultSelector.slice(1)}`);
    }

    function add() {
        this.resultElement.value = Number(this.firstValue.value) + Number(this.secValue.value);
    }

    function subtract() {
        this.resultElement.value = Number(this.firstValue.value) - Number(this.secValue.value);
    }

    return {
        init,
        add,
        subtract
    }

}

