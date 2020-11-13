const express=require("express")
const bodyParser=require("body-parser")
const router=require("./routes")
const cors=require("cors")
const port=require("./config").port

const app=express()

const configure = app => {
    app.use(express.static("../client/dist/spa"));
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api", router);
  };
  module.exports = configure;
  asd
  
  configure(app);
  
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
