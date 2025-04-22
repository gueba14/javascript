let array=[0,1,2,3,4,5]
let arrayrot= [].concat(array)
let k=2
mover()
function mover(){

    long=array.length

    if(array.length==0){return 0}

        for(let d=0;d<long;d++){
            
            if((d-k)<0){
                
                arrayrot[long+(d-k)]=array[d]

            }
            if((d-k)>=0){
                
                arrayrot[d-k]=array[d]

            }      
        }
    console.log(arrayrot)
    console.log(array)
    return arrayrot
}
    