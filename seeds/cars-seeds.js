const { Cars } = require('../models');

const carsData = [

{
Make: "Mercedes",
Model: "cla250",
Year: 2017,
Color: "Silver",
Mileage: 80000,
Sold: 23000,
Image:"https://www.perfectautocollection.com/imagetag/85/main/l/Used-2017-Mercedes-Benz-CLA-CLA-250-4MATIC.jpg",
Type: "Gas"
},
{
Make: "Toyota",
Model: "Prius",
Year: 2010,
Color: "Red",
Mileage: 80000,
Sold: 13000,
Image:"https://tse1.mm.bing.net/th?id=OIP.p-K1r-twipaa7V7t9VgfIAHaE8&pid=Api&P=0",
Type: "Hybrid"
},
{
Make: "Tesla",
Model: "Model Y",
Year: 2022,
Color: "Blue",
Mileage: 15000,
Sold: 50000,
Image:"https://i.ytimg.com/vi/R8OVlZ6Yw3U/maxresdefault.jpg",
Type: "Electric"
},
{
Make: "GMC",
Model: "Sierra",
Year: 2006,
Color: "Black",
Mileage: 128000,
Sold: 34000,
Image: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/339118822_955860158761202_8544534901188319138_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=843cd7&_nc_ohc=zFgN9Q8usVcAX_2Qz15&_nc_ht=scontent-sea1-1.xx&oh=00_AfB_iyfyfFQOQbqLxq2f89pVgKBDwOZ1XVKF5bMs21qnhQ&oe=6436EE18",
Type: "Diesel"
},
];

const seedCars = () => Cars.bulkCreate(carsData);

module.exports = seedProducts;