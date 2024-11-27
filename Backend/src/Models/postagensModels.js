import { DataTypes } from "sequelize";
import conn from "../Config/Conn.js";
import Usuario from "./usuariosModels.js";


const Postagem = conn.define("Postagens", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
        required:true
    },
},{
    tableName:'postagens'
})


Usuario.hasMany(Postagem,{foreignKey:'id_postagem'})
Postagem.belongsTo(Usuario,{foreignKey:'id_usuario'})


export default Postagem;