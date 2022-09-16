import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/astr2.png";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Banner() {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["Web Developer", "Front-End Developer"];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	const { t } = useTranslation();

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);
		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		// console.log(i);
		let fullText = toRotate[i];
		// console.log(fullText);
		let updateText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updateText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updateText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updateText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">{t("welcome")}</span>
						<h1>
							{`Hi I'm Alina`}
							<span className="wrap">, {text}</span>
						</h1>
						<p>{t("about_me")}</p>
						<button onClick={() => console.log("connect")}>
							{t("lets_connect")} <ArrowRightCircle size={25} />
						</button>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt="Header Image" />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
