document.querySelector('.record-input-text').addEventListener('input', function() {
    let currentValue = this.value.trim();

    if (currentValue.length === 0) {
        this.value = "+"; 
    } else if (!currentValue.startsWith("+")) {
        this.value = "+" + currentValue; 
    }
});


document.querySelector('.record-button').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.record-input-text');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (allFilled) {
        alert('Через некоторе время вам позвонит наш оператор');
    } else {
        alert('Введите номер телефона');
    }
});


document.querySelector('.card-all').addEventListener('click', function() {
    alert('В разработке');
});
