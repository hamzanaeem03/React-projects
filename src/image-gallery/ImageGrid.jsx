import React from 'react'
import imageGallery from './ImageArray'



export const ImageGrid = () => {

  return (
    <div>
      <h1>Image Grid</h1>
      <div className='grid grid-cols-4 gap-4'>
        {imageGallery.map((image) => (
          <div key={image.id} className=''>
            <h2 className='font-semibold'>{image.title}</h2>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
