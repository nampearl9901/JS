// function dog(name, age, gender)
// {
//     this.age = age;
//     this.name = name;
//     this.gender=gender;
// }

// let bull = doc("bun", 2,"male" );
// console.log("dog",bull);

// class cat{
//     constructor (name, age, gender)
// {
//     this.age = age;
//     this.name = name;
//     this.gender=gender;
// }


// }

// let meo = new Cat("meo", 3 ,"male");
// console(meo);


// import{username,gerden} from"./controllers.js";
// import tuoi from"./controllers.js";

// console.log("tuoi: ",tuoi);
import {laythongtintuform, showthongtinlenfrom} from"./controllers.js";
import {monan} from"../../models/v1/monan.mode.v1.js";

function Themmon()
{
      let { foodID,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa} =  laythongtintuform();

      let monAn = new monan(foodID,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa);
      console.log(monAn);

      showthongtinlenfrom(monAn);
      console.log("monAn: ",monAn);
}

window.Themmon = Themmon;