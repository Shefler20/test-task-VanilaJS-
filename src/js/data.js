import marketing1 from "../assets/images/image1.jpg";
import marketing2 from "../assets/images/image2.jpg";
import marketing3 from "../assets/images/image3.jpg";
import marketing4 from "../assets/images/image4.jpg";
import marketing5 from "../assets/images/image5.jpg";
import marketing6 from "../assets/images/image6.jpg";
import marketing7 from "../assets/images/image7.jpg";
import marketing8 from "../assets/images/image8.jpg";
import marketing9 from "../assets/images/image9.jpg";

export const courses = [
    { title: "The Ultimate Google Ads Training Course", category: "marketing", price: "$100", author: "Jerome Bell", image: marketing1 },
    { title: "Product Management Fundamentals", category: "management", price: "$480", author: "Marvin McKinney", image: marketing2 },
    { title: "HR  Management and Analytics", category: "hr-recruiting", price: "$200", author: "Leslie Alexander Li", image: marketing3 },

    { title: "Brand Management & PR Communications", category: "marketing", price: "$530", author: "Kristin Watson", image: marketing9 },
    { title: "Graphic Design Basic", category: "design", price: "$500", author: "Guy Hawkins", image: marketing8 },
    { title: "Business Development Management", category: "management", price: "$400", author: "Dianne Russell", image: marketing4 },

    { title: "Highload Software Architecture", category: "development", price: "$600", author: "Brooklyn Simmons", image: marketing5 },
    { title: "Human Resources – Selection and Recruitment", category: "hr-recruiting", price: "$150", author: "Kathryn Murphy", image: marketing6 },
    { title: "User Experience. Human-centered Design", category: "design", price: "$240", author: "Cody Fisher", image: marketing7 },

    {
        title: "HR Talent Acquisition Strategy",
        category: "hr-recruiting",
        price: "$180",
        author: "Jenny Wilson",
        image: marketing1,
    },
    {
        title: "People Analytics Advanced",
        category: "hr-recruiting",
        price: "$220",
        author: "Robert Fox",
        image: marketing2,
    },
    {
        title: "Recruitment Interview Techniques",
        category: "hr-recruiting",
        price: "$160",
        author: "Devon Lane",
        image: marketing3,
    },

    {
        title: "Frontend Performance Optimization",
        category: "development",
        price: "$190",
        author: "Cody Fisher",
        image: marketing4,
    },
    {
        title: "Advanced React Patterns",
        category: "development",
        price: "$250",
        author: "Wade Warren",
        image: marketing5,
    },
    {
        title: "Node.js Backend Basics",
        category: "development",
        price: "$210",
        author: "Jane Cooper",
        image: marketing6,
    },

    {
        title: "SEO Growth Marketing",
        category: "marketing",
        price: "$170",
        author: "Albert Flores",
        image: marketing7,
    },
    {
        title: "Social Media Strategy",
        category: "marketing",
        price: "$160",
        author: "Floyd Miles",
        image: marketing8,
    },
];

export const categoryLabels = {
    "marketing": "Marketing",
    "management": "Management",
    "hr-recruiting": "HR & Recruiting",
    "design": "Design",
    "development": "Development",
};