//crear una tarjeta  
//obtener una tarjeta 
//obtener tarjetas 

import CardModel from "../models/CardModel.js";

class ManagerCard{
    constructor( userId,
        accountId,
        cardNumber,
        cardType,
        expirationDate,
        securityCode,
        status) {
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.status = status;
        }
    
    async createCard(){
        try {
            await CardModel.create({
                userId: this.userId,
                accountId: this.accountId,
                cardNumber: this.cardNumber,
                cardType: this.cardType,
                expirationDate: this.expirationDate,
                securityCode: this.securityCode,
                status: this.status
            })
        } catch (error) {
            
        }
    }

        async getCards(){
            try {
                const cards = await AccountModel.find();
                return cards; 
            } catch (error) {
                throw new Error(`Error al tener tarjeta: ${error}`);
            }
        }
    
        async getCads(){
            try {
                const cards = await AccountModel.findById(id)
                return cards;
            } catch (error) {
                throw new Error(`Error al tener tarjetas: ${error}`);
            }
        }
        
    }
}