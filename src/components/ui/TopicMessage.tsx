interface TopicMessageProps {
  message: string;
}
function TopicMessage({ message }: TopicMessageProps) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1rem 2rem",
        border: "2px solid #000",
        borderRadius: "6px",
        width:'fit-content'
      }}
    >
      <p
        style={{
          fontFamily: "Outfit",
          fontWeight: 500,
          fontStyle: "Medium",
          fontSize: "1.6rem",
          margin:0
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default TopicMessage;
