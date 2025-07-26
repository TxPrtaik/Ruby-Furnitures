
let mongoose=require('mongoose');
mongoose.connect('mongodb+srv://pratikchindhe44:pratik123@cluster0.z8syx.mongodb.net/rubyfurnitures?retryWrites=true&w=majority&appName=Cluster0');
let Schema=mongoose.Schema;
let company=new Schema({
    "name":String,
    "about":String,
    "instagram":String,
    "whatsapp":String,
    "facebook":String,
    "address":String,
    "email":String,
    "mobile":String,
    "youtube":String
})
let comapny_model=mongoose.model("Compay_details",company);
module.exports=comapny_model;