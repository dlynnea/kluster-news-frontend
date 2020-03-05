import React from 'react'
import PicListItem from './PicListItem'

const PicList = (props) => {
    const { photos } = props
    var items = photos.results.map(photo => <PicListItem key={photo.id} photo={photo}/>);
    return (
      <div className="grid">
        { items }
      </div>
    )
  }

export default PicList;