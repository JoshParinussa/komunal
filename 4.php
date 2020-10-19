<?php


function mathOperator($arr){
    $operators = ['+', '-', '*', '/', '**', '%'];
    $numb_arrs = explode(',',$arr);
    foreach ($numb_arrs as $numb_arr) {
        $numbers = explode(' ',$numb_arr);
        foreach ($numbers as $number){
            if($number == ''){
                $key = array_search($number, $numbers);
                unset($numbers[$key]);
                $numbers = array_values($numbers);
            }
        }
        foreach ($operators as $operator) {
            if (eval("return ".join($operator, array_slice($numbers, 1)).";") == $numbers[0]){
                print_r($numbers[0].' = '.$numbers[1].' '.$operator.' '.$numbers[2]. PHP_EOL);
                break;
            }elseif (eval("return ".join($operator, array_slice($numbers, 0, 2)).";") == end($numbers)) {
                print_r($numbers[0].' '.$operator.' '.$numbers[1].' = '.end($numbers). PHP_EOL);
                break;
            }
        }
    }

}

mathOperator('5 5 1 , 1 5 2');

?>