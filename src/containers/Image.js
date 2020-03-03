import React from 'react';

const Image = props => {

	const { link, url, user, name } = props
	
	return(
	<li>
		<a href={link}>
			<img src={url} alt="Unsplash Image here" />
		</a>
		<p>
			Photo by
			<a href={user}>{name}</a>
			<a href={link}> See on Unsplash</a>
		</p>
	</li>
	)
}

export default Image;