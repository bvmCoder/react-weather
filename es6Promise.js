function getTempCB(location, callback) {
  callback(undefined, 78)
  callback('City not Found')
}

getTempCB('Austin', function(err, temp){
  if(err) console.log('Error', err)
  else console.log('Success', temp)
})


function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79)
      reject('The City not found')
    }, 1500)

  })
}
// watch the setTimeout it is very important

getTempPromise('New York')
  .then(function(temp){
    console.log('Promise Success', temp)
  }, function (err) {
    console.log('Promise Error', err)
  })

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('a and b needs to be number')
      }
    })
}

addPromise(2, 3)
  .then(function (sum) {
    console.log('Success', sum);
  }, function (error){
    console.log('Error', error);
  })
