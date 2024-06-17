export const langs = [
	{ id: 0, name: 'React JS', icon: '/icons/react.jpeg' },
	{ id: 1, name: 'Node JS', icon: '/icons/nodejs.jpeg' },
	{ id: 2, name: 'Tailwind CSS', icon: '/icons/tailwindcss.jpeg' },
	{ id: 3, name: 'Typescript', icon: '/icons/typescript.png' },
	{ id: 3, name: 'GraphQl', icon: '/icons/graphql.png' },
	{ id: 4, name: 'Bootstrap', icon: '/icons/bootstrap.jpeg' },
	{ id: 5, name: 'HTML 5', icon: '/icons/html5.png' },
	{ id: 6, name: 'CSS 3', icon: '/icons/css3.png' },
	{ id: 7, name: 'Mongo DB', icon: '/icons/mongodb.jpeg' },
	{ id: 8, name: 'Git', icon: '/icons/git.png' },
	{ id: 9, name: 'MySQL', icon: '/icons/mysql.png' },
	{ id: 10, name: 'Sequelize', icon: '/icons/sequelize.png' },
	{ id: 11, name: 'Python', icon: '/icons/python.png' },
	{ id: 13, name: 'Docker', icon: '/icons/docker.png' },
	{ id: 14, name: 'Heroku', icon: '/icons/heroku.png' },
	{ id: 15, name: 'Bitbucket', icon: '/icons/bitbucket.png' },
	{ id: 16, name: 'AWS', icon: '/icons/aws.png' },
	{ id: 17, name: 'Yarn', icon: '/icons/yarn.png' },
]

export interface Project {
	name: string,
	image: string,
	link: string,
	id: number,
	style: {
		col: string,
		md: string,
		row: string
	}
	category: string
}

export const projects: Project[] = [
	{
		name: "Flight Local Web App",
		image: "/project-8.jpg",
		link: "",
		style: {
			col: "col-span-1",
			row: "",
			md: "",
		},
		id: 1,
		category: "Web Development"
	},
	{
		name: "Travel Web App",
		image: "/project-7.webp",
		link: "",
		style: {
			col: "col-span-1",
			md: "",
			row: ""
		},
		id: 2,
		category: "Data Visualization"
	},
	{
		name: "Rental Application",
		image: "/project-2.jpg",
		link: "",
		style: {
			col: "col-span-1",
			md: "",
			row: ""
		},
		id: 3,
		category: "Web Development"
	},
	{
		name: "Furniture Web Application",
		image: "/project-4.webp",
		link: "",
		style: {
			col: "col-span-1",
			md: "",
			row: ""
		},
		id: 4,
		category: "Web Development"
	},
	{
		name: "Real Estate Web App",
		image: "/project-5.webp",
		link: "",
		style: {
			col: "col-span-1",
			row: "row-span-1",
			md: "col-span-2",
		},
		id: 5,
		category: "Web Development"
	},
	{
		name: "Service Provider Web App",
		image: "/project.jpg",
		link: "",
		style: {
			col: "col-span-1",
			md: "",
			row: ""
		},
		id: 6,
		category: "Data Visualization"
	},
	{
		name: "Project Tracker Web App",
		image: "/project-6.webp",
		link: "",
		style: {
			col: "col-span-1",
			md: "",
			row: ""
		},
		id: 7,
		category: "Web Development"
	},
	{
		name: "E-Commerce Web App",
		image: "/project-8.jpg",
		link: "",
		style: {
			col: "col-span-1",
			md: "",
			row: ""
		},
		id: 8,
		category: "Web Development"
	},
]