document.getElementById("btn-bai1").addEventListener('click',
function()
{
    var number = 0;
    var S = 0;
    while(S < 10000)
    {
      //bước nhảy của vòng lặp là n++
      number++;
      //cứ sau mỗi vòng lặp thì tổng S sẽ được cộng dồn với n cho đến khi S > 10000 thì thoát khỏi vòng lặp
      S = S + number;
    }
    document.getElementById("ketqua-bai1").innerText=`Số Nguyên Dương nhỏ Nhất là: ${number}, Tổng Số từ 1 đến ${number} là: ${S}`;

    
});


// bài 2

document.getElementById("btn-bai2").addEventListener('click',
function()
{
   var X = document.getElementById("txt-x").value*1;
   var n = document.getElementById("txt-n").value*1;
    var i;
    var s = 0;
    var T = 1;


    for( i = 1; i <= n; i++){
        T = T * X;
        s = s + T;
      }

    document.getElementById("ketqua-bai2").innerText=`Tổng Vòng Lập: ${s} `;

    
});

// bai3
document.getElementById("btn-bai3").addEventListener('click',
function()
{
   var Giaithua = document.getElementById("txt-giathua").value*1;
  
    function giaithua()
    {
        
        var giai_thua = 1;
        for (var i = 1; i <= Giaithua; i++)
            giai_thua *= i;
        return giai_thua;
    }

    document.getElementById("ketqua-bai3").innerText=`Gia Thừa của ${Giaithua} là: ${giaithua(Giaithua)} `;

    
});

// bài 4

document.getElementById("btn-bai4").addEventListener('click',
function()
{
   
        var taothe=" ";
        for(var i = 1; i <= 10; i++)
        {
            if (i % 2 == 0) {
                taothe += '<div class="bg-primary text-white my-0 p-2">Div chẵn</div>'
            } else {
                taothe += '<div class="bg-danger text-white my-0 p-2">Div lẻ</div>'
    
            }
        }
  

    document.getElementById("ketqua-bai4").innerHTML= taothe;

    
});

// bài 5

document.getElementById("btn-bai5").addEventListener('click',
function()
{
                        // hàm kiểm tra số nguyên tố
                        function kiem_tra_snt(n)
                        {
                            // Biến cờ hiệu
                            var flag = true;
                        
                            // Nếu n bé hơn 2 tức là không phải số nguyên tố
                            if (n < 2) {
                                flag = false;
                            }
                            else if (n == 2) {
                                flag = true;
                            }
                            else if (n % 2 == 0) {
                                flag = false;
                            }
                            else {
                                // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
                                for (var i = 3; i <= Math.sqrt(n); i += 2)
                                {
                                    if (n % i == 0) {
                                        flag = false;
                                        break;
                                    }
                                }
                            }
                        
                            return flag;
                        }
         var snt = document.getElementById("txt-snt").value;
        
                        // Ép snt sang kiểu INT
                    snt = parseInt(snt);
                
                    // Lặp để in kết quả
                    var ketqua = '';
                    for (var i = 1; i <= snt; i++) {
                        // Nếu là số nguyên tố thì in ra
                        if (kiem_tra_snt(i)){
                            ketqua += i + ' ';
                        }
                    }
  
            document.getElementById("ketqua-bai5").innerText= `Số Nguyên Tố Là: ${ketqua}`;
        
        
    

      

    
});