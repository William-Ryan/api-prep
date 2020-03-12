/* Go to https://www.youtube.com/watch?v=dQw4w9WgXcQ and follow the instructions and code! */

const server = require ("./server.js")

PORT = 5000
server.listen(PORT, () => {
    console.log(`\n* Server Running on http://localhost:${PORT} *\n`)
})