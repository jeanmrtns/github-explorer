import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'
import '../styles/repository-list.scss'

type Repository = {
    name: string,
    description: string,
    html_url: string
}

 function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/jeanmrtns/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Repositórios GitHub</h1>
            <ul>
                {repositories && repositories.map(repo => 
                    <RepositoryItem key={repo.name} repository={repo}/>
                )}
            </ul>
        </section>
    )
}

export default RepositoryList
