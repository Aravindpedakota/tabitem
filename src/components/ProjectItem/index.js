import './index.css'

const ProjectItem=(props)=>{
    const {projectDetails}= props
    const{imageURL,title,description}=projectDetails
    return(
        <li className='project-item'>
            <img src={imageURL} alt={title} className='image'/>
            <p className='project-name'>{title}</p>
            <p className='description'>{description}</p>
        </li>
    )
}

export default ProjectItem