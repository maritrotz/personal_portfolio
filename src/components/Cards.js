import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem 
                    src="Images/trackimg.avif"
                    text="NCAA Track and Field Simulator"
                    label="Data Science/Programming"
                    path="https://medium.com/@maritrotz/2024-ncaa-track-field-championships-simulator-acce8bdbc34d"/>
                    <CardItem 
                    src="Images/jobboardimg.avif"
                    text="Job Board Website"
                    label="Programming"
                    path="https://github.com/allykat143/INST377-Final-Project"/>
                </ul>
                <ul className='cards_items'>
                    <CardItem 
                    src="Images/treecoverageimg.avif"
                    text="Addressing Tree Coverage in Urban Cities"
                    label="Data Science/Programming"
                    path="Images/treecoverageproject.pdf"/>
                    <CardItem 
                    src="Images/FaceDetectionimg.jpg"
                    text="Face Detection Script"
                    label="Programming"
                    path="https://github.com/maritrotz/FaceDetection"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards