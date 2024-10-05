const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.post("/contact/send",async function(req,res){
  console.log(req.body.message);
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "926851a8c45ffb",
      pass: "b0403d8cabd5e8"
    }
  });
  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: req.body.uname+"send a message", // Subject line
    text: req.mail+"said: "+ req.msg, // plain text body
    html: "<b>Hello world?</b>", // html body
  }).then(() => res.redirect('/'));
  return res.redirect("/");
});
router.post("/",async function(req,res){
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "926851a8c45ffb",
      pass: "b0403d8cabd5e8"
    }
  });
  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }).then(() => res.redirect('/'));
  return res.redirect("/");
});
router.get('/alba',function(req,res){
  res.sendFile(path.join(__dirname+'/alba.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/pfizer',function(req,res){
  res.sendFile(path.join(__dirname+'/pfizer.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
  //__dirname : It will resolve to your project folder.
});
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');