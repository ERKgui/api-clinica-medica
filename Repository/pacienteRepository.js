import { conexao } from "../database/conexao.js";

export async function cadastrarPaciente(paciente) {
    const sql = `
        INSERT INTO paciente (nome, cpf, data_nascimento)
        VALUES (?, ?, ?)
    `;

    const [resultado] = await conexao.execute(sql, [
        paciente.nome,
        paciente.cpf,
        paciente.data_nascimento
    ]);

    return resultado;
}

export async function listarPacientes() {
    const sql = "SELECT * FROM paciente";

    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarPacientePorID(id) {
    const sql = "SELECT * FROM paciente WHERE id_paciente = ?";

    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarPaciente(id, paciente) {
    const sql = `
        UPDATE paciente
        SET nome = ?, cpf = ?, data_nascimento = ?
        WHERE id_paciente = ?
    `;

    const [resultado] = await conexao.execute(sql, [
        paciente.nome,
        paciente.cpf,
        paciente.data_nascimento,
        id
    ]);

    return resultado;
}

export async function excluirPaciente(id) {
    const sql = "DELETE FROM paciente WHERE id_paciente = ?";

    const [resultado] = await conexao.execute(sql, [id]);

    return resultado;
}