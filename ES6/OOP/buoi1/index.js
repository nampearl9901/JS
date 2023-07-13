
//tính chất kế thừa

class Smartphone {
    constructor(name,color, weight)
    {
        this.name=name;
        this.color = color;
        this.weight = weight;
    }
    recording()
    {
        console.log("recording...")
    }
}

class iphone extends Smartphone{
    constructor(name,color, weight,system)
    {
       super(name,color, weight)
       this.system= system;
    }
    useLightning()
    {
        console.log("useLightning...");
    }
    recording()
    {
        super.recording()
        console.log("recording...")
    }
}
class samsung extends Smartphone{}

const Iphone = new iphone('iphone 7', 'black',5000,'sos')
const Samsung = new samsung('SamSung note 7 ', 'pink',400)


console.log(Iphone);

Iphone.recording();
Iphone.useLightning();

console.log(Samsung)


//  tính đóng gói

class Sony extends Smartphone{
    #height = 160
    constructor(name,color, weight,system)
    {
       super(name,color, weight)
       this.system= system;
    }
    showHeight()
    {
        console.log(this.#height)
    }
   #showInfo()
    {
        console.log(this.name +" "+ this.color)
    }
  show()
    {
       this.#showInfo()
    }
}

const sony = new Sony('Sony wh-100', 'yellow', 400, 'Tai Nghe');
sony.showHeight()

sony.show()
console.log(sony)

// tính trừu tượng

class Animal {
    constructor(name, color)
    {
        this.name = name
        this.color = color
    }
    findfood(){}

    eat(){
        const eat1 =  this.findfood()
        console.log('eating '+eat1+'...')
    }
}


class Cat extends Animal
{
    findfood()
    {
        console.log('Bắt Cá, Chuột')
        return'cá, Chuột'
    }
}

class Tiger extends Animal
{
    findfood()
    {
        console.log('Đi Săn thịt')
        return'thịt'
    }
}

const cat =new Cat("mewo" , 'black')
const tiger = new Tiger("tiger", ' yellow')
console.log(cat)
console.log(tiger)

cat.eat()
tiger.eat()

// tính đa hình
class Component{
   constructor()
   {
 
   }
   render()
   {
    throw new Error("Bắt buộc pahir có hàm render!")
  }
}

class Header extends Component{
    render()
    {
        return 
    }
}


const header = new Header()
header.render()



// 


const student =  
{
    name: 'Nam',
    Age: 21,


    childObject:
    {
add: 'HCM',
    },
}


const student1 = {...student}







