const readlineSync = require('readline-sync');
const fs = require('fs');

const fileread = fs.readFileSync('./contacts.json');
const data = JSON.parse(fileread);
let obj = data.Person;

class AddressBook {

    addPerson = () => {
        console.log("Enter Your First Name: ");
        let firstName = this.contactValidation();
        console.log("Enter Your Last Name: ");
        let lastName = this.contactValidation();
        console.log("Enter Your Adreess: ");
        let address = this.contactValidation();
        console.log("Enter Your City Name: ");
        let city = this.contactValidation();
        console.log("Enter Your State Name: ");
        let state = this.contactValidation();
        let pinCode = this.pinCode();
        let phoneNumber = this.mobileNumber();
        let email = this.userEmail();

        data['Person'].push({
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            state: state,
            pinCode: pinCode,
            phoneNumber: phoneNumber,
            email: email
        });
        fs.writeFileSync('contacts.json', JSON.stringify(data));
        console.log("\n");
    }

    contactValidation = () => {
        let contactDetailsPattern = /^[A-Z]+[a-zA-Z]{2,}$/;
        let contactDetails = readlineSync.question('');
        const result = contactDetails.match(contactDetailsPattern);
        if (result == null) {
            console.log("Input Invalid..!! >> (Starts with capital, Min 4 char)");
            this.contactValidation();
        }
        return contactDetails;
    }
    pinCode = () => {
        let pinCodePattern = /^([1-9]?[0-9]{5})$/;
        let userPinCode = readlineSync.question('Enter your Pincode: ');
        const result = userPinCode.match(pinCodePattern);
        if (result == null) {
            console.log("Please Enter 6 digit code: ");
            this.pinCode();
        }
        return userPinCode;
    }
    userEmail = () => {
        let emailPattern = /^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$/;
        let email = readlineSync.question('Enter your Email-Id: ');
        const result = email.match(emailPattern);
        if (result == null) {
            console.log("Please Enter Valid Email ");
            this.userEmail();
        }
        return email;
    }
    mobileNumber = () => {
        let mobileNumPattern = /^([1-9]?[0-9]{9})$/;
        let mobileNum = readlineSync.question('Enter your Mobile Number: ');
        const result = mobileNum.match(mobileNumPattern);
        if (result == null) {
            console.log("Please Enter Mobile Number (Country Code <Space> Number)");
            this.mobileNumber();
        }
        return mobileNum;
    }

    viewContact = () => {
        let count = 1;
        console.log("--------------------------------------------------------------Address Book Data-----------------------------------------------------------------")
        console.log(`|Sr.|First Name  Last Name  \t|   Address\t|   City \t|   State\t|   Pin Code\t|  Phone No.\t| \tEmail-Id\t    |`);

        obj.forEach(function (contact) {
            console.log(`| ${count} | ${contact.firstName}  \t ${contact.lastName}   \t| ${contact.address}  \t| ${contact.city}   \t| ${contact.state}  \t| ${contact.pinCode}  \t| ${contact.phoneNumber} \t| ${contact.email}\t    |`);
            count++;
        });
        console.log("------------------------------------------------------------------------------------------------------------------------------------------------")
    }

    updateContact = () => {
        let count = 1;
        let updatefield = parseInt(readlineSync.question('Enter a Number (SR.No) to update Contact: '));
        let row = parseInt(readlineSync.question('Enter Number: 1.First Name\t2.Last Name\t3.Address\t4.City\t5.State\t6.Pin Code\t7.Phone No.\t8.Email-Id :'));
        let change = readlineSync.question('Enter Changes: ');

        obj.forEach(function (contact) {

            if (updatefield == count) {
                switch (row) {
                    case 1:
                        contact.firstName = change;
                        break;
                    case 2:
                        contact.lastName = change;
                        break;
                    case 3:
                        contact.address = change;
                        break;
                    case 4:
                        contact.city = change;
                        break;
                    case 5:
                        contact.state = change;
                        break;
                    case 6:
                        contact.pinCode = change;
                        break;
                    case 7:
                        contact.phoneNumber = change;
                        break;
                    case 8:
                        contact.email = change;
                        break;
                    default:
                        console.log("Invalid Input...!!");
                        break;
                }
                fs.writeFileSync('contacts.json', JSON.stringify(data));
            }
            count++;

        });
    }

    deleteContact=()=>{
        let contactToDelete=parseInt(readlineSync.question('Enter the Row Number to be deleted: '))-1;
        obj.splice(contactToDelete,1);
        fs.writeFileSync('contacts.json', JSON.stringify(data));
    }
}

module.exports = new AddressBook;