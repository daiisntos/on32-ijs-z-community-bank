import { Client} from "./IClient";

export interface Account {
    client: Client;
    balance: number;
    deposit(value: number): string;
    toWithdraw(value: number): string;
    transfer(value: number, accountDestino: Account): string;
}

export interface AccountCorrent extends Account {
    specialCheckLimit: number;
}

export interface AccountSavings extends Account {}
