const Button = document.getElementById('btn');

Button.addEventListener('click',
    function (e) {
        console.log('Lee')
        

        const Price = document.querySelector('#price-input');
        const Rate = document.querySelector('#rate-input');
        const Time = document.querySelector('#time-input');
        const Interest = document.querySelector('#interest-input');
        const TotalAmount = document.querySelector('#total-input');


        const price = parseInt(Price.value);
        const rate =parseInt(Rate.value);
        const time = parseInt(Time.value)/12;

        if (isFinite(price)) {
            Interest.value = parseFloat(price * rate * time) / 100;
            let b;
            b = parseFloat(Interest.value) + parseFloat(price);
            TotalAmount.value = parseFloat(Interest.value) + parseFloat(price);
        }
})