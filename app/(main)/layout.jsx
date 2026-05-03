const AuthLayout = ({ children }) => {
    return (
        <div className="h-100 w-100" style={{background:"pink"}} >
            <div className="h-100 w-100">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;