// bai1
document.getElementById("btn-bai1").addEventListener("click", function () {
  var number1 = document.getElementById("txt-num1").value;
  var number2 = document.getElementById("txt-num2").value;
  var number3 = document.getElementById("txt-num3").value;
  var n;
  if (number1 > number2) {
    n = number1;
    number1 = number2;
    number2 = n;
  }
  if (number1 > number3) {
    n = number1;
    number1 = number3;
    number3 = n;
  }
  if (number2 > number3) {
    n = number2;
    number2 = number3;
    number3 = n;
  }
  document.getElementById(
    "kq-bai1"
  ).innerText = ` Kết Quả Xuất Ra: ${number1} < ${number2}  < ${number3} `;
});

// bài 2
document.getElementById("btn-bai2").addEventListener("click", function () {
  var mylist = document.getElementById("myList");
  document.getElementById("favourite").innerText = `Xin Chào ${
    mylist.options[mylist.selectedIndex].text
  }!`;
});

//bài 3
document.getElementById("btn-bai3").addEventListener("click", function () {
  var a = document.getElementById("txt-number1").value * 1;
  var b = document.getElementById("txt-number2").value * 1;
  var c = document.getElementById("txt-number3").value * 1;
  var count = 0;

 
    if (a % 2 == 0) {
      console.log("so chan", a);
    } else {
      console.log("so le");
    }
 

  document.getElementById("kq-bai3").innerText = "ket qua" + `${count} !`;
});

// bai 4
document.getElementById("btn-bai4").addEventListener("click", function () {
  var a = document.getElementById("canh1").value * 1;
  var b = document.getElementById("canh2").value * 1;
  var c = document.getElementById("canh3").value * 1;

  if (a < b + c && b < a + c && c < a + b) {
    if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      document.getElementById("kq-bt4").innerText = `day la tam giac vuong`;
    } else if (a == b && b == c && a == c) {
      document.getElementById("kq-bt4").innerText = `day la tam giac deu`;
    } else if (a == b || a == c || b == c)
      document.getElementById("kq-bt4").innerText = `day la tam giac can`;
    else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    )
      document.getElementById("kq-bt4").innerText = `day la tam giac tu`;
    else document.getElementById("kq-bt4").innerText = `day la tam giac nhon`;
  } else document.getElementById("kq-bt4").innerText = `khong phai la tam giac `;
});
// bai tap 5
document.getElementById("btn-bai5").addEventListener('click',
function()
{
    var day = document.getElementById("txt-ngay").value*1;
    var month = document.getElementById("txt-thang").value*1;
    var year = document.getElementById("txt-nam").value*1;
    if(day == 31 && month != 12)
    {
        month = month+1;
        day = 1;
    }else if(day == 31 && month == 12)
    {
      day = 1;
      month = 1;
      year = year +1;
    } else day = day + 1
      
    
   
    document.getElementById("kq-bai5").innerText = `Ngày ${day}, Tháng ${month}, Năm ${year}`;
   

});
document.getElementById("btn-bai51").addEventListener('click',
function()
{
    var day = document.getElementById("txt-ngay").value*1;
    var month = document.getElementById("txt-thang").value*1;
    var year = document.getElementById("txt-nam").value*1;
 
    if(day == 1 && month != 1)
    {
        month = month - 1;
        day = 31;
    }else if(day == 1  && month == 1)
    {
      day = 31;
      month = 12;
      year = year - 1;
    } else day = day - 1;


  
   
    document.getElementById("kq-bai5").innerText = `Ngày ${day}, Tháng ${month}, Năm ${year}`;
   

});
// bai 6


document.getElementById("btn-bai6").addEventListener('click',function()
{

  
  var thang = document.getElementById("txt-month").value * 1;
  var nam = document.getElementById("txt-year").value * 1;

    	
  function checkYear(nam) {

  return ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0);

}
  
 

  if( thang == 1 || thang == 3 ||thang == 5 || thang == 7  ||thang == 8 || thang == 10 || thang == 12)
  {
    document.getElementById("kq-bt6").innerText = `có 31 ngày`;
   
   
  } else if( thang == 4 || thang == 6 ||thang == 9 || thang == 11 )
  {
    return document.getElementById("kq-bt6").innerText = `có 30 ngày`;
    
   
  }else if (thang == 2 ) 
  {
    if ( checkYear(nam) == true ) 
  {
    return  document.getElementById("kq-bt6").innerText = `có 29 ngày`;

  } else if (checkYear(nam) == false) 
  {
    
    return document.getElementById("kq-bt6").innerText = `có 28 ngày`;
  }

  }
 

});


