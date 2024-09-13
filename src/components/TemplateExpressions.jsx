const TemplateExpressions = () => {
    let nome = "Meu nome"
    let aluno = {
        nome:"Lil peter",
        Turma:"C",
        ano:"2"
    }

    return(
        <div>
            <h1>olá {nome} </h1>
            <h2>O aluno {aluno.nome} está no {aluno.ano}°        ano, na turma {aluno.Turma}</h2>
        </div>
    )

}

export default TemplateExpressions