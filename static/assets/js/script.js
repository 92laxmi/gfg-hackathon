const firebaseConfig = {
    apiKey: "AIzaSyDJT1j1poxHr2LHzl31-OQy0bPIyg7c1pM",
    authDomain: "gfg12-15d8f.firebaseapp.com",
    databaseURL: "https://gfg12-15d8f-default-rtdb.firebaseio.com",
    projectId: "gfg12-15d8f",
    storageBucket: "gfg12-15d8f.appspot.com",
    messagingSenderId: "919197301567",
    appId: "1:919197301567:web:3a5c907bd838001900318a"
  };
//initialize firebase
firebase.initializeApp(firebaseConfig);
var patientdetailsDB = firebase.database().ref('patientdetails');
Document.getElementById('patientdetails').addEventListener('submit',submitForm)

function submitForm(e) {
e.preventDefault();
var name = getElementVal('name');
var age = getElementVal('age');
var gender = getElementVal('gender');
var address = getElementVal('address');
var zipcode = getElementVal('zipcode');
var myFile = getElementVal('myFile');
var ecg = getElementVal('ecg');
saveMessages = (name,age,gender,address,zipcode,myFile,ecg);
}
const saveMessages = (name,age,gender,address,zipcode,myFile,ecg) =>{
    var newpatientdetails = patientdetailsDB.push();
    newpatientdetails.set({
        name:name,
        age:age,
        gender:gender,
        address:address,
        zipcode:zipcode,
        myFile:myFile,
        ecg:ecg,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};