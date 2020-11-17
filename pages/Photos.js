import React, { useContext } from 'react';
import Image from "../components/Image";
import { Contexts } from '../Context';
import {getClass} from "../utils";

function Photos() {

	const { allPhotos } = useContext(Contexts);

	return (
		<main className="photos">
			{allPhotos.map((image, index) => (
				<Image 
				key={image.id}
				className={getClass(index)}
				image={image}
				/>
			))}
		</main>
	);
}

export default Photos;
