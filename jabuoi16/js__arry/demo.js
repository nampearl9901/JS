// primitive value ~ pas by value ~ string ,boolean

// reference value ~ pass by reference ~ object , array


var arrSdt = ["123", "456", "678", true , false];
// console.log("arrSdt: ", arrSdt);
// console,log(arrSdt[1]);



var menu = ["bún bò huế","bún riêu"];
var tongMonAn = menu.length;
console.log("tongMonAn: ", tongMonAn);


// update giá trị của 1 phần tử
menu[1] = "bánh canh cua";
console.log("menu", menu);

// duyệt mảng

for(var index = 0; index < menu.length; index++)
{
    console.log("item", menu[index]);

}

menu.forEach(function(item)
{
    console.log("item foreach", item);
});


// callback
function sayhello(callback, name)
{
    console.log("Hi you");
    callback(name);
}

function sayGoodbye(callback, name)
{
    console.log("bye bye");
    callback(name);
}

sayhello(function (name)
{
    console.log("I am" + name);
},"Alice");

sayGoodbye(function(name)
{
    console.log("I am"+ name);
},"Alice");


// push pop: add remove

// thêm cuối
menu.push("Cơm Tấm");
menu.push("sườn bò chả");
console.log("menu:", menu);

//xóa item cuối cùng
menu.pop();
console.log("menu: ",menu);

//unshift shift
menu.unshift("Phở Khô Gia Lai");
menu.shift();
console.log("menu: ",menu);

var vitriComtam = menu.indexOf("Cơm Tấm");
menu.splice(vitriComtam,1);
console.log("vitricopmtam: ",vitriComtam);

console.log("menu", menu);
menu[vitriComtam] = "cơm trắng";
console.log("menu:", menu);

// slice (start, end) : copy các phần tử từ 1 array sang 1 ary mới 
 var lettes = ["a", "b", "c", "d"];
 var coppyarr = lettes.slice(0,2);
 console.log("coppyarr: ", coppyarr);
 console.log("lettes: ",lettes);
 console.log(`
 
 
 
 `)

// splice (start, end ): cut các phần tử từ araay sang 1 aray mới

var coppyarr1 = lettes.splice(0,2);
console.log("coppyarr: ", coppyarr1);
console.log("lettes: ",lettes);

