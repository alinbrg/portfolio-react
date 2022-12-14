import { Col, Container, Nav, Row, Tab, TabContainer } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import ProjectCard from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import { useTranslation } from "react-i18next";

export default function Projects() {
	const { t } = useTranslation();

	const projects = [
		{
			title: "single landing page",
			description: "web development",
			imgUrl: projImg1,
		},
		{
			title: "simple responsive page",
			description: "web development",
			imgUrl: projImg1,
		},
		{
			title: "single landing page",
			description: "web development",
			imgUrl: projImg1,
		},
		{
			title: "single landing page",
			description: "web development",
			imgUrl: projImg1,
		},
		{
			title: "single landing page",
			description: "web development",
			imgUrl: projImg1,
		},
		{
			title: "single landing page",
			description: "web development",
			imgUrl: projImg1,
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col>
						<h2>{t("projects")}</h2>
						<p>{t("projects_desc")}</p>

						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills">
								<Nav.Item>
									<Nav.Link eventKey="first">Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab 2</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab 3</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>lorem</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Row>lorem</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img src={colorSharp2} className="background-image-right" />
		</section>
	);
}
