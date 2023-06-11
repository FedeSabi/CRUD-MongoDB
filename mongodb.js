import mongoose from "mongoose";
import config from "./config/index.js";

// en vez de fetch
mongoose
.connect(config.DB)
.then(()=>console.log('la db esta conectada'))
.catch(error=>console.log(error))