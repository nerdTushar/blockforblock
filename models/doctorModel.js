const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    fname : {
        type : String,
        required : [true,'First Name Is Required']
    },
    lname : {
        type : String,
        required : [true,'Last Name Is Required']
    },
    email : {
        type : String,
        required : [true,'Email Is Required']
    },
    phonenumber : {
        type : Number,
        required : [true,'Phone Number Is Required']
    },
    age : {
        type : Number,
        required : [true,'Age Is Required']
    },
    bloodgroup : {
        type : String,
        required : [true,'Blood Group Is Required']
    },
    dob : {
        type : Number,
        required : [true,'Date Of Birth Is Required']
    },
    specialization : {
        type : String,
        required : [true,'Specialization Is Required']
    },
    workplace : {
        type : String,
        required : [true,'Work Place Is Required']
    },
    qualification : {
        type : String,
        required : [true,'Qualification Is Required']
    },
    graduate : {
        type : String,
        required : [true,'Graduate From Is Required']
    },
    aadhaar : {
        type : Number,
        required : [true,'Aadhaar Number Is Required']
    },
    workplacecontact : {
        type : Number,
        required : [true,'Work Place Contact Number Is Required']
    },
    password : {
        type : String,
        required : [true,'Password Is Required']
    },
    isGrant : []
},{timeStamps : true})

module.exports = mongoose.model('Doctor',doctorSchema);