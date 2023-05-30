var productExceptSelf = function(nums) {
    let output = []

    //Since we want to do this with O(1) space without counting the output array...
    //We need to do these calculations within the output array.

    //We also want to do this within O(n) time...
    //2 different loops -> one for prefix values, one for postfix. -> O(2n) -> O(n)

    //Prefix
    //Left side prefix, use 1
    output.push(1);
    for(let i = 1; i < nums.length; i++){
        output.push(output[i - 1] * nums[i - 1])
    }

    //Postfix
    //Right side postfix, default 1, dont update that position.
    let post = 1;
    for(let i = nums.length - 2; i >= 0; i--){
        post = post * nums[i + 1];
        output[i] = post * output[i];
    }

    return output;

};
