import React from 'react'

const ListItem = ({ photo }) => {
    return (
      <div key={photo.id} className="grid__item card">
        <div className="card__body">
          <img src={photo.urls.small} alt="" />
        </div>
        <div className="card__footer media">
          <img src={photo.user.profile_image.small} alt="" className="media__obj" />
          <div className="media__body">
            <a href={photo.user.portfolio_url} target="_blank">{ photo.user.name }</a>
          </div>
        </div>
      </div>
    )
  }

  export default ListItem;