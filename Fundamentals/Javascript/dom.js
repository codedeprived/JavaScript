function showError()
    {
        let flag = true;
        const noErrorMsg = "NO Error is there in the code";
        const ErrorMsg = "There is Error in the code";

        if(flag)
        document.querySelector('.js-error-msg').innerHTML = ErrorMsg;
        else{
            document.querySelector('.js-error-msg').innerHTML = noErrorMsg;
        }
    }
    
    function showname(event)
    {  
        
        const input = document.querySelector('.js-name');
        let name = input.value;
        if(event.key === 'Enter')
        {
            document.querySelector('.js-display-name').innerHTML = `Your name is: ${name}`;
        }
        
    }
    //browser window
    window.console.log('window');

    function handleCostKeydown(event){
    if(event.key === 'Enter')
    {
        calculateTotal();
    }
    }
    function subscribe(){
        const buttonElement = document.querySelector('.subscribe-button');
        
        if(buttonElement.innerText === 'Subscribe'){
            buttonElement.innerHTML = 'Subscribed';
            buttonElement.classList.add('is-subscribed');
        }
        else
        {
            buttonElement.innerHTML = 'Subscribe';
            buttonElement.classList.remove('is-subscribed');
        }
        
    }

    function calculateTotal(){
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value);

        if(cost < 40){
            cost = cost + 10;  
        }

        document.querySelector('.js-total-cost')
         .innerHTML = `$${cost}`;

    }