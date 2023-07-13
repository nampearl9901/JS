export let renderdanhsach=(list)=>
{
    let contentHTML = "";
    list.forEach((monAn) => {
        let contentTr=
        `<tr>
            <td>${monAn.id}</td>
            <td>${monAn.ten}</td>
            <td>${monAn.loai}</td>
            <td>${monAn.gia}</td>
            <td>${monAn.khuyenmai}</td>
            <td>0</td>
            <td>${monAn.tinhtrang ? "con" : "het"}</td>
            <button onclick="suamonan(${monAn.id}) " class="btn btn-outline-warning">Sua</button>
            <button onclick="xoamonan(${monAn.id}
                )" class="btn btn-outline-warning">xoa</button>

        </tr>
        `;
        contentHTML += contentTr;

        document.getElementById("tbodyFood").innerHTML = contentHTML;
    });
}


export let laythongtintuform = ()=>
{
    const foodID = document.getElementById("foodID").value;
    const tenMon = document.getElementById("tenMon").value;
    const loai = document.getElementById("loai").value !== "loai1" ? true : false;
    const giaMon= document.getElementById("giaMon").value;
    const khuyenMai = document.getElementById("khuyenMai").value;
    const tinhTrang = document.getElementById("tinhTrang").value !== "0" ? true :false;
    const hinhMon = document.getElementById("hinhMon").value;
    const moTa = document.getElementById("moTa").value;

    
    return{
        foodID,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa,
    
    };
};