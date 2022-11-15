# SETA-entrance-test

### Javascript algorithm solution description.
#### Problem 1: Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to
find the strings’ length that appear most in this array. Writing the unit test function
and provide some test-cases. The result for example array is [‘ab’, ‘cd’, ‘gh’].

#### Problem 1 solution: 
- Step 1: Create a map with each string length as key and its frequency as value

- Step 2: Map through the input array. 
   --> on each iteration, get each corresponding string element of the array and assign the length of this string as key for the map initiated above,
   --> if this key is not added to the map, set its value(the length frequency) equal to 1.
   --> if this key is added to the map, increase its value by 1.
   
- Step 3: Create an array to store the frequency value.
   --> Pushing all map values to the array.
   --> Find the most frequent value in the array.
   
- Step 4: Find the most frequent length of the map by the frequent value found in step 3
- Step 5: Init a new array from the input array with only string has the length of most frequent length found in step 4 and return the new array
   
