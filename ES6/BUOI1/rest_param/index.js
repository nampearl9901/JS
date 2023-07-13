let showthongtincl = (listthongtin)=>
{
    console.log("listthongtin: ",listthongtin);

};

let showthongtin = (ten, tuoi,...thongtincl)=>
{
    console.log(ten, tuoi, thongtincl);
    showthongtincl(thongtincl);
};

showthongtin("Nam", 2,"Sai Gon","Viet Nam","female");