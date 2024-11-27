import { DataTypes } from "sequelize";
import conn from "../Config/Conn.js";

const Usuario = conn.define("Usuarios", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    telefone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true
    },
    deficiencia: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    dataNascimento: {
        type: DataTypes.DATE,  
        allowNull: false,
        required: true
    },
    papel: {
    type: DataTypes.ENUM(["administrador", "user"]),
}
},{
    tableName:'usuarios'
})


export default Usuario;


