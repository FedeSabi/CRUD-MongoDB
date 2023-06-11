import express from 'express'
const router=express.Router()
import Productos2 from "../models/productos2.js"

//ingresamos un producto (post)
router.post('/agregar-productos',async(req,res)=>{
   try{
      const productos=new Productos2(req.body)
      await productos.save()
      res.status(200).json({mensaje:'productos agregados'})
   }catch(error){
      console.log(error)
      res.status(404).json({mensaje:'error interno del sistema'})
   }
})

//mostra todos los productos
router.get('/mostrar-productos', async(req,res)=>{
   try{
      const productos= await Productos2.find()
      res.status(200).json(productos)
   }catch(error){
      res.status(404).json({mensaje:'error interno del sistema'})
   }
})

// buscar un producto por id
router.get('/buscar-productos/:id',async (req,res)=>{
 try{
const productos= await Productos2.findById(req.params.id)
res.status(200).json(productos)
 }catch(error){
   console.log(error)
   res.status(404).json({mensaje:'error interno del sistema'})
 }
})

//eliminar por id

router.delete('/eliminar-productos/:id',async (req,res)=>{
   try{
   const productos= await Productos2.findByIdAndDelete(req.params.id)
   if(productos===null){
      throw new Error('producto no encontrado')
   }
      res.status(200).json({mensaje:('producto eliminado')})
   }catch(error){
      console.log(error)
      res.status(404).json({mensaje:('error interno del sistema')})
   }
})

export default router
