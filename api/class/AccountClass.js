//obtener cuenta 
//obtener cuentas 
//agregar balance
//restar balance
//crear una cuenta 
import accountNumber from "../models/AccountModel.js";
class ManagerAccount{
    constructor(userId, accountNumber, accountType, balance){
        this.userId = userId;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
    }

    async getAccounts(){
        try {
            const accounts = await AccountModel.find();
            return accounts; 
        } catch (error) {
            throw new Error(`Error al tener cuentas: ${error}`);
        }
    }

    async getAccount(){
        try {
            const account = await AccountModel.findById(id)
            return account;
        } catch (error) {
            throw new Error(`Error al tener cuentas: ${error}`);
        }
    }

    async addBalnce(id, amount){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
                
            });
            return "Ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);    
        }

    }

    async restBalnce(id, amount){
        try {
            this.balance -= amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
                
            });
            return "Ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);    
        }

    }

    async createAccount(){
        try {
            await AccountModel.create({
                userId: this.userId,
                accountNumber: this.accountNumber,
                accountType: this.accountType,
                balance: this.balance
            });
            return "Ok"
        } catch (error) {
            
        }
    }
}