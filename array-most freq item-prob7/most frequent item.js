const arr=[2, 'H', 'H', 'H', 6, 3, 'H', 3, 'b', 2, 4, 9, 3];
let maxf = 1;
let count= 0;
let item;
for (let i=0; i<arr.length; i++)
{
        for (let j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 count++;
                if (maxf<count)
                {
                  maxf=count; 
                  item = arr[i];
                }
        }
        count=0;
}
alert(`${item} ( ${maxf} times ) `) ;
