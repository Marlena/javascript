
var fibonacci= {

        calculate: function(x){
                       if (x < 2 ){ 
                          return 1;
                     }
                    
                       else {
                           return (fibonacci.calculate(x-1) + fibonacci.calculate(x-2));
                        }
                   }
                   

    };
