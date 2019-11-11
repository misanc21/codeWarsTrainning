/* Kata 1 */
const invert =array=>{
  const arr = array.map(x => x*-1)
  return arr;
}

/* Kata 2*/
const countSheeps= arrayOfSheep=>{
  let total=0;
  arrayOfSheep.map(x => x? total++ : null)
  return total
}

/* kata 3*/
const clean=arr =>{
  const a = arr.filter(e=> true)
  return a
}
