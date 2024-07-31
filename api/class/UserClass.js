//Registrarse el usuario
//Iniciar secion 
//Cerrar secion
//0btener informacionn del usuario
//Crear transacciones 
//Pedir prestamos 
//Borar cuenta
//Actualizar

import UserModel from "../models.js"

class ManagerUser{
    constructor(   email,
        phone,
        name,
        lastName,
        isInSession,
        isAdmin,
        password){
            this.email = email
            this.phone = phone
            this.name = name
            this.lastName = lastName
            this.isInSession = isInSession
            this.isAdmin = isAdmin
            this.password = password
        }
}