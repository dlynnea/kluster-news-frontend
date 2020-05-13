import React from 'react';

const VergeCard = (props) => {
    const { url, title, author } = props;

    return (
        <>
            <a 
            href={url} 
            target='_blank' 
            rel="noopener noreferrer"
            className='newsLink'>
                {title}
                <br />
                <span>{author}</span>
            </a>
        </>
    )
}

export default VergeCard;