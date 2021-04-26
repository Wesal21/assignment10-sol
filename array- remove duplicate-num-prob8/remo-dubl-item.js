const arr=[2, 'H', 'H', 'H', 6, 3, 'H', 3, 'b', 2, 4, 9, 3];
for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
        arr.splice(j,1);
        
        }
        
        }
        
        }
        alert(arr);