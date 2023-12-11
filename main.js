

// parameters
// num
// / 3 fizz
// / 5 buzz
// / 5 and / 3 fizzbuzz

// returns
// console log numbers as we loop through

// e.g. fizzbuzz(20)
// 1
// 2
// fizz
// 4
// buzz
// ...
// fizzbuzz
// 16
// ...

// for loop 
// conditionals


function fizzBuzz(num) {

  for (let i = 1; i <= num; i++) {
    
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
    
  }

}

