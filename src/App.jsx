import React from 'react'
import './App.css'
import { TwitterCard } from './TwitterCard'

const users = [
    { 
        userName: 'FerPooLe',
         name: 'Fernando Poole',
         isFollowing: true
    },
    {
         userName: 'midudev',
         name: 'Miguel Durán',
         isFollowing: false
    },
    {
        userName: 'Danidev',
        name: 'Daniel Verduras',
        isFollowing: true
    },
    {
        userName: 'RealAdsu',
        name: 'Raul Adsuara',
        isFollowing: false
    }   
]

export function App () {
    const format = (userName) => `@${userName}`

    return (
    <section className='tw-cards'>
        {
            users.map(({ userName, name, isFollowing }) => (
                    <TwitterCard 
                    key={userName}
                    formatUserName={format}
                    userName={userName} 
                    initIsFollowing={isFollowing}>
                        {name}
                    </TwitterCard>
            ))
        }
    </section>
    )
}