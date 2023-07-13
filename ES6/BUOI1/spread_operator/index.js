let sv1 = {
    toan: 10,
    van: 9,
};

let sv2 ={...sv1,toan: 5};//shallow clone

// sv2.toan = 5;
console.log("SV1: ",sv1);

// console.log(sv2);
console.log("sv2: ",sv2 );



let dssv=[sv1,sv2];
let sv3 = {
    toan: 3,
    van: 3,
};



//let newDssv =[];
// dssv.forEach((sv)=>
//{
//  new Dssv.push(sv);
//});

let newDssv = [...dssv,sv3];

console.log("newDssv: ",newDssv);
