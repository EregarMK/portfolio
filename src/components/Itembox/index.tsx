import React, { useEffect, useState } from 'react'
import './itembox.css'

type ProjectProps = {
   company: string,
   description: string,
   image: string,
   label: string,
   link: string,
   project: string,
   stack: string,
   tasks: string[] 
}

const getImageURL = (image:string, callback: Function) => import(`../../assets/images/${image.toLowerCase()}-mockup.jpg`).then(image => callback(image.default))

const Itembox = ({company, description, image, label, link, project, stack, tasks}: ProjectProps) => {
    const [url, updateURL] = useState('')
    useEffect(() => {getImageURL(image, updateURL)}, [image])
    
    return (
        <a href={link} target='_blank' rel='noreferrer' className='itembox-wrapper'>
            <img className='itembox-image' src={url} alt={project} />
            <h2 className='itembox-title'>{project}</h2>
            <p className='itembox-content'>
                {description}
                {tasks}
                <span className='itembox-footer'><b>Stack:</b> {stack}</span>
            </p>
        </a>
    )
}

export default Itembox;