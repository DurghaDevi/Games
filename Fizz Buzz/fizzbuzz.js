var num=1;
function fizzBuzz()
    {  
          if(num%3==0&&num%5==0)
              console.log("fizzbuzz");
        else if(num%3==0)
            console.log("fizz");
        else if(num%5==0)
             console.log("buzz");
        else
        console.log(num);
 }
for(num=1;num<=100;num++)
    {
        fizzBuzz(num);
    }
