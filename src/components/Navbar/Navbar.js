import React from "react";

const Navbar = () => {

    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <img style={{ padding: 10 }} src="https://uploaddeimagens.com.br/images/003/748/885/full/image-removebg-preview.png?1646093748" width={50} />
                <a className="navbar-brand" href="#!">DASHTODOTA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    </ul>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar;