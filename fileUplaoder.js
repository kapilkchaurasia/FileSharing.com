var express = require('express');
var app = express();
var fs = require("fs");
var multer  = require('multer');

var server = require('http').Server(app);
var io = require('socket.io')(server);

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname + '-' + Date.now())
	}
})

var upload = multer({ storage: storage });

var downloadLink=""


app.get('/', function(req, res){
	res.send('hello world');
});

app.get('/photo/Uploads',upload.single('singleInputFileName') ,function(req, res ,next){
	console.log("download your file from here:")
	downloadLink = req.path+res.filename
	console.log(downloadLink)
	res.sendFile('/Users/kapil.chaurasia/Cueball/Randall/nodejs/DownloaderPage.html');
	
});


io.on('connection', function(client) {
	console.log("client connected")
	
	client.emit('downloadLink' , downloadLink)


	client.on('client_data', function(data){
		// allow client to download your file
	});
});


server.listen(3000);

