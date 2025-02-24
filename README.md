# Node.js Server Crash: Out of Memory Error

This repository demonstrates a common Node.js server error caused by attempting to send a very large buffer as a response to a client request. This can lead to the server crashing due to insufficient memory.

The `server.js` file contains the problematic code. The `serverSolution.js` file offers a solution to handle large responses more efficiently.

## How to Reproduce the Error

1. Clone this repository.
2. Navigate to the directory.
3. Run `node server.js`.
4. Send a request to `http://localhost:3000/`.
5. Observe that the server will likely crash after a short time due to memory exhaustion.

## Solution

The solution involves streaming the large response instead of attempting to send it as a single large buffer.  See `serverSolution.js` for the implementation.