import {Schema,model} from'mongoose'

const Productos2Schema = new Schema({
    descripcion:{
        type:String,
        required:true,
    },
    tipo:{
        type: String,
        required:true
    },
    stock:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true,
    },
    imagen:{
        type:String,
        required:true
    }
})

export default model('nuevosProductos',Productos2Schema) 
