import { conexao } from "../database/conexao.js";

export async function cadastrarMedico(medico) {
    const sql = `
        INSERT INTO medico (nome, crm, especialidade)
        VALUES (?, ?, ?)
    `;

    const [resultado] = await conexao.execute(sql, [
        medico.nome,
        medico.crm,
        medico.especialidade
    ]);

    return resultado;
}

export async function listarMedicos() {
    const sql = "SELECT * FROM medico";

    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarMedicoPorID(id) {
    const sql = "SELECT * FROM medico WHERE id_medico = ?";

    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarMedico(id, medico) {
    const sql = `
        UPDATE medico
        SET nome = ?, crm = ?, especialidade = ?
        WHERE id_medico = ?
    `;

    const [resultado] = await conexao.execute(sql, [
        medico.nome,
        medico.crm,
        medico.especialidade,
        id
    ]);

    return resultado;
}

export async function excluirMedico(id) {
    const sql = "DELETE FROM medico WHERE id_medico = ?";

    const [resultado] = await conexao.execute(sql, [id]);

    return resultado;
}