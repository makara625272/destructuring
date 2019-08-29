// // we have an array with the name and surname
// let arr = ["Ilya", "Kantor"]

// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // Ilya
// alert(surname);  // Kantor

class person{
    constructor(name,age,province){
        this.mName = name; // keyword this to identify mName.
        this.mAge = age;
        this.mProvince = province;
    }
}

// object 
const person1 = new person("romdul", 24, "Siemreap");
console.log(person1);

class Computer{
    constructor(brand,price){
        this.mBrand = brand;
        this.mPrice = price;
    }
}
const c = new Computer("MSI", 1000 + "$");
console.log(c);