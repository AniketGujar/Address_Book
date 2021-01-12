console.log("!!.........Welcome to Address Book System.........!!");
const readlineSync = require('readline-sync');
const app = require('./main');
let option="Y";

while (option=="Y") {
    switch (readlineSync.question("1.Add Contact \t2.View Contact \t3.Exit\n")) {
        case "1":
            app.addPerson();
            break;
        case "2":
            app.viewContact();
            break;
        case "3":
            option="N";
            break;
    }   
}
