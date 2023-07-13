let diemtb = (toan,van,anh=0) =>
{
    return (toan + van+ anh)/3;
}

let dtb1 = diemtb(2,4,9);
let dtb2 = diemtb(10,10,2);
let dtb3 = diemtb(6,9);


console.log("Điểm trung Bình: ",dtb1);

console.log("Điểm trung Bình: ",dtb2);

console.log("Điểm trung Bình: ",dtb3);

let renderthongbao=(islogin,onsucces=()=>{},onfail=()=>{})=>
{

    if(islogin)
    {
        console.log("Thành công");
        onsucces();
    }else{
        onfail();
    }

}


let redersucces = ()=>
{
    console.log("Đăng nhập Thành công");
};

let rederfail =()=>
{
    console.log("Đăng nhập thất bại");
};

renderthongbao(true,redersucces);