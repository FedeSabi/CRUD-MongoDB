import express from 'express'
const app = express()
import morgan from 'morgan'
import config from './config/index.js'
import productosRouter from './routes/productos.routes.js'
import './mongodb.js';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';
import path from 'path';


//setting
app.set('views engine', 'ejs')



//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


//rutas
app.get('/', (req, res) => {
    res.render('/views/login')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.use('/productos', productosRouter)

app.all('/*', (req, res) => {
    res.status(404).send('la pagina no se encontro')
})

app.listen(config.PORT, () => {
    console.log(`servidor conectado en el puerto ${config.PORT}`)
})



