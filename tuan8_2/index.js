
var arr= [];

function nhapmang()
{
    if(document.querySelector("#txt-nhapN").value.trim()=="")
    {
        return;
    }
   var number = document.querySelector("#txt-nhapN").value * 1;
    arr.push(number);
    document.getElementById("txt-number").innerText= arr;
}

// bài 1

function bai1()
{
    function tinhtong(arr)
    {
        var tong = 0;
        for (var i = 0; i < arr.length; i++)
        {
            tong += arr[i]
        }
        return tong;
    }


         document.getElementById("txt-bai1").innerHTML = `Tổng các Số dương là: ${tinhtong(arr)}`;
             
        
}
    //   bài 2
    function bai2()
    {
        function demduong(arr)
        {
            var dem =0;
            for(var i =0;i<arr.length;i++)
            {
                if(arr[i]>0)
                
                    dem++;
            }
            return dem;
        }
        document.getElementById("txt-bai2").innerHTML =`Số Dương Có trong mảng là: ${demduong(arr)}`;

    }
        //  bài 3
        function bai3()
        {
            function minnumber(arr)
            {
                var min= arr[0];
                for(var i = 0; i<arr.length;i++)
                
                        if(arr[i] < min)
                        min = arr[i];
                return min;
            }

            document.getElementById("txt-bai3").innerHTML =`Số Nhỏ nhất có trong mảng là: ${minnumber(arr)}`;
        }  
                // bài 4
        function bai4()
        {
            function duongmin(arr)
            {
                var nho;
                for(var i =0; i <arr.length;i++)
                {
                    if(arr[i]>0)
                    {
                        nho=arr[i];
                        break;
                    }
                }

                for(var i = 0; i < arr.length;i++)
                {
                    if(arr[i]>0 && arr[i]<nho)
                    {
                        nho =arr[i];
                    }
                }
                return nho;
            }


            console.log(duongmin(arr));
            document.getElementById("txt-bai4").innerHTML =`Số Nhỏ nhất có trong mảng là: ${duongmin(arr)}`;
  
        }

        // bài 5
        function bai5()
        {
            function chancuoi(arr)
            {
                for(var i = arr.length -1; i >= 0; i--)
                {
                    if(arr[i] % 2 ==0 && arr[i] > 0)
                    {
                        return arr[i];
                        break;
                    }
                    
                }
                return -1;
            }

            console.log(chancuoi(arr));
            document.getElementById("txt-bai5").innerHTML =`Số chẵn cuối cùng trong mảng là: ${chancuoi(arr)}`;
  
        }

        // bài 6
        function bai6()
        {
            var vitri1 = document.getElementById("vitri1").value;
            var vitri2 = document.getElementById("vitri2").value;
            
            var index = [arr[vitri1],arr[vitri2]] = [arr[vitri2],arr[vitri1]];

            document.getElementById("txt-bai6").innerHTML =`Đổi Chỗ: ${arr}`;

        }

        // bài 7
        function bai7()
        {

            //     var tg = arr[0];
            // for( var i = 0; i< arr.length -1 ; i++)
            // {
            //     for(var j = i +1; j <arr.length; j++)
            //     {
            //         if(arr[i]>arr[j])
            //         {
            //             tg = arr[i];
            //             arr[i]=arr[j];
            //             arr[j]= tg;
            //         }
            //     }
            // }
        
            
         arr.sort();
         document.getElementById("txt-bai7").innerHTML= `Theo thứ tự tăng dần: ${arr}`;

            
         

        }

        // bài 8
        function bai8()
        {
            function checknt(n)
            {
              
                     var snt= true;

                    if (n < 2) {
                        return snt = false;
                    }


                    for (var i = 2; i < n; i++) {
                        if (n % i == 0) {
                            snt = false;
                            break
                        }
                    }
                    return snt;

            }
                

                for (var i = 0; i < arr.length; i++) {
                    if (checknt(arr[i]) == true) {
                        document.getElementById("txt-bai8").innerHTML= `Số Nguyên Tố: ${arr[i]}`;
                       break;
                    } else {
                        document.getElementById("txt-bai8").innerHTML= `Không có số nguyên tố: -1`;
                    }
                }   
        }


         // bài 9
         function bai9()
         {

           
                var n = 0;
            for(var i = 0; i< arr.length; i++)
            {
                if(arr[i] > 0 )
                {
                    n++;
                }
                
            }
           

            
            
            document.getElementById("txt-bai9").innerText= `Có tất cả ${n} số nguyên trong mảng`;
         }

             // bài 10
             function bai10()
             {
                var am = 0;
                var duong = 0;
            
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] > 0) {
                        duong++;
                    } else {
                        am++;
                    }
                }

                if (am > duong) {
                    document.getElementById("txt-bai10").innerText= `Số âm > số dương`;
            
                } else if (am < duong) {
                    document.getElementById("txt-bai10").innerText= `Số âm < số dương`;
            
                } else {
                    document.getElementById("txt-bai10").innerText= `Số âm = số dương`;
            
                }
            
             }
 

               