'use strict'

var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('views', [
  `${__dirname}/views`,
  `${__dirname}/views/about/`,

  `${__dirname}/views/services/`,
  `${__dirname}/views/services/services-category-1/`,
  `${__dirname}/views/services/services-category-2/`,
  `${__dirname}/views/services/services-category-3/`,
  `${__dirname}/views/services/services-category-4/`,
  `${__dirname}/views/services/services-category-5/`,
  `${__dirname}/views/services/services-category-6/`,


  `${__dirname}/views/cases/`,
  `${__dirname}/views/cases/cases-single/`,

  `${__dirname}/views/regulations/`,
  `${__dirname}/views/regulations/regulations-single/`,

  `${__dirname}/views/contact/`
]);
app.set("view engine", "ejs");

app.use(express.static("public"));

// main page
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/index", (req, res) => {
  res.render("index");
});

// about
app.get("/about-summary", (req, res) => {
  res.render("summary.ejs");
});
app.get("/about-team", (req, res) => {
  res.render("team.ejs");
});
app.get("/about-value", (req, res) => {
  res.render("value.ejs");
});

// services
app.get("/services", (req, res) => {
  res.render("services-main.ejs");
});
app.get("/services-single", (req, res) => {
  res.render("services-single.ejs");
});
// services categories
app.get("/services-odi", (req, res) => {
  res.render("services-category-1.ejs");
});
app.get("/services-odi-1", (req, res) => {
  res.render("services-single-1-1.ejs");
});
app.get("/services-odi-2", (req, res) => {
  res.render("services-single-1-2.ejs");
});
app.get("/services-odi-3", (req, res) => {
  res.render("services-single-1-3.ejs");
});
app.get("/services-odi-4", (req, res) => {
  res.render("services-single-1-4.ejs");
});
app.get("/services-odi-5", (req, res) => {
  res.render("services-single-1-5.ejs");
});
//
app.get("/services-vie", (req, res) => {
  res.render("services-category-2.ejs");
});
app.get("/services-vie-1", (req, res) => {
  res.render("services-single-2-1.ejs");
});
app.get("/services-vie-2", (req, res) => {
  res.render("services-single-2-2.ejs");
});
app.get("/services-vie-3", (req, res) => {
  res.render("services-single-2-3.ejs");
});
app.get("/services-vie-4", (req, res) => {
  res.render("services-single-2-4.ejs");
});
//
app.get("/services-crossborder", (req, res) => {
  res.render("services-category-3.ejs");
});
app.get("/services-crossborder-1", (req, res) => {
  res.render("services-single-3-1.ejs");
});
app.get("/services-crossborder-2", (req, res) => {
  res.render("services-single-3-2.ejs");
});
app.get("/services-crossborder-3", (req, res) => {
  res.render("services-single-3-3.ejs");
});
app.get("/services-crossborder-4", (req, res) => {
  res.render("services-single-3-4.ejs");
});
app.get("/services-crossborder-5", (req, res) => {
  res.render("services-single-3-5.ejs");
});
app.get("/services-crossborder-6", (req, res) => {
  res.render("services-single-3-6.ejs");
});
app.get("/services-crossborder-7", (req, res) => {
  res.render("services-single-3-7.ejs");
});
//
app.get("/services-high-tech", (req, res) => {
  res.render("services-category-4.ejs");
});
app.get("/services-high-tech-1", (req, res) => {
  res.render("services-single-4-1.ejs");
});
app.get("/services-high-tech-2", (req, res) => {
  res.render("services-single-4-2.ejs");
});
app.get("/services-high-tech-3", (req, res) => {
  res.render("services-single-4-3.ejs");
});
app.get("/services-high-tech-4", (req, res) => {
  res.render("services-single-4-4.ejs");
});
app.get("/services-high-tech-5", (req, res) => {
  res.render("services-single-4-5.ejs");
});
app.get("/services-high-tech-6", (req, res) => {
  res.render("services-single-4-6.ejs");
});
app.get("/services-high-tech-7", (req, res) => {
  res.render("services-single-4-7.ejs");
});
app.get("/services-high-tech-8", (req, res) => {
  res.render("services-single-4-8.ejs");
});
//
app.get("/services-fintech", (req, res) => {
  res.render("services-category-5.ejs");
});
//
app.get("/services-corporate", (req, res) => {
  res.render("services-category-6.ejs");
});
app.get("/services-corporate-1", (req, res) => {
  res.render("services-single-6-1.ejs");
});
app.get("/services-corporate-2", (req, res) => {
  res.render("services-single-6-2.ejs");
});
app.get("/services-corporate-3", (req, res) => {
  res.render("services-single-6-3.ejs");
});
app.get("/services-corporate-4", (req, res) => {
  res.render("services-single-6-4.ejs");
});
app.get("/services-corporate-5", (req, res) => {
  res.render("services-single-6-5.ejs");
});



// cases
app.get("/cases", (req, res) => {
  res.render("cases-main.ejs");
});
app.get("/cases-single", (req, res) => {
  res.render("cases-single.ejs");
});
// cases single
app.get("/cases-odi", (req, res) => {
  res.render("cases-single-1.ejs");
});
app.get("/cases-qflp", (req, res) => {
  res.render("cases-single-2.ejs");
});
app.get("/cases-vie", (req, res) => {
  res.render("cases-single-3.ejs");
});
app.get("/cases-cash-pooling", (req, res) => {
  res.render("cases-single-4.ejs");
});
app.get("/cases-other", (req, res) => {
  res.render("cases-single-5.ejs");
});
app.get("/cases-privatization", (req, res) => {
  res.render("cases-single-6.ejs");
});

// regulations
app.get("/regulations", (req, res) => {
  res.render("regulations-main.ejs");
});
app.get("/regulations-odi", (req, res) => {
  res.render("regulations-single-1.ejs");
});
app.get("/regulations-currency", (req, res) => {
  res.render("regulations-single-2.ejs");
});
app.get("/regulations-registration", (req, res) => {
  res.render("regulations-single-3.ejs");
});


// contact
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});


// res.render("upgrade-notice.ejs");
app.listen((process.env.PORT || 80), function(){
  console.log("Listening on port " + (process.env.PORT || 80));
});
