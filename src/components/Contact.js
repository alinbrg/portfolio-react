import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import contactImg from "../assets/img/contact-img.svg";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// sendMessages("1", "alina", "breg", "alina@gmail.com", "577952060", "message");

export default function Contact() {
	const firebaseConfig = {
		apiKey: "AIzaSyDX0vkyZuWCDrYFkti52LGNywoc0AmNg1Y",
		authDomain: "portfolio-react-6d6cd.firebaseapp.com",
		databaseURL: "https://portfolio-react-6d6cd-default-rtdb.firebaseio.com",
		projectId: "portfolio-react-6d6cd",
		storageBucket: "portfolio-react-6d6cd.appspot.com",
		messagingSenderId: "391983614726",
		appId: "1:391983614726:web:ac096e20d89c8149ed2c87",
		measurementId: "G-PJH6WM0G32",
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	const db = getDatabase(app);

	const { t } = useTranslation();
	const formInitialValues = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};
	const [formValues, setformValues] = useState(formInitialValues);
	const [buttonText, setButtonText] = useState("Send");
	const [status, setStatus] = useState({});

	function onFormUpdate(field, value) {
		setformValues({
			...formValues,
			[field]: value,
		});
	}

	function sendMessages(messageId, firstName, lastName, email, phone, message) {
		set(ref(db, "messages/" + messageId), {
			firstName,
			lastName,
			email,
			phone,
			message,
		})
			.then(() => {
				// Data saved successfully!
				setStatus({
					success: true,
					message: "Message saved successfully! ",
				});
			})
			.catch((error) => {
				// The write failed...
				setStatus({
					success: false,
					message: "Please try again",
				});
			});
	}

	function handleSubmit(e) {
		e.preventDefault();
		setButtonText("Sending...");

		const messageId = new Date().getTime();
		// console.log({ ...formValues }, messageId);
		sendMessages(
			messageId,
			formValues.firstName,
			formValues.lastName,
			formValues.email,
			formValues.phone,
			formValues.message
		);

		setformValues(formInitialValues);
		setButtonText("Send");
	}

	return (
		<section className="contact" id="contact">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<img src={contactImg} alt="contact us" />
					</Col>
					<Col md={6}>
						<h2>{t("get_in_touch")}</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className="px-1">
									<input
										type="text"
										value={formValues.firstName}
										placeholder="First Name"
										onChange={(e) => onFormUpdate("firstName", e.target.value)}
										required
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="text"
										value={formValues.lastName}
										placeholder="Last Name"
										onChange={(e) => onFormUpdate("lastName", e.target.value)}
										required
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="email"
										value={formValues.email}
										placeholder="Email"
										onChange={(e) => onFormUpdate("email", e.target.value)}
										required
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="tel"
										value={formValues.phone}
										placeholder="Phone"
										onChange={(e) => onFormUpdate("phone", e.target.value)}
										required
									/>
								</Col>
								<Col>
									<textarea
										row="6"
										value={formValues.message}
										placeholder="Message"
										onChange={(e) => onFormUpdate("message", e.target.value)}
									/>
									<button type="submit">
										<span>{buttonText}</span>
									</button>
								</Col>
								{status.message && (
									<Col>
										<p
											className={
												status.success === false ? "danger" : "success"
											}
										>
											{status.message}
										</p>
									</Col>
								)}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
