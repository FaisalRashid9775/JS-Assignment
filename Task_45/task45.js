var  car={
    menufacture : 'BMW',
    model_number : 'XRTW90',
    color : 'Black',
    Additional_Feature : false
}
function car_info(menufactorNum,modelNumber,colors,AdditionalFeature){
    car.model_number=menufactorNum
    car.model_number=modelNumber
    car.color=colors
    car.Additional_Feature=AdditionalFeature
    console.log(car)
}

car_info('Rose Roayals','RR2022','Blue',true)