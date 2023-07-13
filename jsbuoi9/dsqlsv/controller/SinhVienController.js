function layThongTinTuForm() {
    var maSV = document.getElementById("txtMaSV").value;
    var tenSV = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var matKhau = document.getElementById("txtPass").value;
    var diemToan = document.getElementById("txtDiemToan").value;
    var diemLy = document.getElementById("txtDiemLy").value;
    var diemHoa = document.getElementById("txtDiemHoa").value;
  
    return {
      ma: maSV,
      ten: tenSV,
      email: email,
      matKhau: matKhau,
      diemToan: diemToan,
      diemLy: diemLy,
      diemHoa: diemHoa,
    };
  }
  function renderDanhSachSinhVien(list) {
    var contentHTMl = "";
  
    list.forEach(function (item) {
      var content = `<tr>
     <td>${item.ma}</td>
     <td>${item.ten}</td>
     <td>${item.email}</td>
     <td>0</td>
     <td>
     <button class="btn btn-danger" onclick="xoaSV('${item.ma}')">Xóa</button>
     <button class="btn btn-warning" onclick="suasv('${item.ma}')" >Sửa</button>
     
     </td>
     </tr>`;
      contentHTMl += content;
    });
  
    document.getElementById("tbodySinhVien").innerHTML = contentHTMl;
  }



  

  function timkiemvitri(id,arr)
  {
    // for(var index = 0; index < arr.length; index++)
    // {
    //   var sv = arr[index];
    //   if(sv.ma ==id)
    //   {
    //     return index;

    //   }

    // }
    // return -1;

    return arr.fideIndex(function(sv){
      return sv.ma == id;
    });

  }

  function showThongTinLenForm(sv)
  {
     document.getElementById("txtMaSV").value = sv.ma;
     document.getElementById("txtTenSV").value = sv.ten;
      document.getElementById("txtEmail").value = sv.email;
     document.getElementById("txtPass").value = sv.matKhau;
   document.getElementById("txtDiemToan").value = sv.diemToan;
   document.getElementById("txtDiemLy").value = sv.diemLy;
    document.getElementById("txtDiemHoa").value = sv.diemHoa;
  
  }