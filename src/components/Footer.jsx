export default function Footer() {
    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        color: '#ffffff', // White text color
        textAlign: 'center',
        padding: '1rem 0', // Padding for top and bottom
    };

    return (
        <footer className="bg-dark" style={footerStyle}>
            <div className="container">
                <span>© 2024 Alex Lapierre</span>
            </div>
        </footer>
    );
}