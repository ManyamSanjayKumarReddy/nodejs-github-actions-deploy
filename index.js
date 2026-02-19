import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req,res) => {
    return res.json({msg : "\nHello from server v2!\n"})
})

app.listen(PORT , () => {
    console.log(`Server is up and running from PORT ${PORT}`);
    
})