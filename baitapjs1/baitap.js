/*bài tập 1
 Tính tiền lương nhân viên
yêu cầu  viết chương trình tính lương nhân viên
lương ngày 1 100.000
cho người nhập vào số ngày làm 
công thức tính luong lương 1 ngày * sô ngày làm
*/

var luong1ngay = 100000;
var songaytlam = 50;
var tong=null;
tong = luong1ngay * songaytlam;

console.log('Luong cua ban la =', tong, 'VND');
/*
bài 2
tính giá trị trung bình
cho 5 số thực bất kì
tính trung bình 5 giá trị ấy
tính = giá trị (1 + 2+ 3+ 4+5 )/5
*/
var giatri1 = 1;
var giatri2 = 6;
var giatri3 = 3;
var giatri4 = 2;
var giatri5 = 8;

var trungbing=null;
trungbinh = (giatri1 + giatri2 + giatri3 + giatri4 + giatri5) / 5;

console.log('trung binh =', trungbinh);

/*
bai tap 3
quy doi tien 
usd = 23,500 vnd
doi tien tu usd sang vnd
cong thuc tinh
chuyen doi 3 usd sang vnd = 23.500 * 3 => 70,500vnd
*/
var usd = 6;
var VND = null;
VND = 6 * 23.500;

console.log(usd,'usd =', VND, 'vnd');
/*
bai tap 4
tinh dien tich và chu vi hinh chu nhat 
dien tich = dai * rong
chu vi bang (dai +rong )*2
*/
var dai = 5;
var rong=7;
var dientich = null;
var chuvi = null;
dientich = dai * rong;
console.log('Dien tich hinh chu nhat = ',dientich);
chuvi = (dai + rong )*2

console.log('chu vi hinh chu nhat = ',chuvi);

/*
bai tap 5
tong cua 2 ky so
chon 1 so co hai chu so 
tong của 2 chữ so vừa nhập
ví dụ 23 = 2+3 =5
23
cong thuc
2kyso = (20 *0.1) +( 3)
*/
var so = 20  ;

var tong = null;
tong = (so % 10) + (so / 10) ;
console.log('tong hai ky so = ',tong );