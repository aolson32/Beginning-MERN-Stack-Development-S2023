import express from 'express';
import cors from 'cors';
import movies from './api/movies.route.js'

const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())

app.use("/api/v1/movies", movies)
app.use('*', (req,res)=>{
    res.status(404).json({error: "not found"})
})

app.listen(port, console.log(`Server started on port: ${port}`))

export default app