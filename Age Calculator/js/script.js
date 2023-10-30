let ageYear = 0, ageMonth = 0;
let currentYear = 2023;
let currentMonth = 10;

const calculateAge = () => {
    const dob = document.getElementById('date').value;
    const dobSplit = dob.split('-');
    const dobYear = dobSplit[0]
    const dobMonth = dobSplit[1]

    if (dobYear == currentYear && dobMonth<=currentMonth) {
        ageMonth = currentMonth - dobMonth
        ageYear = currentYear - dobYear;
        document.getElementById('age').innerHTML = `your age is ${ageYear} year and ${ageMonth} months old`;
    }
    else if(dobYear > currentYear || dobMonth>currentMonth) {
        document.getElementById('age').innerHTML = `Enter valid date of birth`;
    }
    else {
        ageMonth = currentMonth - dobMonth
        ageYear = currentYear - dobYear;
        document.getElementById('age').innerHTML = `your age is ${ageYear} year old`;
    }
}