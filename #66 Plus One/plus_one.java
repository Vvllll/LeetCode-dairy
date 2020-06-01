class Solution {
    public int[] plusOne(int[] digits) {
        for(int i = digits.length-1; i>=0; i--){
            // if it is 9, then become 0
            // if it is not 9, then plus one
            if(digits[i] == 9){
                digits[i] = 0;
            } else{
                digits[i] += 1;
                return digits;
            }
        }
        // if all numbers are 9
        int[] result = new int[digits.length + 1];
        result[0] = 1;
        return result;
    }
}