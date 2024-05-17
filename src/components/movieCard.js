
//MovieCard.js



import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

export const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    <div className='w-36 md:w-48 pr-4 h-auto'>
        <img className='rounded-lg'
        alt="Movie Card"
        src={IMG_CDN_URL+posterPath}
        />
    </div>
  )
}

