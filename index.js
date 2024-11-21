function register(cb){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Display user data");
      resolve();
        },2000);
      })
  }
  function sendemail(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Display user data");
      resolve();
        },2000);
      })
  }
  function login(cb){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Display user data");
      resolve();
        },2000);
      })
  }
  function getdata(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Display user data");
      resolve();
        },2000);
      })
  }
  function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Display user data");
      resolve();
        },2000);
      })
  }
  function waitforthreesec(){  //for sychronous programming
      const ms=3000+new Date().getTime();
      while(ms>new Date())
      {
  
      }
  }
  console.log("other application");
  //callback hell
  register(function(){
      sendemail(function(){
          login(function(){
              getdata(function(){
                  displaydata();
              });
          });
      });
  });