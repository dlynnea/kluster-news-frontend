import React from 'react';
import { Link } from 'react-router-dom';
import Article from './Article';

export default function ArticleCard(props) {
    console.log(props)

    const renderArticles = props.articles.map(article => {
        return(
            <Article article={article} />
        )
    })

    return(
        <div>
            {renderArticles}
        </div>
    )
}


// const ArticleCard = ({article}) => (
//     <div className='article-card'>
//         <Link to={`${article.id}`}>
//             <div className='card-image'>
//             </div>
//             <div className='card-content text-center pt-3'>
//                 <h5 className='title'> {article.title} </h5>
//                 <p className='text-center excerpt'>{article.summary}</p>
//             </div>
//         </Link>
//     </div>

// )

// export default ArticleCard;