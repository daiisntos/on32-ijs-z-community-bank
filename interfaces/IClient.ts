export interface Client {
    name: string;
    id: string;
    address: string;
    phone: string;
    emailAddress: string;
    salaryIncome: number;
    rg: number;
    cpf: number;
    dateOfIssueRG: Date;
    issuingBodyRG: string;
    dateOfBirth: Date;
    image: Uint8Array;
}