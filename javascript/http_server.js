// nacteni balicku s kodem HTTP serveru
const http = require('http');

// pouziti balicku pro vytvoreni serveru
const server = http.createServer((request, response) => {
	// toto je odpoved serveru na dotaz
	response.end("Hello World");
});

// spusteni serveru
server.listen(8000, "localhost", () => {
	console.log("Server běží na portu 8000...");
});