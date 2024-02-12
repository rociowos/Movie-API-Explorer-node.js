const express = require('express');
var cors = require('cors');

class Server{
    constructor(){
        this.port = process.env.PORT || 5003; //puerto de html

        this.app = express();

        this.middleware();

        this.routers();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.static('public')); 

    }

    routers(){
    
        this.app.use('/primerapi', require('../routes/demo'));

        
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Example app listening on port ${this.port}`);
        });
    }
}

module.exports = Server;