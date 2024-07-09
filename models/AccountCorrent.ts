import { AccountCorrent } from '../interfaces/IAccounts';
import {AccountBase} from '../models/AccountBase'

export class AccountCorrentImpl extends AccountBase implements AccountCorrent {
    specialCheckLimit: number = 100;

    toWithdraw(value: number): string {
        if (this.balance + this.specialCheckLimit >= value) {
            this.balance -= value;
            return `Cuidado! Seu saque de R$ ${value} foi realizado. Fique atento: Você está usando seu cheque especial. Seu saldo atual é de R$ ${this.balance}`;
        }
        return "Você não possui saldo.";
    }
}
