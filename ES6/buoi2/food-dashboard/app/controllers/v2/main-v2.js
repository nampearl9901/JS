import { monanv2 } from "../../models/v2/monan.mode.v2.js";
import { laythongtintuform, renderdanhsach } from "../v2/controller.v2.js";


const base_url = "https://62f8b7673eab3503d1da1710.mockapi.io"

let rendertable = ()=>
{
    axios({
        url:`${base_url}/food`,
        method:"GET",

    })
    .then((res)=>{
        console.log(res);
        renderdanhsach(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
};

rendertable();


document.getElementById("btnThemMon").addEventListener('click', ()=>{
    let data = laythongtintuform();

    let monAn = new monanv2(data.tenMon,data.loai,data.giaMon,data.khuyenMai, data.tinhTrang,data.hinhMon,data.moTa,data.foodID);
    
   
   
    axios({
        url:`${base_url}/food`,
        method:"POST",
        data:monAn,

    })
    .then((res)=>{
        console.log(res);
        $("#exampleModal").modal("hide");
        rendertable();
       
    })
    .catch((err)=>{
     
    });
});




function suamonan()
{

}
window.suamonan=suamonan;
function xoamonan()
{

}
window.xoamonan= xoamonan;


