const containerStyle = { 
    backgroundColor: '#0639a0ff',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif'
};

const cardStyle = {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    color: '#333'
};

function Home(){
    return (
        <div style={containerStyle}>

            <div style={cardStyle}>
                <h1>Site em construção</h1>
                <p>volte em alguns meses para ver o site completo.</p>
            </div>

        </div>
    )
}

export default Home