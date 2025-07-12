const express=require('express');
const app=express();
app.use(express.json());


const val=require('validator');

const mg=require('mongoose');
mg.connect('mongodb://localhost:27017/edb')
.then(()=>console.log('Connection Successfull'))
.catch((e)=>console.log('Error: ',e));

const sc=mg.Schema({
    uname:
    {
        type:String,
        minlength:3,
        maxlength:15,
        required:true,
        unique:true,
        match:/^[A-Za-z]+[0-9]+$/,
    },
    phone:
    {
        type:String,
        required:true,
        unique:true,
        match:/^\d{10}$/,
    },
    email:
    {
        type:String,
        required:true,
        validate:{validator:(v)=>val.isEmail(v)},
    },
    dob:
    {
        type:Date,
        default: new Date('2007-01-01T00:00:00Z'),
    },
    role:
    {
        type:String,
        default:'customer',
    },

});

const users=mg.model('users',sc);

app.use(express.static((__dirname),{index:'emform.html'}));
app.use(express.urlencoded({extended:true}));

app.post('/signup',async (req,res)=>{
    try{
    var u1=new users({
        uname:req.body.uname,
        phone:req.body.phone,
        email:req.body.email,
        dob:req.body.dob,
        role:req.body.role,

    });
    var r=await u1.save();

    // var u=req.body.uname;
    // var r=await users.insertOne({uname:u});
    res.send(JSON.stringify(r)+' user created successfully');
    }
    catch(e){
        res.status(404).send('Data not saved '+e);
    }
});

app.get('/users', async (req, res) => {
    try {
        const r = await users.find({});
        let table = `<table border="1">
        <tr>
            <th>uname</th>
            <th>phone</th>
            <th>email</th>
            <th>Dob</th>
            <th>role</th>
        </tr>`;

        r.forEach((v) => {
            table += `<tr>
                <td>${v.uname}</td>
                <td>${v.phone ?? 'N/A'}</td>
                <td>${v.email ?? 'N/A'}</td>
                <td>${v.dob ?? 'N/A'}</td>
                <td>${v.role}</td>
            </tr>`;
        });

        table += `</table>`;
        res.send(table);
    } catch (e) {
        res.status(500).send('Error fetching users: ' + e.message);
    }
});


app.listen(5000,()=>console.log('Server running on Port 5000 http://localhost:5000/'));