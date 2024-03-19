import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
	{
		id: 1,
		name: "Expense Manager",
		description:
			"Introducing our cutting-edge bill-splitting platform, designed to effortlessly divide expenses among friends and groups. With personalized login authentication, seamless expense management, and automated bill splitting, our platform simplifies the process of managing shared finances. Say goodbye to manual calculations and hello to hassle-free expense tracking. Try it now and experience the convenience firsthand!",
		tools: [
			"HTML",
			"Bootstrap",
			"Thymeleaf",
			"Java",
			"Springboot",
			"MySQL",
		],
		code: "",
		demo: "",
		image: crefin,
	},
	{
		id: 2,
		name: "Blog Application",
		description:
			"The Blog App REST APIs provide a robust backend solution for managing blog-related functionalities. Built with Spring Boot, the APIs ensure seamless integration with Spring Security for authentication using JWT tokens. Data persistence is handled through Spring Data JPA with Hibernate, backed by MySQL. DTOs and the Model Mapper Library streamline data transfer and mapping. Comprehensive API validation and exception handling guarantee efficient error management. AOP logging support ensures detailed logging. Additionally, Swagger UI documentation offers clear insights into API endpoints.",
		tools: [
			"Spring Boot",
			"JWT",
			"MySQL",
			"API Validation",
			"Exception Handling",
			"AOP logging support",
			"Swagger UI",
		],
		code: "",
		demo: "",
		image: travel,
	},
	{
		id: 3,
		name: "Sorting Visualizer",
		description:
			"Our Sorting Algorithms Visualization Tool is a web-based platform designed to provide visual representations of sorting algorithms and facilitate comparative analysis of their execution time. With a focus on algorithms like Bubble Sort, Selection Sort, and more, users can visualize the sorting process in action, enhancing their understanding and enabling them to compare the performance of different algorithms. This tool empowers users to gain insights into sorting algorithms' behavior and make informed decisions when selecting the most suitable algorithm for their needs.",
		tools: ["HTML", "CSS", "JavaScript"],
		code: "",
		demo: "",
		image: realEstate,
	},
	{
		id: 4,
		name: "Rock Paper Scissors Game",
		description:
			"Experience the classic Rock Paper Scissors game brought to life with our HTML, CSS, and JavaScript implementation. Engage in thrilling battles of wits against the computer. Our game offers a simple yet addictive interface, allowing players to select their moves and witness the outcome in real-time. Whether you're looking for a quick diversion or a competitive showdown, our Rock Paper Scissors Game promises hours of entertainment and fun.",
		tools: ["HTML", "CSS", "JavaScript"],
		code: "",
		demo: "",
		image: ayla,
	},
];
