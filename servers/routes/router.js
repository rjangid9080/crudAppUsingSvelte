const express = require('express');
const router = express.Router();
const usersData = require('../model/model');

router.get('/api/users',(req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        usersData.findById(id).then(data=>{
            if(!data){
                res.status(404).send({message:`User not found with id = ${id}`})
            }else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:`Error occured while rertriving user with id=${id} `})
        })

    }else{
        usersData.find().then(user=>{
            res.send(user)
        }).catch(err=>{
            res.status(500).send({message:err.message || "Error Occurred while retriving user information"})
        })
    }
   
})

router.post('/api/users',(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Cannot be empty"})
        return;
    }
    //new user 
    const user = new usersData({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    //save user to the database
    user.save(user).then(data=>{
        console.log(data.json())
    }).catch(err=>{
        res.status(500).send({message:err.message || "Some error occured while creating operation"})
    })
    
})

router.delete('/api/users/:id',(req,res)=>{
    const id = req.params.id;
    usersData.findByIdAndDelete(id).then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot delelte with the ${id}.Maybe id is wrong`});
        }
        else{
            res.send({message:"User deleted successfully !..."});
        }
    }).catch(err=>{
        res.status(500).send({message:`Could not delete User with id=${id}`});
    })
})

router.put('/api/users/:id',(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Data to update not be empty"})
    }
    const id = req.params.id;
    console.log(req.body);
    usersData.findByIdAndUpdate(id,req.body,{new :true})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found !`})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:"Error update user information"})
    })
})

module.exports = router ;