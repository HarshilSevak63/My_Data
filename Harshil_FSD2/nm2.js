const mg=require('mongoose');
const val=require('validator');

mg.connect('mongodb://localhost:27017/advdb')
.then(()=>console.log('Connection Successful'))
.catch((e)=>console.log('Error',e));

// Design a schema for a table users with following validations
// 1 uname: required, 4-20 char long, start with letter end with digit, no leading or trailing spaces, convert to uppercase
// 2 age: must between 18-65
// 3 password: required, must between 8-16 char, must not have any space
// 4 date: required, default today's date
// 5 email: required, must follow email standered

const sc=new mg.Schema(
    {uname:{
        type:String,
        required:[true,'Fill User name'],
        trim:true,
        match:/^[a-zA-z]+[0-9]+$/,
        minlength:4,
        maxlength:20,
        uppercase:true,
    },
    age:{
        type:Number,
        required:[false,'Fill age'],
        min:18,
        max:65,
    },
    password:{
        type:String,
        required:[true,'Fill password'],
        trim:true,
        match:/\w/,
        minlength:8,
        maxlength:16,
    },
    date:{
        type:Date,
        required:[false,'Fill date'],
        default:new Date(),
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:{validator:(v)=>val.isEmail(v)},
    },
    role:{
        type:String,
    }
}
);

const users=mg.model('users',sc);

const insertData=async ()=>{1
    try{
        const u1=new users({
            uname:'harshil123',age:20,password:'harshil@123',date:'2025-03-01',email:'abc@gmail.com'
        });
      const r=await u1.save();

      console.log(r);
    }
    catch(e){
        console.log(e);
    }
}
insertData();
