import { Client } from '../interfaces/IClient';
import { Account } from '../interfaces/IAccounts';
import { AccountCorrentImpl } from '../models/AccountCorrent';
import { AccountSavingsImpl } from '../models/AccountSavings';


export class Bank {
    private clients: Client[] = [];
    private accounts: Account[] = [];

    addClient(client: Client): string {
        this.clients.push(client);
        return `Cliente ${client.name} adicionado com sucesso.`;
    }

    createAccount(client: Client, type: 'accountCorrent' | 'accountSavings'): string {
        if (type === 'accountCorrent' && client.salaryIncome >= 500) {
            const account = new AccountCorrentImpl(client, 0);
            this.accounts.push(account);
            return `Parabéns,${client.name}! A sua conta corrente foi criada com sucesso. O banco reprograma agradece!`;
        } else if (type === 'accountSavings') {
            const account = new AccountSavingsImpl(client, 0);
            this.accounts.push(account);
            return `Caro, ${client.name}! Sua conta poupança foi criada com sucesso. Lembrando que já está rendendo 102% CDI .`;
        } else {
            return `Caro, ${client.name}, não foi possível abrir sua conta com a gente, pois não possui um dos requisitos para a abertura de conta`;
        }
    }

    getAccountByClientId(clientId: string): Account | undefined {
        return this.accounts.find(account => account.client.id === clientId);
    }

    depositToAccount(clientId: string, value: number): string {
        const account = this.getAccountByClientId(clientId);
        if (account) {
            return account.deposit(value);
        }
        return `Não foi possível realizar o deposíto, pois não encontramos uma conta para este ID ${clientId}.`;
    }

    withdrawFromAccount(clientId: string, value: number): string {
        const account = this.getAccountByClientId(clientId);
        if (account) {
            return account.toWithdraw(value);
        }
        return `Não foi possível realizar a transferência, pois não encontramos uma conta para este ID${clientId}.`;
    }
    // 

    transferBetweenAccounts(clientIdFrom: string, clientIdTo: string, value: number): string {
        const accountFrom = this.getAccountByClientId(clientIdFrom);
        const accountTo = this.getAccountByClientId(clientIdTo);
        if (accountFrom && accountTo) {
            return accountFrom.transfer(value, accountTo);
        }
        return `Conta não encontrada para um dos clientes.`;
    }
}
