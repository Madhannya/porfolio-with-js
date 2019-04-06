const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/' || req.url === '/About%20Me.html'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h1>This is index.html</h1>')

        fs.readFile(path.join(__dirname, 'About Me.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(content)
        });
    }else if (req.url === '/gallery' || req.url === '/My%20Gallery.html'  ){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname,  'My Gallery.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(content)
        });
    }else if (req.url === '/contact' || req.url === '/index.html' ){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname, 'index.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(content)
        });
    }else if (req.url === '/assets/css/main.css'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname, 'assets', 'css', 'main.css'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/css'});
            res.end(content)
        });
    } else if (req.url === '/My%20picture.jpg'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname,  'My picture.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg'});
            res.end(content)
        });
    }  else if (req.url === '/My%20picture1.jpg'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname,  'My picture1.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg'});
            res.end(content)
        });
    }  else if (req.url === '/My%20picture2.jpg'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname,  'My picture2.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg'});
            res.end(content)
        });
    }  else if (req.url === '/My%20picture3.jpg'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname,  'My picture3.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg'});
            res.end(content)
        });
    }  else if (req.url === '/images/banner.jpg'){
        // res.writeHead(200, { 'content-type': 'text/html'});
        // res.end('<h2>This is about</h2>')

        fs.readFile(path.join(__dirname, 'images', 'banner.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg'});
            res.end(content)
        });
    }  
    
    
    // else if (req.url === '/api/users'){
    //     const users = {
    //         {name: 'John Doe',age: 25 },
    //         {name: 'John Doe',age: 25 },
    //         {name: 'John Doe',age: 25 }
    //     };
    //      res.writeHead(200, { 'content-type': 'application/json'});
    //     res.end(JSON.stringify(users))
    // }
    else {
        // res.writeHead(404, { 'content-type': 'text/html'});
        // res.end('<h3>Error 404: Not found</h3>')

        fs.readFile(path.join(__dirname,'404.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(404, { 'content-type': 'text/html'});
            res.end(content)
        });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});