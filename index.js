const express = require('express');
const app = express();
const port = 5000;


//app.get()
//app.post()
//app.put()
//app.delete()
//app.use()
//app.all()


app.get('/', function (req, res) {
  //res.send('GET request to homepage')
  res.sendFile('index.html', {root: __dirname});
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}); 