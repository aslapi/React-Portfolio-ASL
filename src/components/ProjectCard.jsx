export default function ProjectCard({ title, image, github, deployed }) {
    return (
        <div style={{
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          padding: '16px', 
          margin: '16px',
          marginBottom: "32px", 
          width: 'calc(47%)', // Adjust width and margin for spacing
          height: "750px",
          boxSizing: 'border-box', 
          backgroundColor: '#A3A4B0', 
          textAlign: 'center' 
        }}>
          <h2>{title}</h2>
          <a href={deployed}><img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} /></a>
          <p>
            <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </p>
        </div>
      );
    }