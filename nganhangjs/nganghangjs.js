//case 1 ; mượn 10 tr , trả 5tr. phat 75 nghìn
//case 2: mượn 10tr trả 20tr,phạt 0 nghìn


function thanhtoantien()
{
    var tienmuon = document.getElementById("nhaptien").value * 1;
    var tientra = document.getElementById("thanhtoan").value * 1;
  
var tienphat = (tienmuon - tientra) *0.015;
    if(tienphat > 0)
    {
        document.getElementById("result").innerText =`Tiền Phạt : ${tienphat.toLocaleString()} VND`;
    }else
    {
        document.getElementById("result").innerText =`Tiền Phạt : 0VND`;
    }

}