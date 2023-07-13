function tinhtien()
{
    var soluong = +document.getElementById("txt-so-luong").value ;
    var dongia = document.getElementById("txt-don-gia").value;
     var ketqua = 0
    
    if( soluong < 50)
    {
        ketqua = soluong * dongia; 

    }else if( 50 <= soluong && soluong <= 100)
    {
        ketqua = 49 * dongia + (soluong - 49 ) * dongia * 0.92;
    } else 
    {
        ketqua = 100 * dongia + (soluong - 100 )* dongia * 0.88;
    }
    document.getElementById("result").innerText =` Số tiền của bạn là: ${ketqua.toLocaleString()} VND`;


}