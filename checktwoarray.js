let a= prompt("Enter chain a: ");
let b= prompt("Enter chain b: ");
var arr1= a.split(" ");
var arr2= b.split(" ");
let count=0;
if(arr1.length!==arr2.length){
    document.write("There are different chain!");
}else{
    for (let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++) {
            if (i === j) {
                if (arr1[i] !== arr2[j]) {
                    document.write("There are different chain");
                    break;
                } else {
                        count++;
                        if(count===arr1.length){
                            document.write("There are same chain");
                        }
                }
            }
        }
    }
}