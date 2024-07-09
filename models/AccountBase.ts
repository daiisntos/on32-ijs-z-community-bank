import { Client } from '../interfaces/IClient';
import { Account } from '../interfaces/IAccounts';

export abstract class AccountBase implements Account {
    /*
     foi adiciona o contrutor como uma forma de elimina a necessidade de declarar
      as propriedades separadamente e fazer atribuição do valor.
     */
    constructor(
        public client: Client,
        public balance: number
    ) {}
    
    //Depósito
    deposit(value: number): string {
        this.balance += value;
        return `Seu depósito no valor de R$ ${value} foi realizado com sucesso. Seu saldo atual é de R$ ${this.balance}`;
    }

    //Saque
    toWithdraw(value: number): string {
        if (this.balance >= value) {
            this.balance -= value;
            return `O saque no valor de R$${value} foi realizado com sucesso. Seu novo saldo é de R$ ${this.balance}`;
        }
        return `Seu saldo é insuficiente para o valor solicitado. Seu saldo atual é de R$ ${this.balance}`;
    }
    
     // Transferência

    transfer(value: number, destinationAccount: Account): string {
        const withdrawalMessage = this.toWithdraw(value);
        if (withdrawalMessage.startsWith("Saque de R$")) {
            destinationAccount.deposit(value);
            return `Transferência de R$${value} realizada para a conta de ${destinationAccount.client.name}.`;
        }
        return `Transferência de R$${value} falhou. Saldo insuficiente.`;
    }
}