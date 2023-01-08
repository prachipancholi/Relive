import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", ezxtended: true }))

app.use(bodyParser.urlencoded({ limit: "30mb", ezxtended: true }))

app.use(cors())

app.use('/posts', postRoutes)

const con_url = `mongodb+srv://Prachi:Prachi@cluster0.j5bqueq.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false)

mongoose.connect(con_url).then(() => app.listen(PORT, () => console.log(`Connected ${PORT}`)))
    .catch(error => console.log(error));