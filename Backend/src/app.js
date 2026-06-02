const express = require('express')
const postModel = require('./models/post.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json()) //this is the middleware to read the "raw" data.

const upload = multer({ storage: multer.memoryStorage() }) //this is the middleware to read the "form-data || file-data"

app.get('/', (req, res)=>{
    res.send("Create a Post")
})
                                       //key
app.post('/create-post', upload.single("image"), async (req, res)=>{
    console.log(req.body)
    console.log(req.file);

    const result = await uploadFile(req.file.buffer)

    console.log(result)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post created successfully!",
        post
    })
})

app.get('/posts', async (req, res)=>{
    const post = await postModel.find()
    return res.status(200).json({
        message: "Posts fetched successfully!",
        post
    })
})

module.exports = app