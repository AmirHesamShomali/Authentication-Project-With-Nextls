const AuthLayout = ({ children }) => {
    return (
        <div className='d-grid custom-gradient align-content-center' style={{ height: '100vh', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className='d-none d-lg-block' style={{ gridColumn: '2 / 3', height: '100%' }}>
                    {children}
            </div>
        </div>

    );
};

export default AuthLayout;