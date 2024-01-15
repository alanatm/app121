var myqsl = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'contactcenter121',
    user: 'root',
    password:''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexión exitosa");
    }
});

conexion.end();