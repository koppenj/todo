// Which date is closer to 6 September 2015?
import { closestIndexTo } from 'date-fns';

export function test() {
const dateToCompare = new Date(2015, 8, 6)
const datesArray = [
  new Date(2022, 8, 5),
  new Date(2019, 8, 17),
  new Date(2000, 8, 16)
]
const result = closestIndexTo(dateToCompare, datesArray)
//=> 1

console.log(datesArray[result]);
}



// Playing with date fn samples from documentation
// Would love to sort project list based on time until deadline
// Possibly move priority to tasks themselves.
// Still need accordion divs for project list
// Want a greyed out 'complete' section on tasks --toggle class for css
// have active section editable, add edit and delete logo to end of line?