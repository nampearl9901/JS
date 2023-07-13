function domId(id)
{
    return document.getElementById(id);
}
var arr = [];
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
// bai1
function bai1()
{
    var tagtable = document.createElement('table');
    for (var i = 1 ; i <= 100; i +=10)
    {
        var tagtr = document.createElement('tr');
        tagtable.appendChild(tagtr);
        for(var j = i; j < i +10; j++)
        {
            var tagtd = document.createElement('td');
            tagtd.style.padding = '10px';
            var th3 = document.createElement('h3');
            var textnode = document.createTextNode(j);
            tagtd.appendChild(th3);
            th3.appendChild(textnode);
            tagtr.appendChild(tagtd);

        }

    }
    domId('txt-bai1').appendChild(tagtable);
    // document.getElementById("txt-bai1").innerText= tagtable;
  

}

// bai2
function bai2()
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
                        document.getElementById("txt-bai2").innerHTML= `Số Nguyên Tố: ${arr[i]}`;
                       break;
                    } else {
                        document.getElementById("txt-bai2").innerHTML= `Không có số nguyên tố: -1`;
                    }
                }   
}


// bai3
function bai3()
{
    var n = document.getElementById("number3").value*1;
    var tong = 0;
    for(var i = 2; i <=n; i++)
    {
        tong +=(2*i);

    }
    document.getElementById('txt-bai3').innerHTML= tong;
}

// bai4

function bai4()
{
    var n = document.getElementById("number4").value*1;
    var so = ' ';
    for(var i = 0; i <=n; i++)
    {
        if(n % i ==0)
        {
            so += i+', ';
        }
       

    }
    document.getElementById('txt-bai4').innerHTML= `uoc so cua ${n} la: ${so}`;
}

// bai5
function bai5()
{
    var n = String(document.getElementById("number5").value*1) ;
    var dao = n.split('').reverse().join('');
    document.getElementById('txt-bai5').innerHTML= `so dao nguoc cua ${n} la: ${dao}`;
}

// bai6
function bai6()
{
    var tong = 0;
    var count = 0;
    for (var i =0; i <=100;i++)
    {
        count++;
        tong += count;
    }
    document.getElementById('txt-bai6').innerHTML= `nguyen duong lon nhat ${tong}`;
}
// bai7
function bai7()
{
    var n = document.getElementById("number7").value*1;
    var so = ' ,';
    for(var i = 0; i <=10; i++)
    {
        table = `<h3>${n} x ${i} = ${n*i}</h3>` ;
        so +=table;
       

    }
  
    document.getElementById('txt-bai7').innerHTML= `     ${so}`;
}
// bai8
function bai8()
{
    var n = [[],[],[],[]];
    var card = ["4k","KH","5C","KA","QH","KD","2H","10S","AS","7H","9K","10D"];
    var chia = '';
    for (var i = 0; i< n.length; i++)
    {
        for(var j = i; j <card.length; j+=4)
        {
            n[i].push(card[j]);
        }
        var chia1 = `<h3>play ${i+1}: [${n[i]}]</h3>`;
        chia += chia1;
    }
    document.getElementById('txt-bai8').innerHTML= chia;
   
}

// bai9
function bai9()
{
    var n = document.getElementById("number8").value*1;
    var m = document.getElementById("number9").value*1;
    for (var cho = 1; cho <n; cho++)
    for (var ga = 1; ga <n; ga++)
    if ((ga+cho==n) && (ga*2 + cho *4==m))
    {
        document.getElementById("txt-bai9").innerHTML= `<h3>Số con gà là: ${ga} con và số con chó là: ${cho} con </h3>`;
    }


}
// bai10
function bai10()
{
    var gio = document.getElementById("number10").value*1;
    var phut = document.getElementById("number11").value*1;
    if(gio < 24 || phut <60 )
    {
        var toadogio = gio *30 +(phut/ 60.0)*30;
        var toagophut = phut *6;
        var goc = Math.abs(toadogio - toagophut);
        goc  = (goc<= 180 )?goc:(360-goc);
       
    }
    document.getElementById("txt-bai10").innerHTML= `<h3>${goc}°</h3>`;
  
   
}