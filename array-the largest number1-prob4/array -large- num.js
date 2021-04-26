let arr=[2,6,9,10,12,23,25,22,45,-9,66,8,3,55,14,35,-1,0,7,20];

let lgNum =0;
for(let i=0; i<20;i++){
    if(arr[i]>lgNum){
        lgNum=arr[i];
       
    }
}
alert(lgNum);


