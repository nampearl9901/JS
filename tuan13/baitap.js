// bai 1
function Tinhtien()
{
    var ngaylam = document.getElementById("txt-so-ngay-lam").value * 1;
    var luong1ngay = document.getElementById("txt-luong-1-ngay").value * 1;
   var  tien = ngaylam * luong1ngay;

    document.getElementById("result").innerText =`Tiền Lương ${ngaylam.toLocaleString()} ngày Làm Của Nhân Viên : ${tien.toLocaleString()} VND`;

}
// bai 2
function Tinhtong()
{
    var giatri1 = document.getElementById("txt-number1").value * 1;
    var giatri2 = document.getElementById("txt-number2").value * 1;
    var giatri3 = document.getElementById("txt-number3").value * 1;
    var giatri4 = document.getElementById("txt-number4").value * 1;
    var giatri5 = document.getElementById("txt-number5").value * 1;
  var tong = (giatri1 + giatri2 +giatri3 +giatri4 +giatri5) / 5 ;

    document.getElementById("trungbinh").innerText =`Tổng trung bình  :${tong.toLocaleString()}`;

}
// bai 3
function quydoi()
{
    var usd = document.getElementById("txt-usd").value * 1;   
    var vnd = document.getElementById("txt-vnd").value * 1; 
  var quydoi = usd * vnd ;

    document.getElementById("doitien").innerText =`${usd.toLocaleString()} USD = ${quydoi.toLocaleString()}VND`;

}
// bai 4
function dientich()
{
    var dai = document.getElementById("txt-chieudai").value * 1;   
    var rong = document.getElementById("txt-chieurong").value * 1; 
  var dientich = dai * rong; ;
  

    document.getElementById("dientich").innerText =`Diện Tích Hình chữ Nhật = ${dientich.toLocaleString()}`;
   
}
function chuvi()
{
    var dai = document.getElementById("txt-chieudai").value * 1;   
    var rong = document.getElementById("txt-chieurong").value * 1; 
 
  var chuvi = (dai + rong )*2;

    document.getElementById("chuvi").innerText =`Chu Vi Hình chữ Nhật = ${chuvi.toLocaleString()}`;
    
}
// bai 5
function tongkyso()
{
    var haichuso = document.getElementById("txt-haichuso").value * 1;   
    
 
  var tinhkyso =  (haichuso %10) +(haichuso/10) ;

    document.getElementById("ketqua").innerText =`Tổng hai chữ số ${haichuso.toLocaleString()} = ${Math.floor(tinhkyso).toLocaleString()}`;
}