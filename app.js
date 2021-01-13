console.log("\t\t\t\t\t!!-------Welcome to Address Book System--------!!\n");
const readlineSync = require('readline-sync');
const app = require('./main');
let option = "Y";

while (option == "Y") {
    switch (readlineSync.question("1.Add Contact    \t2.View Contact    \t3.Update Contact  \t4.Delete Contact      \t5.Find        \t6.Sort        \t7.Exit\n")) {
        case "1":
            app.addPerson();
            break;
        case "2":
            app.viewContact();
            break;
        case "3":
            app.updateContact();
            break;
        case "4":
            app.deleteContact();
            break;
        case "5":
            app.findContact();
            break;
        case "6":
            app.sortContacts();
            break;
        case "7":
            option = "N";
            break;
        default:
            console.log("Invalid Input!!");
    }
}

console.log("\t\t\t\t\t-----Thank you for using AddressBook-----");