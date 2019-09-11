const server = require('./server');
const port = 1000;
server.listen(port, () => {
  console.log(`Server is Listening on Port: ${port}`);
}); 

server.get('/' , (req,res) => {
   return res.status(200).json({message: "Hello"});
})