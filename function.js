 let calculation = ' ';
    function update(value){
      if(value === '='){
        calculation = eval(calculation);
      }else{
        calculation += value;
      }

      localStorage.setItem('calculation', JSON.stringify(calculation));
      display();
    }

    function display(){
      JSON.parse(localStorage.getItem('calculation'));
      document.querySelector('.js-display').innerHTML = calculation;
    }
