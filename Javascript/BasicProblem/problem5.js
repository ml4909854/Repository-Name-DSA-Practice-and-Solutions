
        let n = 5
for(let i =0; i<=n; i++){
    let bag = " "
    for(let j =1; j<=n; j++){
        if(i===1 || i=== n || j===1 || j===n){
            bag = bag +'+ '
        }
        else{
            bag = bag+"  "
        }
    }
}