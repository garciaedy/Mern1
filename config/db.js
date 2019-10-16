const moongoose = requires('moongose');
const config = require(config);
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
       await moongoose.connect(db);
       console.log('MongoDB Connected')
    }catch(err){
        console.err(err.message);
        //Exit process with failure
        process.exit(1);
    }
}
module.exports = connectDB;