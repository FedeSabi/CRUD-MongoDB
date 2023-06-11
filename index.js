import express from 'express'
const app=express()
import morgan from 'morgan'
import config from './config/index.js'
import productosRouter from './routes/productos.routes.js'
import './mongodb.js'

//middleware
app.use(morgan('dev'))
app.use(express.json())

//rutas

app.get('/',(req,res)=>{
    res.send('hola mundo')
})

app.use('/productos', productosRouter)

app.all('/*',(req,res)=>{
    res.status(404).send('la pagina no se encontro')
})

app.listen(config.PORT,()=>{
    console.log(`servidor conectado en el puerto ${config.PORT}`)
})