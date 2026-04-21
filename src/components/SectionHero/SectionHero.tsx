import TopicMessage from "../ui/TopicMessage";
interface SectionHeroProps{
    message:string,
    title:string,
    description:string
}
 import "./SectionHero.css"
 function SectionHero({description,message,title}:SectionHeroProps) {

   return (
    <section className="section-hero">
      <div className="image-container">
        <img src="/assets/squares-with-shadows.png" alt="squares" />
      </div>
      <div className="content">
      <div className="left-side">
        <TopicMessage message={message}/>
        <h1>{title}</h1>
      </div>
      <div className="right-side">
        <p>
         {description}
        </p>
      </div>
      </div>
    </section>
   )
 }
 
 export default SectionHero