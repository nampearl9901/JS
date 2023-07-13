let username = "alice";

let age = 2;



let sv = {
    username,
    age,
};
console.log({username,age });
console.log('sv:',sv);



let user = 
{
    account: "alice",
    address:
    {
        number: 111,
        street: "PVD",
        district: "Thu Duc",
    },

  
};

let {account, address} = user;
console.log("address: ",address);
console.log("account: ",account);








let {number,street} = address;

let colors = ["red", "green","yellow","black"];

let [downTrend, upTrend, ...rest] = [...colors,"blue"];

console.log("rest",rest);

console.log("downtrent: ",downTrend);






function dog(name, age, gender)
{
    this.age = age;
    this.name = name;
    this.gender=gender;
}

let bull = dog("bun", 2,"male" );
console.log("dog",bull);

class cat{
    constructor (name, age, gender)
{
    this.age = age;
    this.name = name;
    this.gender=gender;
}


}

let meo = new Cat("meo", 3 ,"male");
console(meo);
