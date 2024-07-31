//Movimiento de dinero (crear transaccion)
//obtener transacciones 
//obtaner las transaccionespor usuario

import TransactionModel from "../models/TransactionModel.js";

class ManagerTrasaction {
    constructor(accountFromId, accountToId, type, amount,description) {
        this.accountFromId = accountFromId
        this.accountToId = accountToId
        this.type = type
        this.amount = amount
        this.description = description
    }

    async createTransaction(){
        try {
            const transaction = await TransactionModel.create({
                accountFromId: this.accountFromId,
                accountToId: this.accountToId,
                type: this.type,
                amount: this.amount,
                description: this.description
            })
        } catch (error) {
            throw new Error (`Error al obtener la transaccion ${error}`)
        }
    }

    async getTtransaction(id){
        try {
            const transaction = await TransactionModel.findById(id);
            return transaction;
        } catch (error) {
            throw new Error (`Error al obtener la transaccion ${error}`)

        }
    }

     

    
}