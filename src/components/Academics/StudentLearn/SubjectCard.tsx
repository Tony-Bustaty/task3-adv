interface SubjectCardProps{
    data:{
        image:string,
        title:string,
        description:string,
    }
}
function SubjectCard({data:{description,image,title}}:SubjectCardProps) {
  return (
    <div className="subject-card">
        <div className="column"></div>
        <div className="image-container">
            <img src={image} alt="subject"/>
        </div>
        <div className="content">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SubjectCard