    //2
    function task2() {
        const block3 = document.getElementById('block3');
        const block6 = document.getElementById('block6');
        const temp = block3.innerHTML;
        block3.innerHTML = block6.innerHTML;
        block6.innerHTML = temp;
    }

    //3
    function Area() {
        const block5 = document.getElementById('block5');
        block5.innerHTML = `
            <div>
                <label for="base1">Сторона A:</label>
                <input type="number" id="base1">
            </div>
            <div>
                <label for="base2">Сторона B:</label>
                <input type="number" id="base2">
            </div>
            <div>
                <label for="height">Висота Н:</label>
                <input type="number" id="height">
            </div>
            <button onclick="showTrapezoidArea()">Порахувати</button>
        `;
    }
    
    function showTrapezoidArea() {
        const base1 = parseFloat(document.getElementById('base1').value);
        const base2 = parseFloat(document.getElementById('base2').value);
        const height = parseFloat(document.getElementById('height').value);
        
        if (isNaN(base1) || isNaN(base2) || isNaN(height) || base1 < 0 || base2 < 0 || height < 0) {
            alert('Треба ввести додатні значення для всіх полів.');
            return;
        }
    
        const area = ((base1 + base2) / 2) * height;
        const result = document.createElement('div');
        result.innerHTML = `Площа: ${area}`;
        document.getElementById('block5').appendChild(result);
    }
    

   //4
   function createDivisorsForm() {
    const block5 = document.getElementById('block5');
    block5.innerHTML = `
        <div>
            <label for="number">Число:</label>
            <input type="number" id="number">
        </div>
        <button onclick="showDivisors()">Знайти дільники</button>
    `;
}

function showDivisors() {
    const number = parseInt(document.getElementById('number').value);
    
    if (isNaN(number) || number <= 0) {
        alert('Будь ласка, введіть додатнє число.');
        return;
    }
    
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    alert(`Дільники числа ${number}: ${divisors.join(', ')}`);
    document.cookie = `divisors=${divisors.join(', ')}; path=/`;
}

    window.onload = function() {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [name, value] = cookie.split('=');
            acc[name] = value;
            return acc;
        }, {});

        if (cookies.divisors) {
            const keepData = confirm(`Збережені дільники: ${cookies.divisors}`);
            if (!keepData) {
                document.cookie = 'divisors=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                location.reload();
            } else {
                alert(`Дільники в куках: ${cookies.divisors}`);
            }
        }
    }