/*Our HTTP server sends an HTML response body. 
Replace the text in the HTML with your own message. 
Run the server and use your web browser to test your changes.

Imports the Node.js core http module (or with node:http).
Creates an HTTP server with the http.createServer method.
Set the response status code to 200
Sets the response header: Content-Type: text/html
Sends an HTML response body containing any message.
Make the server listen to the port 3000 */

import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>Hello from my custom Node.js server!</h1><p>Welcome to my web page.</p></body></html>"
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});