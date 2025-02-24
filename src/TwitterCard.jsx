import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterCard({ formatUserName, userName, children, initIsFollowing }) {
    const [isFollowing,setFollowing] = useState(initIsFollowing)  
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClasseName = isFollowing 
    ? 'tw-card-button is-following' 
    : 'tw-card-button'

    const handleclick = () => setFollowing(!isFollowing)

    return (
    <article className='tw-card'>
        <header className='tw-card-header'>
            <img 
            className='tw-card-avatar'
            alt="Elavatar de midudev" 
            src={`https://unavatar.io/${userName}`} />
            <div className='tw-card-info'>
                <strong>{children}</strong>
                <span className='tw-card-info-user'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClasseName} onClick={handleclick}>
                <span className='tw-card-button-text'>{text}</span>
                <span className='tw-card-button-stop-follow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}

TwitterCard.propTypes = {
    formatUserName: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    initIsFollowing: PropTypes.bool.isRequired
}