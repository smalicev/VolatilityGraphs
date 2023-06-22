//  Takes testArr = [[4, 31], [3,22], [3,5], [6, 23]]; (input)
// [0,1,2,3,4,5,6] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
/* Returns an object containing each day in integer form as a key and average as the value.

For now it will be an absolute value
{
  '0': [ NaN ],
  '1': [ NaN ],
  '2': [ NaN ],
  '3': [ 13.5 ],
  '4': [ 31 ],
  '5': [ NaN ],
  '6': [ 23 ]
}
*/
const datesToChartObj = function (dateArray) {
  let chartObject = {};
  let dayIntegers = [0,1,2,3,4,5,6];

dayIntegers.forEach(number =>{
     chartObject[number] = [];
     chartObject[number].push(Math.abs(dateArray.filter(array => {
    return array[0] === number;
  }).map(array => {
    return array[1]
  }).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0) / dateArray.filter(array => {
    return array[0] === number;
  }).length));
});
return chartObject;
}

export { datesToChartObj }