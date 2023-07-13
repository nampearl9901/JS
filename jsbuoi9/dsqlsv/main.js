var dssv = [];

var DSSV = "DSSV";

let dssvlocal = localStorage.getItem("DSSV");
console.log("dssv: ", JSON.parse(dssvlocal));

if(JSON.pars(dssvlocal))
{
  dssv = JSON.parse(dssvlocal);
  renderDanhSachSinhVien(dssv);

}

function savelocalstorage()
{
   
  var dssvjson = JSON.stringify(dssv);
  console.log("dssvjson: ",dssvjson);


// lưu xuống bộ nhớ
  localStorage.setItem("DSSV" , dssvjson);

}



function themSV() {
  var newSV = layThongTinTuForm();
  console.log("newSV: ", newSV);
  dssv.push(newSV);
  console.log("dssv: ", dssv);

  //convert arry thanh json

  savelocalstorage()

  // xuất danh sách
  renderDanhSachSinhVien(dssv);
}

function xoaSV(id)
{
  
  var index = timkiemvitri(id, dssv);
  console.log("index: ", index);
  if (index !==-1)
  {
    console.log("before", dssv.length);
    dssv.splice(index,1);
    savelocalstorage()
    renderDanhSachSinhVien(dssv); 
  
  }
}


function suasv(id)
{
  var index = timkiemvitri(id,dssv);
  console.log("index: ",index);

  if(index!==-1)
  {
    var sv = dssv[index];
    savelocalstorage();  

    showThongTinLenForm(sv);
    
  }
}


function capnhapsv()
{
  var svEdited = layThongTinTuForm();
  console.log("svEdited: ",svEdited);

  let index = timkiemvitri(svEdited.ma,dssv);

  if(index!= -1)
  {
    dssv[index] = svEdited;
    savelocalstorage();   
    renderDanhSachSinhVien(dssv);
  }

}