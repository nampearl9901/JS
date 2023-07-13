


 var arrnum = [];


 function tinhtongsochan(arr)
 {
    // foreach dùng để duyệt mảng 
        var result =0;
        arr.forEach(function(number) {
            if(number % 2 == 0)
            {
                result += number;
            }
        });
        return result;
 }


 function demsoam(arr)
 {
    var count = 0;
  
  for(var x = 0; x < arr.length ; x++)
  {
    var number = arr[x];
    if (number < 0 )
    {
      count ++;
    }
  
  }
  return count;

 }


document.getElementById("btn-baitap").addEventListener('click',
function(){

    if(document.querySelector("#txt-number").value.trim()==""){
        return;
    }
        var number = document.querySelector("#txt-number").value*1;
        
       
        arrnum.push(number);
        console.log("arnum: ", arrnum);
        document.querySelector("#txt-number").value=" ";

        document.querySelector("#result").innerHTML= arrnum;

        document.querySelector("#result").innerHTML= /* html*/
           ` <div>
           
                <p>Array: ${arrnum}</p>
                <p>Tổng số chẵn: ${tinhtongsochan(arrnum)}</p>
                <p>Đếm số âm : ${demsoam(arrnum)}</p>
               
            </div>
            `;
});