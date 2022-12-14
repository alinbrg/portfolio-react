import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { useTranslation } from "react-i18next";

export default function Skills() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const { t } = useTranslation();

	return (
		<section className="skill" id="skill">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>{t("skills")}</h2>
							<p>{t("skills_desc")}</p>
						</div>
						<Carousel
							responsive={responsive}
							infinite={true}
							className="skill-slider"
						>
							<div className="item">
								<img src={meter1} alt="web development" />
								<h5>Web Development</h5>
							</div>
							<div className="item">
								<img src={meter2} alt="front-end web development" />
								<h5>Front-End Development</h5>
							</div>
							<div className="item">
								<img src={meter3} alt="javascript" />
								<h5>Javascript</h5>
							</div>
						</Carousel>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-left"
				src={colorSharp}
				alt="background "
			/>
		</section>
	);
}
