

const axios = require("axios");
const cheerio = require("cheerio");

axios.get('https://hypebeast.com/')
.then((res)=>{
    console.log(res)
}).catch(err=>console.log(err))