count = 0;
for (var i = 0; i < 3; i++)
{
    console.log("i:", i );
    count++;
    for(var j =0; j < 3; j++)
    {
        console.log("j: ",j);
       
        count++;
    }
}
console.log("count: ", count);


document.querySelector(".title").style.color= "red";

var titleList = document.querySelectorAll(".title");
console.log("titleList ", titleList);

titleList[0].style.color="blue";