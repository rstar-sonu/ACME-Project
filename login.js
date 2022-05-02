let user=[
    {email:"sonu@gmail.com",
    password:"Sonu1234"
    },

    {email:"himanshu@gmail.com",
    password:"Himanshu1234"
    },

    {email:"umesh@gmail.com",
    password:"Umesh1234"
    },

    {email:"rahul@gmail.com",
    password:"Rahul1234"
    },

   

]




let Validation = ()=>{

    let emailValue= document.getElementById("email").value;
    let passValue= document.getElementById("password").value;



    let object =user.find(obj => obj.email == emailValue && obj.password == passValue);

    if(object!=null)
    {document.getElementById("form").setAttribute("action" ,"/Dashbord.html");
    return;}
    else
    {
    //let findObject =user.find(obj => obj.email == emailValue);
    //if(findObject!=null)
    //else
    email_validate();
    pass_validate();
    return false;
    }
}



function email_validate(){
    let emailValue= document.getElementById("email").value;
    let object =user.find(obj => obj.email == emailValue);
    if(object !=null){
        email.style.border="1px solid green",
        email_error.style.display="none"
    }
    else{
        email.style.border="1px solid red"
        email_error.style.display="block"
       
    }

};


function pass_validate(){
    let passValue= document.getElementById("password").value;
    let object =user.find(obj => obj.password == passValue);
    if(object !=null){
        password.style.border="1px solid green",
        pass_error.style.display="none"
    }
    else{
        password.style.border="1px solid red"
        pass_error.style.display="block"
        
    }

};







let getData=()=>{
let getemail= document.getElementById('getemail').value;
let getpassword= document.getElementById('getpassword').value;
user.push({email:getemail,password:getpassword});
console.log(user);

};