export default class Medico {
    constructor(nome, crm, especialidade) {
        this.nome = nome;
        this.crm = crm;
        this.especialidade = especialidade;
    }

    validar() {
        if (!this.nome || this.nome.trim().length < 3) {
            return false;
        }

        if (!this.crm || this.crm.trim() === "") {
            return false;
        }

        if (!this.especialidade || this.especialidade.trim().length < 3) {
            return false;
        }

        return true;
    }

    static validarID(id) {
        return Number.isInteger(Number(id)) && Number(id) > 0;
    }
}