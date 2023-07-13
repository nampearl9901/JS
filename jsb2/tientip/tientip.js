function tinhtientip()
{
    var tongtienvalue = document.getElementById("txt-tong-tien").value * 1;
    var songuoiValue = document.getElementById("txt-so-nguoi").value * 1;

    
    const phantramtipValue = document.getElementById("txt-phan-tram").value * 1;
   
    var result = (tongtienvalue * phantramtipValue)/songuoiValue;
    console.log('tong tien tip',result);
    document.getElementById("result").innerHTML =`Số Tiền bạn Phải Trả ${result} VND`

}
