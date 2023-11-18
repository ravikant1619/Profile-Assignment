import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="name-logo">
                <img src="https://ugc.production.linktr.ee/gYmMqwKSvilFcYmulthg_AvQOEngi6D3asiow?io=true&size=avatar-v1_0" alt="logo" />
                <h2>Stories</h2>
            </div>
            <div className="menu">
                <a href="/">Courses</a>
            </div>
        </nav>
    )
}

export default Navbar;