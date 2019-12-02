var budgetController = (function(){

    
})();

var UIController =(function()  {

    return {
        getInput: function(){
            return {
                type: document.querySelector('.add__type').value, //Will be either inc or exp
                description:document.querySelector('.add__description').value,
                value:document.querySelector('.add__value').value
            }
 

        }

    };





})();

var appController = (function(budgetCtrl,UICtrl) {
    
    var controlAddItem = function(){

            // 1. Get the input data

            var input = UICtrl.getInput();
            console.log(input);
            
            // 2. Add the item to thee budget controller
            // 3. Add the item to the UI
            // 4.  calculatethe budget
            // 5. Display the budget on the UI
        
    
    
    }
   
    document.querySelector('.add__btn').addEventListener('click', controlAddItem);


    document.addEventListener('keypress', function(e) {
        if(e.keyCode === 13 || e.which === 13  ){
            controlAddItem();
        }
    });


})(budgetController,UIController);