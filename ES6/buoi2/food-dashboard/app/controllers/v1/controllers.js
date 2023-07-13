// export let username="alice";
// export let gerden="male";

// let age = 2;

// export default age;


export let laythongtintuform= () =>{
    const foodID = document.getElementById("foodID").value;
    const tenMon = document.getElementById("tenMon").value;
    const loai = document.getElementById("loai").value;

    const giaMon= document.getElementById("giaMon").value;
    const khuyenMai = document.getElementById("khuyenMai").value;
    const tinhTrang = document.getElementById("tinhTrang").value;
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

export let  showthongtinlenfrom=(monAn)=>{let {foodID,
    tenMon,
    loai,
    giaMon,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa,
} = monAn;

        document.getElementById("spMa").innerText=foodID;
        document.getElementById("spTenMon").innerText=tenMon;
        document.getElementById("spLoaiMon").innerText=
        loai== "loai"? "chay": "Man";
        document.getElementById("spGia").innerText=giaMon;
        document.getElementById("spKM").innerText=`${khuyenMai}%`;
        document.getElementById("spGiaKM").innerText= monAn.tinhgiakm();
        document.getElementById("spTT").innerText=tinhTrang;
        document.getElementById("hinhMon").innerText=hinhMon;
        document.getElementById("pMoTa").innerText= moTa;

    

};

