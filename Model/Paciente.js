export default class Paciente {
    constructor(nome, cpf, data_nascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    validar() {
        if (!this.nome || this.nome.trim().length < 3) {
            return false;
        }

        if (!/^\d{11}$/.test(this.cpf)) {
            return false;
        }

        if (!this.data_nascimento || isNaN(Date.parse(this.data_nascimento))) {
            return false;
        }

        return true;
    }

    static validarID(id) {
        return Number.isInteger(Number(id)) && Number(id) > 0;
    }
}