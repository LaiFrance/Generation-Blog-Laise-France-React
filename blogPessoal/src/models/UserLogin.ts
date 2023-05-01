interface UserLogin {
    id: number;
    usuario: string;
    senha: string;
    nome: string;
    email: string;
    telefone: string;
    dataNascimento: Date;
    dataCadastro: Date;
    dataAtualizacao: Date;
    dataUltimoLogin: Date;
    token: string | null;
    ativo: boolean;
    perfil: string;
    foto: string;
    sexo: string;
    cpf: string;
    rg: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
}

