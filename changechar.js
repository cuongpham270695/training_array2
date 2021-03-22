let a=prompt("Nhập gì nhập đê:");
var arr=a.split("");
for(let i=0;i<arr.length;i++){
    if(arr[i]=="-"){
        arr[i]="_";
    }
}document.write(arr.join(" "));
