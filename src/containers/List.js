import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    const { photos } = props
    var items = photos.results.map(photo => <ListItem key={photo.id} photo={photo}/>);
    return (
      <div className="grid">
        { items }
      </div>
    )
  }

export default List;