let first_answer = prompt('What`s your name?').toLowerCase()
if (first_answer.charAt(0) === "a") {
    console.log('Wellcome!');
} else {
    console.log('Get a hell!');
}

let second_answer = prompt('Fill the gap with random numbers!')
if (second_answer % 2 === 0) {
    console.log('четное число');
} else {
    console.log('нечетное число');
}

let third_answer = prompt('What`s your name')
if (third_answer.length % 2 === 0) {
    console.log('четное количество')
} else {
    console.log('нечетное количество');
}