import React from "react";

export default function NavBar() {

	return <nav className="navbar navbar-dark bg-dark d-flex flex-row">
		<div className="navbar-brand">
			Acme
		</div>
		<div className="navbar-nav ml-auto d-flex flex-row">
			<div className="nav-item mx-3">
				<a className="nav-link" href="/">Home</a>
			</div>
			<div className="nav-item mx-3">
				<a className="nav-link" href="/contact">Contact</a>
			</div>
			<div className="nav-item mx-3">
				<a className="nav-link" href="/complain">Complain</a>
			</div>
		</div>
	</nav>
}
