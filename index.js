function iterativeLog(array){
  array.forEach(function(element,index,array){
    console.log(`${index}: ${array[index]}`)
  })
};


function iterate(callback){
  var temp=new Array(1,2,3)
  temp.forEach(callback)
  return temp
}

function doToArray(array,callback){
  array.forEach(callback)
}