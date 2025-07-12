const mg=require('mongoose');
mg.connect('mongodb://localhost:27017/advdb')
.then(()=>console.log('Connection Successful'))
.catch((e)=>console.log('Error',e));

const sc=new mg.Schema({fname:String,lname:String,age:Number,passed:Boolean});

mg.pluralize(null);
const student= mg.model('student',sc);

// Insert one
const insertData=async ()=>{1
    try{
        const s1=new student({
            fname:'Jhon',lname:'Wick',age:30,passed:false
        });
      const r=await s1.save();

      console.log(r);
    }
    catch(e){
        console.log(e);
    }
}

// insertData();

const r=[];
// Insert Many
const insertManyStudents = async (name) => {
  try {
    const students = [
      { fname: 'Alice', lname: 'Smith', age: 22, passed: true },
      { fname: 'Bob', lname: 'Brown', age: 25, passed: false },
      { fname: 'Charlie', lname: 'Johnson', age: 23, passed: true },
      { fname: 'David', lname: 'Lee', age: 28, passed: false }
    ];

    const result = await student.insertMany(students);
    console.log('Inserted Documents:', result);
  } catch (e) {
    console.log('Error inserting many:', e);
  }
};

// insertManyStudents({fname:{$ne:null}});

// update using id

const updateDoc=async (id,update)=>{
    try{
        const u=await student.findByIdAndUpdate(id,update);
        console.log('Updated'+u);
    }
    catch(e){
        console.log('Error in updating:', e);
    }
};

// updateDoc('686de1d4d6595b794fb02d68',{fname:'test'});


// delete using ID

const deleteDoc=async (id)=>{
    try{
        const u=await student.findByIdAndDelete(id);
        console.log('Deleted'+u);
    }
    catch(e){
        console.log('Error in deleting:', e);
    }
};

// deleteDoc('686de1d4d6595b794fb02d68');

// Update custom

const updateData=async (age,val)=>{
    try{
        const uc=await student.updateOne({age},val);
        console.log('Update'+uc);

    }
    catch(e){
        console.log('Error in updating:', e);
    }
};

// updateData(22,{age:54});


const updateMany=async (col,val)=>{
    try{
        const uc=await student.updateMany(col,val);
        console.log('Update'+uc);

    }
    catch(e){
        console.log('Error in updating:', e);
    }
};

// updateMany({age:{$ne:null}},{age:25});

// Task

const deleteOne=async (fname)=>{
    try{
    const d=await student.deleteOne({fname});
    console.log('Deleted'+d);
    }
    catch(e){
        console.log('Error in deleting:', e);
    }
};

// deleteOne('Alice');


const findAll=async (name)=>{
    try{
    const fo=await student.find(name);
    r.push(await student.find(name));
    console.log('Deleted'+fo);
    console.log(r);
    }
    catch(e){
        console.log('Error in deleting:', e);
    }
};

findAll({fname:{$ne:null}});