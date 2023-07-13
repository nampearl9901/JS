function inKetQua()
{
    var maSV = document.getElementById("txtMaSV").value;
    var tenSV = document.getElementById("txtTenSV").value;
    var loaiSV = document.getElementById("loaiSV").value;
    var diemtoan = document.getElementById("txtDiemToan").value*1;
    var diemvan = document.getElementById("txtDiemVan").value*1;

    var user = 
    {
        ma: maSV,
        ten: tenSV,
        loai: loaiSV,


        diemtoan: diemtoan,
        diemvan : diemvan,
        tinhDTB: function()
        {
            if(diemtoan < 0 || diemtoan > 10 || diemvan < 0 || diemvan > 10)
            {
                return " Điểm Không Hợp Lệ!";
            }
            return(this.diemtoan + this.diemvan)/2;
        },
        xepLoai: function()
        {
            if (this.tinhDTB()>=5)
            {
                return "Đạt!";
            } else{
                return "Không Đạt!";
            }
        },
    };


    document.getElementById("spanTenSV").innerHTML=user.ten;
    document.getElementById("spanMaSV").innerHTML=user.ma;
    document.getElementById("spanLoaiSV").innerHTML=user.loai;
    document.getElementById("spanDTB").innerHTML=user.tinhDTB();
    document.getElementById("spanXepLoai").innerHTML=user.xepLoai();

}