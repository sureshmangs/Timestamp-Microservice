const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// 1: check if string is empty  -> true  -> return new unix and utc
// 2: check if string is a number -> true  -> valid date or not   -> valid return new unix and utc   -> invalid return error
// 3: string is NaN   ->  > valid date or not   -> valid return new unix and utc   -> invalid return error

app.get('/api/timestamp/:date_string?', (req, res)=> {
  const date_string = req.params.date_string;
  
  //check if string is empty
  if(!date_string) {
    const date = new Date();
    res.json({
      "unix": date.getTime(),
      "utc" : date.toUTCString()
    })
  }
  
  // check if string is a number
  if(!isNaN(date_string)) {
    const tmp = Number(date_string);
    const date = new Date(tmp);
    // valid date
    if(date.getTime()){
      res.json({
      "unix": date.getTime(),
      "utc" : date.toUTCString()
    })
    } else {
      res.json({"error" : "Invalid Date" });
    }
  }
  // string is not a number
   else {
     const date = new Date(date_string);
    // valid date
    if(date.getTime()){
      res.json({
      "unix": date.getTime(),
      "utc" : date.toUTCString()
    })
    } else {
      res.json({"error" : "Invalid Date" });
    }
   }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on PORT ${ PORT }`);
});