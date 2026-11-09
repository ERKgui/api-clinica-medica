CREATE TABLE IF NOT EXISTS medico (
    id_medico INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    crm VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS paciente (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS consulta (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    data_consulta DATE NOT NULL,
    hora_consulta TIME NOT NULL,
    fk_id_medico INT NULL,
    fk_id_paciente INT NULL,
    CONSTRAINT fk_consulta_medico 
        FOREIGN KEY (fk_id_medico) REFERENCES medico(id_medico)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_consulta_paciente 
        FOREIGN KEY (fk_id_paciente) REFERENCES paciente(id_paciente)
        ON DELETE SET NULL ON UPDATE CASCADE
);
