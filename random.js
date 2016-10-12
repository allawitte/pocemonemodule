const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    max = Math.floor(Math.random() * (max - min + 1));
    return max + min;
};
var i = 0;
const randomArr = (min, max, repeat, arr) => {
    var val;
    if (repeat < 1) {
        return arr;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    val = Math.floor(Math.random() * (max - min + 1)) + min;
    if (arr.length > 0) {
        if(arr[arr.length - 1] != val) {
            arr.push(val);
            repeat --;
        }
        else {
                randomArr(min, max, 1, arr);
        }

    }
    else {
        arr.push(max + min);
        repeat --;
    }
    randomArr(min, max, repeat, arr);
};
module.exports = {
    random,
    randomArr
};
/**
 * Created by HP on 10/9/2016.
 */

