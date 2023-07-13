 //object ~ pass by reference

 var dog1 = {
        name: "bull",
        // keyy value
        age: 2,
        ismarried: true,
        child: 
        {
            name: "mum",
            age:2,
            ismarryied: false,
        },
        bank: function () {
            console.log("meo meo");
            
         },


 };

 console.log("berfore",dog1.name);
 

 dog1.name ="meo";
 console.log("after",dog1.name);


dog1.bank();


var dog2 = dog1;
dog2.name = "alice";

// dynamic name

var key = "age";
dog2[key] = "alice";

console .log("dog1.name",dog1.name);
const username = "alice";

const user = 
{
    username: "alice",
};
user.username = "bob";