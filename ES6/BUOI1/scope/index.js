// phạm vi hoạt động



let username = "alice";
console.log("usernam: ",username);



// var là function scope

var isLogin = true;

function checklogin()
{
    if(isLogin)
    {
        var logintime = "Today";
        
    }
    console.log(logintime);// khong loi
}
// console.log(logintime);// loi

checklogin();




//  let block scope

function checklet()
{
    if(isLogin)
    {
        let logintime = "Today";
        console.log(logintime);// k loi
        
    }
    // console.log(logintime);//  loi
}


checklet();



const totalHoliday = 14;
const holiday = 
{
    total: 14,
};


holiday.total = 15;
