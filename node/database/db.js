import {Sequelize} from 'sequelize';

const db = new Sequelize('railway', 'railway','TGYgAY4GJNFJ4fv-UkcbDh_bVG5AtCEQ',{
    host: 'viaduct.proxy.rlwy.net',
    dialect: 'mysql'
});

export default db;