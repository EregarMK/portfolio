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
   tasks: [] 
}

const getImageURL = (image:string, callback: Function) => import(`../../assets/images/${image.toLowerCase()}-mockup.jpg`).then(image => callback(image.default))

const Itembox = ({company, description, image, label, link, project, stack, tasks}: ProjectProps) => {
    const [url, updateURL] = useState('')
    useEffect(() => {getImageURL(image, updateURL)}, [image])
    
    return (
        <div>
            <img className='itembox-image' src={url} alt={project} />
            <h2>{project}</h2>
            {company}
            <p>{description}</p>
            {stack}
            {tasks}
            <a href={link} target='_blank' rel='noreferrer'>link</a>
            {label}
        </div>
    )
}

export default Itembox;