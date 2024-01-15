//importar conexion a la BD

import db from "../database/db.js"

import { DataTypes } from "sequelize";

const SalesModel = db.define('papeleta',{
    recarga_plan: {type: DataTypes.STRING},
    dn: {type: DataTypes.STRING},
    dn_digitos: {type: DataTypes.NUMBER},
    fvc: {type: DataTypes.STRING},
    nip: {type: DataTypes.NUMBER},
    vigencia: {type: DataTypes.STRING},
    nombres_cliente: {type: DataTypes.STRING},
    apellido_pat_cliente: {type: DataTypes.STRING},
    apellido_mat_cliente: {type: DataTypes.STRING},
    curp: {type: DataTypes.STRING},
    fen_nac: {type: DataTypes.STRING},
    tel_contacto:  {type: DataTypes.STRING},
    lugar_nac:  {type: DataTypes.STRING},
    email:  {type: DataTypes.STRING},
    codigo_postal:  {type: DataTypes.NUMBER},
    col_fracc:  {type: DataTypes.STRING},
    cac_movi:  {type: DataTypes.STRING},
    user_login:  {type: DataTypes.STRING},
    ejecutivo:  {type: DataTypes.STRING},
    supervisor:  {type: DataTypes.STRING},
    rfc:  {type: DataTypes.STRING},
    calle:  {type: DataTypes.STRING},
    num_ext:  {type: DataTypes.STRING},
    num_int:  {type: DataTypes.STRING},
    entre_calles:  {type: DataTypes.STRING},
    referencias:  {type: DataTypes.STRING},
    del_mun:  {type: DataTypes.STRING},
    estado: {type: DataTypes.STRING},
    id_ine:  {type: DataTypes.STRING},
    orden:  {type: DataTypes.STRING},
    validador:  {type: DataTypes.STRING},
    status:  {type: DataTypes.STRING},
})

export default SalesModel;