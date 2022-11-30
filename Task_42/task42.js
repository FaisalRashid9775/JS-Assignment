var magicianName=['Faisal','Ali','Naveed','Abdullah']
function make_great(magicianName){
    for(let j=0;j < magicianName.length ; j++){
        magicianName[j]='The Great '+magicianName[j]
    }
    

}
make_great(magicianName)

function show_magician(nameMagican){
    for (let i=0;i<nameMagican.length;i++){
        console.log(nameMagican[i])
    }
}
show_magician(magicianName)