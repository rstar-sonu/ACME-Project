
//Constructor
function AccountData(accountName, accountNumber, email, phone, address, city, state, country, zip) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
}

//Display Constructor
function Display() {

}


// Add methods to display prototype
Display.prototype.add = function (accountData) {
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr> 
                        <td>${accountData.accountName}</td>
                        <td>${accountData.accountNumber}</td>
                        <td> <div>${accountData.country}
                            <button class ="btn btn-primary viewbtn" onclick="location.href='/NewAccountDetailPage.html'">View</button> </div>
                        </td>                
                    </tr>`;

    tableBody.innerHTML += uiString;
}


Display.prototype.clear = function () {
    let form = document.getElementById('accountForm');
    form.reset();

}


// function to call on button


function creat() {



    let accountName = document.getElementById('getAccountName').value;
    let accountNumber = document.getElementById('getAccountNumber').value;
    let email = document.getElementById('getEmail').value;
    let phone = document.getElementById('getPhone').value;
    let address = document.getElementById('getAddress').value;
    let city = document.getElementById('getCity').value;
    let state = document.getElementById('getState').value;
    let country = document.getElementById('getCountry').value;
    let zip = document.getElementById('getZip').value;
    
    let accountData = new AccountData(accountName, accountNumber, email, phone, address, city, state, country, zip)


    let display = new Display();
    display.add(accountData);
    display.clear();


    return false
    // let displayName=document.getElementById('displayName');
    // displayName.innerHTML=accountName.value;

}


(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        // @ts-ignore
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    // event.preventDefault();
                    // event.stopPropagation();
                } else {
                    creat()
                    $('#exampleModal').modal('hide')
                    
                }

                // form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();













// Code for Account Detai Page


function ContactData(firstName, lastName, contactEmail, contactPhone, title) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contactEmail = contactEmail
    this.contactPhone = contactPhone;
    this.title = title;

}

//contactDisplay Constructor
function ContactDisplay() {

}


// Add methods to display prototype
ContactDisplay.prototype.add = function (contactData) {
    contactDiv = document.getElementById('contactDiv');
    let html =

        `<div class="col-md-5 detailpage m-3 p-2">
                            <span><span>Name: </span>${contactData.firstName + " " + contactData.lastName}</span><br>
                            <span><span>Title: </span>${contactData.title}</span><br>
                            <span><span>Email: </span>${contactData.contactEmail}</span><br>
                            <span><span>Phone: </span>${contactData.contactPhone}</span><br>
                    </div>`;

    contactDiv.innerHTML += html;

}

ContactDisplay.prototype.clear2 = function () {
    let form = document.getElementById('contactForm');
    form.reset();
}


// function to call on button
function creatContact() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let contactEmail = document.getElementById('contactEmail').value;
    let contactPhone = document.getElementById('contactPhone').value;
    let title = document.getElementById('title').value;


    let contactData = new ContactData(firstName, lastName, contactEmail, contactPhone, title)
    console.log(contactData);

    let contactdisplay = new ContactDisplay();
    contactdisplay.add(contactData);
    contactdisplay.clear2();

};






// Code for State Dropdown

function stateDrop() {
    let country = document.getElementById('getCountry').value;

    if (country === "India") {
        var array = ["Choose...", "Delhi", "Goa", "UP", "Maharashtra"];
    }

    else if (country === "U.S.A") {
        var array = ["Choose...", "Chicago", "Washington"];
    }

    else {
        var array = ["Choose..."];
    }
    let String = "";
    for (i = 0; i < array.length; i++) {
        String = String + "<option>" + array[i] + "</option>";
    }

    document.getElementById('getState').innerHTML = String;

}