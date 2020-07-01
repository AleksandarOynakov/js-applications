function solve() {
    let dropDownBtn = document.getElementById('dropdown');
    let closed = true;
    dropDownBtn.addEventListener('click', () => {
        if (closed) {
            document.getElementById('dropdown-ul').style.display = 'block';
        } else {
            document.getElementById('dropdown-ul').style.display = 'none';
            document.getElementById('box').style.background = 'black';
            document.getElementById('box').style.color = 'white';
        }
        closed = !closed;
    });

    let dropDownUl = document.getElementById('dropdown-ul');
    dropDownUl.addEventListener('click', (e) => {
        document.getElementById('box').style.background = e.target.textContent;
        document.getElementById('box').style.color = 'black';
    })
}