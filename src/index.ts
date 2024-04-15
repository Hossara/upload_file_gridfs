import Fastify from 'fastify'
import multipart from "@fastify/multipart"
import mongo, {mongodb} from "@fastify/mongodb"
import {pipeline} from "node:stream"
import util from "node:util"

const pump = util.promisify(pipeline)

// Initialize app
const app = Fastify({
    logger: true
})

// Register fastify modules
app.register(multipart)
app.register(mongo, {
    forceClose: true,
    url: 'mongodb://mongo_gridfs/test_fs'
})

// Route options for file upload
// const uploadOptions: RouteShorthandOptions = {
//     schema: {
//         body: {
//             type: 'object',
//             properties: {
//                 file: { type: 'object', format: 'binary' }
//             }
//         }
//     }
// }

app.post('/upload', async (request, reply) => {
     const file = await request.file()

    if (!file) return reply.status(404).send('File not Found')

    // Create a GridFS write stream
    const bucket = new mongodb.GridFSBucket(app.mongo.db)

    const uploadStream = bucket.openUploadStream(file.filename)

    // Pipe the file stream to GridFS
    await pump(file.file, uploadStream)

    // Handle completion of file upload
    uploadStream.on('finish', () => {
        reply.send({ success: true, message: 'File uploaded successfully' });
    })

    // Handle any errors during file upload
    uploadStream.on('error', (err) => {
        reply.status(500).send({ success: false, message: 'Error uploading file', error: err })
    })
})

// Start the server
try {
    app.listen({port: 8085, host: "0.0.0.0"})
    console.log(`Server listening on localhost:8085`)
}
catch (error) {
    console.error(error)
    process.exit(1)
}