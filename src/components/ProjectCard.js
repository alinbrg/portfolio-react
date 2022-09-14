import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl }) {
	return (
		<Col sm={6} md={4} className="proj-imgbx">
			<img src={imgUrl} alt="project" />
			<div className="proj-txtx">
				<h4>{title}</h4>
				<span>{description}</span>
			</div>
		</Col>
	);
}
