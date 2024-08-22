import React from 'react'

import './Gallery.scss'

export interface GalleryProps {
  children?: React.ReactNode
}

const Gallery: React.FC<GalleryProps> = () => {

  return (

    <div className="parent">
      <div className="div1">1</div>
      <div className="div2">2</div>
      <div className="div3">3</div>
      <div className="div4">4</div>
      <div className="div5">5</div>
    </div>

  )
}

export default Gallery