var current_user=['Ali','Daniyal','Muzamil','Abdullah','Shaheer','Faisal']
var new_user=['Faisal','Naveed','Kashif','Ali','Muneeb']


  for (let j=0;j<new_user.length;j++){
    if (current_user.find((e)=>e===new_user[j])){
        console.log(new_user[j],'Username already exits. Enter new username')
        
        
    }
    else{
        console.log('username available')
    }
   
  }