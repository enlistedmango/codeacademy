let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistration = true;
const age = 21;

if (earlyRegistration && age > 18) {
    raceNumber += 1000;
}


if (earlyRegistration && age > 18) {
    console.log(`The race will start at 9:30am and your race number is: ${raceNumber}.`);
} else if (!earlyRegistration && age > 18) {
    console.log(`The race will start at 11am and your race number is: ${raceNumber}.`);
} else if (age < 18) {
    console.log(`You will race art 12:30pm and your race number is: ${raceNumber}.`);
} else {
    console.log(`See the registration desk.`);
}