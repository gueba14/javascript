let array=[0,1,2,3,4,5,6,7,8,9,10]
let arrayrot= [].concat(array)
let k=15
mover()
function mover(){

    long=array.length

    if(array.length==0){return 0}
    if(k>array.length){
        while(k>array.length){k=k-array.length}
    }
        for(let d=0;d<long;d++){
            
            if((d-k)<0){
                
                arrayrot[long+(d-k)]=array[d]

            }
            if((d-k)>=0){
                
                arrayrot[d-k]=array[d]

            }      
        }
        console.log(array)
        console.log(arrayrot)
    
    return arrayrot
}
    
