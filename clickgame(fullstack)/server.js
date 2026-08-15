const http = require("http");
const fs = require("fs");
let player = {
	poin: 0,
	}
const server = http.createServer(function(req, res) {

if (req.url === "/click" && req.method === "POST") {
	player.poin += 1
	res.writeHead(200, {
		"Content-Type": "text/plain"
		});
		console.log("click")
		res.end(JSON.stringify(player.poin))
		} else if (req.url === "/load" && req.method === "GET") {	
fs.readFile("player.json", "utf8", function(err, data) {
	res.writeHead(200, {
		"Content-Type": "application/json"
		});
		console.log("load");
		res.end(data);
		player = JSON.parse(data)
		console.log(data)
		});
		} else if (req.url === "/save" && req.method === "POST" ) {
			fs.writeFile("player.json", JSON.stringify(player), function(err) {
				console.log("save")
				});
				
		} else if (req.url === "/" && req.method === "GET") {
			fs.readFile("atesting.html", function(err, data) {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        
        console.log("load html")
        res.end(data);
    });	

	} else {
		res.writeHead(404)
			res.end("tidak ditemukan")
			console.log("tidak ada")
		}
});

server.listen(3000, function() {
    console.log("Server berjalan!");
});