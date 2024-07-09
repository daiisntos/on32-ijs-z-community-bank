import {AccountSavings} from '../interfaces/IAccounts';
import {AccountBase} from '../models/AccountBase'

export class AccountSavingsImpl extends AccountBase implements AccountSavings {
    
    // Calcula o rendimento e aplica ao saldo da conta
    applyInterest(cdiRate: number): string {
        const rendimentoAnual = this.balance * (cdiRate / 100);
        const rendimentoMensal = rendimentoAnual / 12;
        this.balance += rendimentoMensal * 1.02; // 102% do CDI
        return `Rendimento em conta é de R$ ${rendimentoMensal * 1.02} aplicando 102% de CDI. Seu saldo atual é de R$ ${this.balance}`;
    }
}