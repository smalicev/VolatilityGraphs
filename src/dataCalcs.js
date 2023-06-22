// Converts the object from twelvedata into an array of [date, (open) - (close)]
const dataCalc = function(object) {
let dateDifference = object['values'].map((obj) => {
  let x = obj['datetime']
  let y = Number(obj['open']) - Number(obj['close']);
  let array = [x, y]
  return array;
})
return dateDifference
};

export { dataCalc }