// bai 7
document.getElementById("btn-bai7").addEventListener('click',function()
{

  var abc = document.getElementById("txt-so").value;
  var a = Math.floor(abc % 10);
  var b =  (Math.floor(abc / 10) ) % 10;
  var c = Math.floor(abc / 100) ;

  document.getElementById("kq-bt7").innerHTML = `${c} ${b} ${a} `;


  

  switch(c){
    case 1:
      {
        console.log(" một trăm");
        document.write("một trăm");
        break;
      } 
    case 2:  {
      console.log(" hai trăm");
      document.write("hai trăm");
      break;
    } 
    case 3:  {
      console.log(" ba trăm");
      document.write(" ba trăm");
      break;
    } 
    case 4: {
      console.log(" bốn trăm");
      document.write("bốn trăm");
      break;
    } 
    case 5:{
      console.log(" năm trăm");
      document.write("năm trăm");
      break;
    } 
    case 6: {
      console.log(" sáu trăm");
      document.write("sáu trăm");
      break;
    } 
    case 7:{
      console.log(" bảy trăm");
      document.write("bảy trăm");
      break;
    } 
    case 8: {
      console.log(" tám trăm");
      document.write("tám trăm");
      break;
    } 
    case 9:{
      console.log(" chín trăm");
      document.write("chín trăm");
      break;
    } 
  }
    //in ra hàng chục
    switch(b){
      case 1: {
        console.log(" mười");
        document.write(" mười mươi");
        break;
      } 
      case 2: {
        console.log(" hai mươi");
        document.write(" hai mươi");
        break;
      } 
      case 3:  {
        console.log(" ba mươi");
        document.write(" ba mươi");
        break;
      } 
      case 4:  {
        console.log(" bốn mươi");
        document.write(" bốn mươi");
        break;
      } 
      case 5:  {
        console.log(" năm mươi");
        document.write(" năm mươi");
        break;
      } 
      case 6: {
        console.log(" sáu mươi");
        document.write(" sáu  mươi");
        break;
      } 
      case 7:  {
        console.log(" bảy mươi");
        document.write(" bảy  mươi");
        break;
      } 
      case 8:  {
        console.log(" tám mươi");
        document.write("tám mươi");
        break;
      } 
      case 9:  {
        console.log(" chín mươi");
        document.write("chín mươi");
  
        break;
      } 
    }
    //in ra hàn đơn vị
    switch(a){
      case 1: {
        console.log(" mốt");
        document.write(" mốt");
  
        break;
      } 
      case 2: {
        console.log(" hai");
        document.write(" hai");
        break;
      } 
      case 3: {
        console.log("ba");
        document.write(" ba");
        break;
      } 
      case 4: {
        console.log(" bốn");
        document.write(" bốn");
        break;
      } 
      case 5: {
        console.log(" lăm");
        document.write(" lăm");
        break;
      } 
      case 6: {
        console.log(" sáu");
        document.write(" sáu");
        break;
      } 
      case 7: {
        console.log(" bảy");
        document.write(" bảy");
        break;
      } 
      case 8: {
        console.log(" tám");
        document.write(" tám");
        break;
      } 
      case 9: {
        console.log(" chín");
        document.write(" chín");

        break;
      } 
    }
    
});

// bai 8
document.getElementById("btn-bai8").addEventListener('click',function()
{
var name1 = document.getElementById("txt-name1").value ;
var name2 = document.getElementById("txt-name2").value ;
var name3 = document.getElementById("txt-name3").value ;
var nx1 = document.getElementById("txt-n1x").value *1 ;
var nx2 = document.getElementById("txt-n2x").value ;
var nx3 = document.getElementById("txt-n3x").value ;
var ny1 = document.getElementById("txt-n1y").value *1 ;
var ny2 = document.getElementById("txt-n2y").value ;
var ny3 = document.getElementById("txt-n3y").value ;
var ty = document.getElementById("txt-ty").value *1;
var tx = document.getElementById("txt-tx").value *1;

// tính khoảng cách
var sinhvien1 = Math.sqrt((tx - nx1)*(tx - nx1) + (ty - ny1)*(ty - ny1));
var sinhvien2 = Math.sqrt((tx - nx2)*(tx - nx2) + (ty - ny2)*(ty - ny2));
var sinhvien3 = Math.sqrt((tx - nx3)*(tx - nx3) + (ty - ny3)*(ty - ny3));

if(sinhvien1 > sinhvien2 && sinhvien1 > sinhvien3)
{
  document.getElementById("kq-bt8").innerHTML = `sinh viên xa nhất: ${name1}`;
}if(sinhvien1 < sinhvien2 && sinhvien2 > sinhvien3)
{
  document.getElementById("kq-bt8").innerHTML = `sinh viên xa nhất: ${name2}`;
}
if(sinhvien3 > sinhvien2 && sinhvien1 < sinhvien3)
{
  document.getElementById("kq-bt8").innerHTML = `sinh viên xa nhất: ${name3}`;
}



 

});
