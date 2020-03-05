import React from 'react';

const MbgCard = (props) => {
    const { url, title, author } = props;

    return (
        <>
            <a 
            href={url} 
            target='_blank' 
            className='newsLink'>
                {title}
                <br />
                <span>{author}</span>
            </a>
        </>
    )
}

export default MbgCard;