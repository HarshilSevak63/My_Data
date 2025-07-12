const { default: mongoose } = require('mongoose');
const mg=require('mongoose');

mg.connect('mongodb://localhost:27017/advdb')
.then(()=>console.log('Connection Successful'))
.catch((e)=>console.log('Error',e));


const sc=new mg.Schema({
    name:String,category:String,price:Number,stock:Number,ratings:[Number],isFeatured:Boolean,
});

const Product=mongoose.model('Products',sc);

const r=[];

 async function op(){
    try{
        r.push(await Product.insertMany([
            { name: "iPhone 14", category: "Electronics", price: 999, stock: 50, ratings: [4, 5, 5], isFeatured: true },
            { name: "Samsung TV", category: "Electronics", price: 1499, stock: 30, ratings: [5, 4], isFeatured: false },
            { name: "Nike Shoes", category: "Footwear", price: 199, stock: 100, ratings: [3, 4, 4], isFeatured: false },
            { name: "Dell Laptop", category: "Electronics", price: 1299, stock: 25, ratings: [5, 5, 5], isFeatured: true },
            { name: "Wooden Chair", category: "Furniture", price: 89, stock: 0, ratings: [4], isFeatured: false },
            { name: "T-shirt", category: "Clothing", price: 29, stock: 200, ratings: [3, 3, 4], isFeatured: true },
            { name: "Coffee Maker", category: "Appliances", price: 99, stock: 10, ratings: [5, 5], isFeatured: false },
            { name: "Bookshelf", category: "Furniture", price: 150, stock: 5, ratings: [4, 4], isFeatured: false }
        ]));
        r.push(await Product.find({category:'Electronics'},{name:1,price:1,_id:0}));
        r.push(await Product.updateMany({stock:0},{isFeatured:false}));
        r.push(await Product.deleteMany({category:'Clothing',price:{$lt:50}}));
        // r.push(await Product.find().sort({$avg:{ratings:-1}}).limit(2));

        console.log(r);
    }
    catch(e){
        console.log('Error in Inserting',e);
    }
};

op();



