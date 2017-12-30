const person = {
  name: 'Awsome Name',
  occupation: {
    title: 'Senior Manager of Awsome',
    yearsHeld: 2
  },
  pets: [{
    kind: 'dog',
    name: 'Fiona'
  }, {
    kind: 'cat',
    name: 'Ralph'
  }]
}

const collections = [1, [2, [4, [5, [6]],]]]

function find(array, criteriaFn) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFn(array[i])) {
      return array[i]
    }
  }
}

function criteriaFn(arr) {
  return arr === 1
}
console.log(find(collections, criteriaFn([6])))
