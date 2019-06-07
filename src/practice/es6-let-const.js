var nameVar = 'jordan';
nameVar = 'mike';
console.log('nameVar', nameVar)

let nameLet = "jj";
console.log('nameLet', nameLet)


const nameConst = 'frunk';
console.log(nameConst)

function getPetName() {
    var petName = "popo";
    return petName
}
const petName = getPetName();
console.log(petName);

const fullName = "Jordnaonfoaidsjf butts";
let firstName;
if (fullName) {

    firstName = fullName.split(' ')[0];
    console.log(firstName)
}
//fails because if block level scoped let variable line 21
console.log(firstName)