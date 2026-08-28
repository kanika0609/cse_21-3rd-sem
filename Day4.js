//create one promises that will display user name and password
//using resolve and if data will be rejected its display error message

new promiseOne((resolve,reject)=>{
    setTimeout(()=>{
        let err=true;
        if(!err){
            resolve("user:CSE21,password:1234");
        }
        else{
            reject("error... :data fail");
        }
    })
}).then().catch()