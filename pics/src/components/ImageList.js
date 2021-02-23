import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    // console.log(props.images);
    // return <div>ImageList</div>
    // const images = props.images.map((image) => {
    // const images = props.imaImageListges.map(({ description, id, urls }) => { // << Destructured version
    // const images = props.ImageList.map(image => { // << Destructured version

    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;