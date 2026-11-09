const express = require('express');
const pool = require('./conexao');

const app = express();
app.use(express.json());

app.post('/consultas', async (req, res) => {
    const { data_consulta, hora_consulta, fk_id_medico, fk_id_paciente } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO consulta (data_consulta, hora_consulta, fk_id_medico, fk_id_paciente) VALUES (?, ?, ?, ?)',
            [data_consulta, hora_consulta, fk_id_medico || null, fk_id_paciente || null]
        );
        res.status(201).json({ message: 'Consulta agendada!', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/consultas', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM consulta');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
