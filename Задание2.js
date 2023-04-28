function isPrime(n) {
    if (n < 2) {
      return 'Число должно быть больше 1';
    } else if (n === 2) {
      return 'Простое число';
    }
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'Составное число';
      }
      i +=1;
    }
    
    return 'Простое число';
  }
  console.log(100, isPrime(100));
  console.log(7, isPrime(7));
  console.log(0, isPrime(0));
  console.log(23, isPrime(23));
  console.log(2, isPrime(2));



  function getSimplicityOfNumber (number) {
    if (number > 1000) return "Данные неверны.";
    if (number === 0) return  "Ноль - есть ноль. Число ненатуральное.";
    if (number === 1) return "Один - есть один. Не простой и не составной.";

    let divisionsCount = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisionsCount++;
    }

    if (divisionsCount === 2)
        return "Число простое.";
    else
        return "Число составное.";
}

console.log(getSimplicityOfNumber(10));