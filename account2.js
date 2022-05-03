function DisplayonDiv(){

    let displayName = document.getElementById("displayName");
    let displayAccountNo = document.getElementById("displayAccountNo"); 
    let displayEmail  = document.getElementById("displayEmail"); 
    let displayPhone = document.getElementById("displayPhone"); 
    let displayAddress = document.getElementById("displayAddress");
    let displayCity = document.getElementById("displayCity");
    let displayState = document.getElementById("displayState");
    let displayCountry = document.getElementById("displayCountry");
    let displayZip = document.getElementById("displayZip");
   
   
    //displayName.textContent='hello'
    
    
    
    
    
    
    let accountUserData=localStorage.getItem("accountUserData");
    if(accountUserData==null){
        accountUser=[];
    }
    
    else{
        accountUser=JSON.parse(accountUserData);
    }
    
    accountUser.push(accountData);
    localStorage.setItem("accountUserData", JSON.stringify(accountUser));
    console.log('testing',accountUser);
    
    for(let i=0;i<accountUser.length;i++){
        displayName.textContent=accountUser[i].accountName;
    }

    }

    