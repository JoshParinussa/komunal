var temp_meat_dog = [1, 0, 5];

function dogsMeat(arr) {
    var meat_totals = arr.reduce((a, b) => a + b, 0)
    var dogs_totals = arr.length;
    var each_dog = meat_totals / dogs_totals;
    var step = 1;

    while (temp_meat_dog.every((val, i, arr) => val === each_dog) == false) {
        temp_meat_dog.forEach(function(value, i) {
            check(i, each_dog, temp_meat_dog)
        });

        console.log('step: ' + step + ' ' + temp_meat_dog)
        step++
    }

}


function check(cur_meat_index, each_dog, arr) {
    if (arr[cur_meat_index] < 2) {
        if (cur_meat_index == 0) {
            if (arr[cur_meat_index + 1] == 0) {
                temp_meat_dog[0] = arr[cur_meat_index]
            } else if (arr[cur_meat_index + 1] > 0) {
                temp_meat_dog[0] = arr[cur_meat_index] + 1
                temp_meat_dog[1] = arr[cur_meat_index + 1] - 1
            }
        }

        if (cur_meat_index == 1) {
            if (arr[cur_meat_index - 1] == 0) {
                if (arr[cur_meat_index + 1] == 0) {
                    temp_meat_dog[1] = arr[cur_meat_index]
                } else if (arr[cur_meat_index + 1] > 0) {
                    temp_meat_dog[1] = arr[cur_meat_index] + 1
                    temp_meat_dog[2] = arr[cur_meat_index + 1] - 1
                }
            } else if (arr[cur_meat_index - 1] > 0) {
                if (arr[cur_meat_index - 1] > arr[cur_meat_index + 1]) {
                    temp_meat_dog[1] = arr[cur_meat_index] + 1
                    temp_meat_dog[cur_meat_index - 1] = arr[cur_meat_index - 1] - 1
                } else {
                    temp_meat_dog[1] = arr[cur_meat_index] + 1
                    temp_meat_dog[2] = arr[cur_meat_index + 1] - 1
                }
            }
        }

        if (cur_meat_index == 2) {
            if (arr[cur_meat_index - 1] == 0) {
                temp_meat_dog[2] = arr[cur_meat_index]
            } else if (arr[cur_meat_index - 1] > 0) {
                temp_meat_dog[2] = arr[cur_meat_index] + 1
                temp_meat_dog[cur_meat_index - 1] = arr[cur_meat_index - 1] - 1
            }
        }
    }
    return temp_meat_dog
}

dogsMeat(temp_meat_dog)