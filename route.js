const express = require("express");
const app = express();

app.use(express.json());

let student = {
    id: 1,
    name: "Rohan",
    rollno: 20,
    email: "abc@gmail.com",
    course: "BCA"
};

//GET(Display)
app.get("/student", (req, res)=>{
    res.send(student);
});

//POST(Insert)
app.post("/student",(req,res)=>{
    student={...student,...req.body}
    res.send("S")
}
//DELETE
app.delete("/student",(req,res)=>{
    student={};
    res.send
})
])