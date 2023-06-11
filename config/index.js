import dotenv from 'dotenv'
dotenv.config()

export default{
    PORT:process.env.PORT || 3030,
    DB:process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/nuevosproductos'
}