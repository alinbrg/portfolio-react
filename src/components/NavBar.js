import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.svg";
import { useTranslation } from "react-i18next";

export default function NavBar() {
	const [activeLink, setActiveLink] = useState("home");

	const [scrolled, setScrolled] = useState(false);

	const { t, i18n } = useTranslation();

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navabar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={
								activeLink === "home" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("home")}
						>
							{t("home")}
						</Nav.Link>
						<Nav.Link
							href="#skills"
							className={
								activeLink === "skills" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("skills")}
						>
							{t("skills")}
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={
								activeLink === "projects" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("projects")}
						>
							{t("projects")}
						</Nav.Link>
					</Nav>
					<div className="lang-btns">
						<button onClick={() => i18n.changeLanguage("en")}>en</button>
						<button onClick={() => i18n.changeLanguage("ka")}>ka</button>
					</div>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="#">
								<img src={navIcon1} alt="" />
							</a>
							<a href="#">
								<img src={navIcon2} alt="" />
							</a>
							<a href="#">
								<img src={navIcon3} alt="" />
							</a>
						</div>
						<button className="vvd" onClick={() => console.log("connect")}>
							<span>{t("lets_connect")}</span>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
