const Home = () => {
    return (
        <>
            <div className="home min-h-screen pt-5" style={{ background: 'url("https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat' }}>
                <div className="container mx-auto px-12">
                    <h1 className="mt-24 font-mono text-2xl text-white text-center" style={{ fontSize: '86px', lineHeight: '86px' }}>Welcome to Our<br /> Restaurant</h1>
                </div>
            </div>
        </>
    );
}

export default Home;