# SETA-entrance-test

### Javascript algorithm solution description.
#### Problem 1: Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to
find the strings’ length that appear most in this array. Writing the unit test function
and provide some test-cases. The result for example array is [‘ab’, ‘cd’, ‘gh’].

#### Problem 1 solution: 
- Step 0: Check if the input array has an appropriate length, if not just return an empty array.
- Step 1: Create a map with each string length as key and its frequency as value.

- Step 2: Map through the input array. 
   --> on each iteration, get each corresponding string element of the array and assign the length of this string as key for the map initiated above,
   --> if this key is not added to the map, set its value(the length frequency) equal to 1.
   --> if this key is added to the map, increase its value by 1.
   
- Step 3: Create an array to store the frequency value.
   --> Pushing all map values to the array.
   --> Find the most frequent value in the array.
   
- Step 4: Find the most frequent length of the map by the frequent value found in step 3.
- Step 5: Init a new array from the input array with only string has the length of most frequent length found in step 4 and return the new array.
   
   
#### Problem 2: Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of
integers on top 2. Writing the unit test function and provide some test-cases. The
result for the example array is 9

#### Problem 2 solution: 

- Step 0: Make sure all elements inside the input array are number.
- Step 1: If length of the input array is 1, return the first element(or the only element).
- Step 2: If length of the input array is 0, return 0.
- Step 3: Sort the array from largest to smallest number.
- Step 4: Return sum of the first 2 elements.

#### React App:
- Create a redux store with @reduxjs/toolkit
- Wrapped App component with react-redux provider and store prop.
- Using @reduxjs/toolkit to fetch data from the given API.
- Dispatch action to add all fetch posts data to the posts state.
- Submit form and dispatch action to add a new post and update the posts state.
