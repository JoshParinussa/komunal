<?php

function FizzBuzz($start, $end)
{
    for (; $start <= $end; $start++) { 
        if($start % 3 == 0 && $start % 5 == 0){
            print_r('FizzBuzz');
        }elseif ($start % 5 == 0){
            print_r("Buzz");
        }elseif ($start % 3 == 0) {
            print_r("Fizz");
        }else{
            print_r($start);
        }
        
        print_r(PHP_EOL);
    }
}

FizzBuzz(3, 15);

?>