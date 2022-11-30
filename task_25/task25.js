var alienColor=['green','yellow','red']
var playerpoints=0

if (alienColor[0]==='green'){
    playerpoints=playerpoints+5
    console.log(`Player just earned ${playerpoints} points`)
}
if (alienColor[1] !='green'){
    console.log(`Player earn 0 points `)
}