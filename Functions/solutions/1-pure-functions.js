// BEGIN
export default function isPrime(num) {
    if (num <= 1) {
      console.log('no');
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log('no');
        return false;
      }
    }
  
    console.log('yes');
    return true;
  }
// END