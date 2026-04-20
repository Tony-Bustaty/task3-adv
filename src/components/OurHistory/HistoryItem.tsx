interface HistoryItemProps {
 item:{
     year: number;
  title: string;
  description: string;
 }
}
function HistoryItem({item:{description,title,year}}:HistoryItemProps) {
  return (
    <div className="timeline-item">
        <div className="timeline-dot left"></div>
        <div className="timeline-dot right"></div>
        <div className="year-box">
              <div className="year-icon">
                <img src="/icons/AbstractDesign.png" alt="squares" />
              </div>
              <span className="year-text">{year}</span>
            </div>
              <div className="timeline-content">
              <h3 className="timeline-title">{title}</h3>
              <p className="timeline-description">{description}</p>
            </div>
    </div>
  )
}

export default HistoryItem