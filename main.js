const readlineSync = require('readline-sync');
const fs = require('fs');

const fileread = fs.readFileSync('./contacts.json');
const data = JSON.parse(fileread);

class AddressBook {

    addPerson = () => {
        let firstName = readlineSync.question('Enter your First Name: ');
        let lastName = readlineSync.question('Enter your Last Name: ');
        let address = readlineSync.question('Enter your Address: ');
        let city = readlineSync.question('Enter your City: ');
        let state = readlineSync.question('Enter your State: ');
        let pinCode = readlineSync.question('Enter your PinCode: ');
        let phoneNumber = readlineSync.question('Enter your Mobile Number: ');
        let email = readlineSync.question('Enter your Email-Id: ');


        data['Person'].push({
            FirstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            state: state,
            pinCode: pinCode,
            phoneNumber: phoneNumber,
            email: email
        });
        fs.writeFileSync('contacts.json', JSON.stringify(data));

    }
}

module.exports = new AddressBook;