const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');

router.post('/register',(req,res) => {
     const {fname,lname,email,phonenumber,age,bloodgroup,dob,address,country,state,city,aadhaar,password} = req.body;
     const newPatient = new Patient({fname,lname,email,phonenumber,age,bloodgroup,dob,address,country,state,city,aadhaar,password});
     try {
        newPatient.save();
        res.status(200).json({
            success : true,
            message : 'Register Success'
        });
     } catch (error) {
        res.status(400).json({
             message : error
        });
     }
});

router.post('/login', async (req,res) => {
   const {email,password} = req.body;
   try {
       const patient = await Patient.find({email,password});
       if(patient.length > 0){
          const currentPatient = {
            fname : patient[0].fname,
            lname : patient[0].lname,
            email : patient[0].email,
            _id : patient[0]._id
          }
          res.status(200).send(currentPatient);
       }else{
         res.status(400).json({
            message : 'Login Failed'
         })
       }
   } catch (error) {
      res.status(404).json({
         message : 'Something Went Wrong'
      })
   }
});

router.get('/getallpatients', async (req,res) => {
   try {
    const patients = await Patient.find({});
   res.status(200).send(patients);
   } catch (error) {
    res.status(404).json({message : error.stack});
   }
});

router.post('/deletepatient', async (req,res) => {
 const patientid = req.body.patientid;
 try {
    await Patient.findOneAndDelete({_id : patientid});
    res.status(200).send('Patient Deleted Successfully');
 } catch (error) {
    res.status(404).json({message : error.stack});
 }
});


module.exports = router;