import React from 'react'
import RepositoryItem from './RepositoryItem'

const repository = {
    name: "Formulário",
    description: "Formulário em React",
    link: "https://github.com/unform/unform"
}

function RepositoryList() {
    return (
        <div>
            <h1>Repositórios GitHub</h1>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
        </div>
    )
}

export default RepositoryList
