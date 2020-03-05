import React from 'react'

const PicListItem = ({ photo }) => {
    return (
      <div key={photo.id} className="grid-item card">
        <div className="card-body">
          <img src={photo.urls.small} alt="" />
        </div>
        <div className="card-footer media">
          <img src={photo.user.profile_image.small} alt="" className="media-obj" />
          <div className="media-body">
            <a href={photo.user.portfolio_url} target="_blank">{ photo.user.name }</a>
          </div>
        </div>
      </div>
    )
  }

  export default PicListItem;