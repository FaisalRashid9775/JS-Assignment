const userName=prompt('Enter Name')
const member=['admin','ali','naveed','faisal','ahmad']

const adminMatch=member.find((e)=>e===userName.toLowerCase())


if(adminMatch==='admin'){
    console.log('Hello admin, would you like to see a status report?')
}

else if(adminMatch==='ali'){
    console.log('Hello',userName,'thank you for logging in again')
}
else if(adminMatch==='naveed'){
    console.log('Hello',userName,'thank you for logging in again')
}
else if(adminMatch==='faisal'){
    console.log('Hello',userName,'thank you for logging in again')
}
else if(adminMatch==='ahmad'){
    console.log('Hello',userName,'thank you for logging in again')
}
else {
    console.log('Please register yourself')
}
