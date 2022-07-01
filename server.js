import express from 'express';
import { MongoClient } from 'mongodb';
import {ObjectId} from 'mongodb';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// import allcitiesstates from 'indian-cities-database';
// let data = allcitiesstates.cities;


// const MONGO_URL = "mongodb://localhost";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;


async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("***Connected to Mongo DB***");
    return client;
}


const client = await createConnection();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

// let ress=client.db("capstone").collection("cities").insertMany(data);
// console.log(ress);

// app.post("/addMovies",async function(req,res){
//     let data = req.body;
//     let result = await client.db("capstone").collection("movies").insertMany(data);
//     res.send(result);
// })

app.get("/getCities",async function(req,res){
    let result = await client.db("capstone").collection("cities").find({}).toArray();
    res.send(result);
})

app.get("/",function(req,res){
    res.send("Hi this is express");
})

app.get("/getMovies", async function(req,res){
    let result = await client.db("capstone").collection("movies").find({}).toArray();
    res.send(result);
})

app.get("/movies/:id", async function(req,res){
    let {id} = req.params;
    let result = await client.db("capstone").collection("movies").findOne({_id:ObjectId(id)});
    res.send(result);
})

app.post("/addUser", async function(req,res){
    let newUser = req.body;
    const password = newUser.password;
    const hashedPass = await generatePassword(password);
    newUser.password = hashedPass;
    let result = await client.db("capstone").collection("userAccounts").insertOne(newUser);
    result.acknowledged ? res.send({showModal:true}) : res.send({showModal:false});
})

app.post("/login", async function(req,res){
    let ress = req.body;
    let userName = ress.userName;
    let loginPassword = ress.loginPassword;
   
    let findUser = await client.db("capstone").collection("userAccounts").findOne({emailId:userName});
    if(findUser){
        let storedPassword = findUser.password;
        let checkPassword = await bcrypt.compare(loginPassword,storedPassword);
        checkPassword ? res.send({authentication:"success"}) : res.send({authentication:"Wrong Password"});
    }
    else{
        res.send({authentication:"Invalid Credentials"});
    }
})

app.listen(PORT, function(error){
    if(error){
        console.log(`Error in running app - ${error}`);
    }
    else{
        console.log(`App is running on port ${PORT}`);
    }
})


async function generatePassword(password){
    const saltValue = await bcrypt.genSalt(5);
    const hashedPassword  = await bcrypt.hash(password,saltValue);
    return hashedPassword;
}