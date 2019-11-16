/*kata 1*/
const strCount = (str, letter)=>{  
  let n = str.split('').filter(l => l ==letter).join('').length
  return  n
}

/*kata 2*/
const getNames =data=>{
  return data.map(item=>item.name);
}

/kata 3**/
const whosOnline = (friends) => {
    
  let onlin = friends.filter(item => item.status=='online'&& item.lastActivity <=10).map(item=>item.username)
  let offlin = friends.filter(item => item.status=='offline').map(item=>item.username)
  let awa = friends.filter(item => item.status=='online' && item.lastActivity >10 ).map(item=>item.username)
    let a = {
    online:onlin,
    offline:offlin,
    away:awa
  }
  a.away.join() === ''?delete a.away:null
  a.online.join() === ''?delete a.online:null
  a.offline.join() === ''?delete a.offline:null

  return a
}
