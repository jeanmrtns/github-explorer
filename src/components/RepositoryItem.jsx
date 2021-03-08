import React from 'react'

function RepositoryItem({repository}) {
    return (
        <div>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.link}>Acesse o repositório</a>
        </div>
    )
}

export default RepositoryItem
