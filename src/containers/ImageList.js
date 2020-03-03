import React from 'react';
import Image from './Image';
import NoImages from './NoImages';

const ImageList = props => {
	const { imgs } = props;
	// let results;
	// if (results.length > 0) {
		const images = imgs.results.map(img =>
			<Image
				url={img.urls.thumb}
				user={img.user.links.html}
				name={img.user.name}
				link={img.links.html}
				key={img.id}
			/>
		);
	// } else {
	// 	imgs = <NoImages />;
	// }
	return (
		<ul className="img-list">
			{images}
		</ul>
	);
};

export default ImageList;