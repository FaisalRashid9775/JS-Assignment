var magicianName=['Faisal','Ali','Naveed','Abdullah']
console.log('Origional Array')
show_magician(magicianName)
function make_great(magicianName){
    for(let j=0;j < magicianName.length ; j++){
        magicianName[j]='The Great Magician '+magicianName[j]
    }
    

}
make_great(magicianName)

function show_magician(nameMagican){
    for (let i=0;i<nameMagican.length;i++){
        console.log(nameMagican[i])
    }
}
console.log('New Array')
show_magician(magicianName)