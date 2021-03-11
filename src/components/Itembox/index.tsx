import React, { useEffect, useState } from 'react'
import { ProjectProps } from '../../assets/data'
import './itembox.css'

const getImageURL = (image:string, callback: Function) => {
    const image_name = image.length ? `${image.toLowerCase()}-mockup.jpg` : 'default.jpg'
    return import(`../../assets/images/${image_name}`).then(image => callback(image.default))
}

const Link = ({href, children}: {href: string, children: React.ReactNode}) => {
    if(!href)
        return <div className='itembox-content-wrapper'>{children}</div>
    return <a href={href} target='_blank' rel='noreferrer' className='itembox-content-wrapper'>{children}</a>
}

const Itembox = ({company, description, image, label, link, project, stack, tasks}: ProjectProps) => {
    const [url, updateURL] = useState('')
    const isDesktop = window.innerWidth > 1201
    
    useEffect(() => {
        getImageURL(image, updateURL)
    }, [image])

    return (
        <div className='itembox-wrapper'>
            <Link href={link}>
                <img className='itembox-image' src={url} alt={project} />
                <h2 className='itembox-title'>{project}</h2>
                <p className='itembox-content'>
                    {description}
                    {tasks}
                    <span className='itembox-footer'><b>Stack:</b> {stack}</span>
                </p>
            </Link>
            {isDesktop && link && <a href={link} target='_blank' rel='noreferrer' className='itembox-overlay'>demo</a>}
        </div>
    )
}

export default Itembox;