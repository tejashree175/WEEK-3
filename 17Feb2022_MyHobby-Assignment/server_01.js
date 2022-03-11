const http=require('http');
const fs=require('fs');
const port=3000;
// For any request 
http.createServer((req,resp)=>{
    
    fs.readFile(__dirname+'/index.html',(err,data)=>{
        resp.setHeader('ContentType','text/html');
            if(err){
                // resp.status(404);
                resp.write("index.html not available on server");                
            }else{
                resp.write(data);                
            }
            resp.end();
    });

}).listen(port,()=>{
    console.log(`http://localhost:${port} started`);
})