export default class Consulta {
    constructor(data_hora, motivo, status = "rascunho") {
        this.data_hora = data_hora;
        this.motivo = motivo;
        this.status = status;
    }

    validar() {
        const statusValidos = [
            "rascunho",
            "agendada",
            "concluida",
            "cancelada"
        ];

        if (!this.data_hora || isNaN(Date.parse(this.data_hora))) {
            return false;
        }

        if (!this.motivo || this.motivo.trim().length < 5) {
            return false;
        }

        if (!statusValidos.includes(this.status)) {
            return false;
        }

        return true;
    }

    static validarID(id) {
        return Number.isInteger(Number(id)) && Number(id) > 0;
    }
}