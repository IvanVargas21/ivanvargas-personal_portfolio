// Projects Images
import salesInventorySystem from '../../public/assets/gifs/kandylandSalesandInventory.gif';
import amazon from '../../public/assets/gifs/amazonclone.gif'
import virtualR from  '../../public/assets/gifs/virtualr_landingpage.gif'
import clsf from '../../public/assets/imgs/CLSF2.png';
import pokedex from '../../public/assets/imgs/pokedex.png';

//Projects Demo
// import calorieCounterProj from '/demos/FormValidation_CalorieCounter/index.html?url';
// import amazonProj from '/demos/javascript-amazon-project/amazon.html?url';
// import landingPageProj from '/demos/Product_LandingPage/index.html?url';
// import colorGeneratorProj from '/demos/RandomColorGenerator/index.html?url';
// import rockPaperScissorsProj from '/demos/Rock,Paper,Scissors_Game/index.html?url'; 
// import rolePlayingGameProj from '/demos/RolePlayingGame_BasicJS/index.html?url';
// import surveyFormProj from '/demos/SurveyForm_CertificationProject/index.html?url';
// import technicalDocumentationProj from '/demos/TechnicalDocumentation_Page/index.html?url';
// import pokedexProj from '/demos/Pokedex_PokeAPI/pokedex.html?url'

//Projects SVG
import phpIcon from '../../public/assets/vectors/php.svg';
import htmlIcon from '../../public/assets/vectors/html.svg';
import xamppIcon from '../../public/assets/vectors/xampp.svg';
import bootstrapIcon from '../../public/assets/vectors/bootstrap.svg';
import cssIcon from '../../public/assets/vectors/css.svg';
import javascriptIcon from '../../public/assets/vectors/javascript.svg';
import jasmineIcon from '../../public/assets/vectors/jasmine.svg'
import tailwindIcon from '../../public/assets/vectors/tailwind.svg';
import tsIcon from '../../public/assets/vectors/typescript.svg';
import nextjsIcon from '../../public/assets/vectors/next.svg';
import reactIcon from '../../public/assets/vectors/react.svg';
import muiIcon from '../../public/assets/vectors/material_ui.svg';
import axiosIcon from '../../public/assets/vectors/axios.svg';
import zodIcon from '../../public/assets/vectors/zod.svg';
import zustandIcon from '../../public/assets/vectors/zustand.svg';
import postmanIcon from '../../public/assets/vectors/postman.svg';
import expressIcon from '../../public/assets/vectors/express.svg';
import prismaIcon from '../../public/assets/vectors/prisma.svg'
import mssqlIcon from '../../public/assets/vectors/mssql.svg'

export const techIcons = {
    php: { src: phpIcon, title: 'PHP', alt: 'PHP' },
    html: { src: htmlIcon, title: 'HTML', alt: 'HTML' },
    xampp: { src: xamppIcon, title: 'XAMPP', alt: 'XAMPP' },
    bootstrap: { src: bootstrapIcon, title: 'Bootstrap', alt: 'Bootstrap' },
    css: { src: cssIcon, title: 'CSS', alt: 'CSS' },
    javascript: { src: javascriptIcon, title: 'JavaScript', alt: 'JavaScript' },
    jasmine: { src: jasmineIcon, title: 'Jasmine', alt: 'Jasmine' },
    tailwind: { src: tailwindIcon, title: 'Tailwind CSS', alt: 'Tailwind CSS' },
    typescript: { src: tsIcon, title: 'TypeScript', alt: 'TypeScript' },
    nextjs: { src: nextjsIcon, title: 'Next.js', alt: 'Next.js' },
    react: { src: reactIcon, title: 'React.js', alt: 'React.js' },
    mui: { src: muiIcon, title: 'Material UI', alt: 'Material UI' },
    axios: { src: axiosIcon, title: 'Axios', alt: 'Axios' },
    zod: { src: zodIcon, title: 'Zod', alt: 'Zod' },
    zustand: { src: zustandIcon, title: 'Zustand', alt: 'Zustand' },
    postman: { src: postmanIcon, title: 'Postman', alt: 'Postman' },
    express: { src: expressIcon, title: 'Express.js', alt: 'Express.js'},
    prisma: { src: prismaIcon, title: 'Prisma', alt: 'Prisma'},
    mssql: { src: mssqlIcon, title: 'MSSQLServer', alt: 'MSSQLServer'}
}
// projectsDetails
export const projectsDetails = [
    {
        title: "Government Agency Operations Management System",
        slug: "government-operations-management-system",
        image: "n/a",
        alt: "Government Operations Management System",
        description: "I co-developed an Operations Management System for a Philippine Government Agency using Next.js and TypeScript. I translated Figma designs into responsive MUI components, integrated REST APIs with Axios, and implemented Zustand for state management. I built dynamic dashboards featuring real-time bar/line graphs that visualized aggregated backend data based on user inputs, and collaborated in an Agile environment with backend and UI/UX teams while conducting API testing via Postman.",
        codeLink: 'n/a private repo',
        demo: 'n/a private repo',
        techStack: [tsIcon, nextjsIcon, reactIcon, muiIcon, tailwindIcon, axiosIcon, zodIcon, zustandIcon, postmanIcon, expressIcon, prismaIcon, mssqlIcon],
        techs: ['Typescript', 'Next.js', 'React.js', 'Material UI', 'Tailwind CSS', 'Axios', 'Zod', 'Zustand', 'Postman', 'Express.js', 'Prisma', 'Microsoft SQL']
    },
    {
        title: "Sales and Inventory System",
        slug: "sales-inventory-system",
        image: salesInventorySystem,
        alt: "Sales and Inventory System",
        description: "Developed as a final project for System Analysis Design, this Sales and Inventory System was initially based on a YouTube tutorial. I customized and enhanced the system to meet the specific needs of a candy store, adding features to efficiently manage inventory and sales transactions. This project aimed to provide a tailored solution for small businesses selling sweets, candies, and toys.",
        codeLink: "https://github.com/IvanVargas21/Kandyland-SalesandInventory_System",
        demo: "https://github.com/IvanVargas21/Kandyland-SalesandInventory_System",
        techStack: [phpIcon, htmlIcon, cssIcon, xamppIcon, bootstrapIcon],
        techs: ['PHP', 'HTML', 'CSS', 'XAMPP', 'Bootstrap']
    },
    {
        title: "Amazon Clone Project",
        slug: "amazon-clone-project",
        image: amazon,
        alt: "Amazon Website Clone Project",
        description: "Developed as a hands-on project to deepen my understanding of JavaScript, this Amazon Clone was built following a tutorial from the YouTube channel SuperSimple.dev. It served as an excellent opportunity to practice key JavaScript fundamentals, including working with objects, DOM manipulation, functions, Git, modules, and external libraries. The project also introduced me to testing frameworks like Jasmine, Object-Oriented Programming (OOP) concepts such as classes and inheritance, as well as foundational backend concepts like callbacks, async/await, Promises, and Fetch. This project provided a comprehensive learning experience in implementing essential programming techniques in a practical context",
        codeLink: "https://github.com/IvanVargas21/javascript-course_SuperSimpleDev",
        demo: "https://github.com/IvanVargas21/javascript-course_SuperSimpleDev",
        techStack: [htmlIcon, cssIcon, javascriptIcon, jasmineIcon],
        techs: ['HTML', 'CSS', 'JavaScript', 'Jasmine']
    },
    {
        title: "Landing Page",
        slug: "virtualr-landing-page",
        image: virtualR,
        description: "This project is a React and TailwindCSS-based landing page designed for VirtualR, a fictional platform offering tools for building VR environments. The page highlights features such as a drag-and-drop interface, real-time previews, multi-platform compatibility, and collaboration tools. It also includes detailed pricing tiers to showcase subscription options. Developing this landing page helped me grasp essential React concepts, Tailwind's utility-first CSS framework, and the principles of responsive web design",
        codeLink: "https://github.com/IvanVargas21/VirtualR_LandingPage_React-Tailwind",
        demo: "https://github.com/IvanVargas21/VirtualR_LandingPage_React-Tailwind",
        techStack: [javascriptIcon, reactIcon, tailwindIcon],
        techs: ['JavaScript', 'React.js', 'Tailwind CSS']
    },
    {
        title: "CLSF Church Website",
        slug: "church-web",
        image: clsf,
        description: "In collaboration with a groupmate, I contributed to creating a webpage for Christ the Living Stone Church as part of our Software Engineering course. My key role involved integrating a chatbot system and designing donation forms. These forms allow users to submit their email addresses for donations, triggering automated confirmation emails sent to both the userand the church admin.",
        codeLink: "https://github.com/IvanVargas21/ChurchOrganization_Webpage",
        demo: "https://github.com/IvanVargas21/ChurchOrganization_Webpage",
        techStack: [javascriptIcon, reactIcon, cssIcon],
        techs: ['JavaScript', 'React.js', 'CSS']
    },
    {
        "title": "Pokedex - PokéAPI",
        "slug": "pokedex-pokeapi",
        "image": pokedex,
        "alt": "Pokedex - PokéAPI Project",
        "description": "This Pokédex project demonstrates my understanding of JavaScript and API integration through the use of the Fetch API. By connecting to the PokéAPI, the application allows users to input a Pokémon's name and displays its corresponding image dynamically. This project highlights my skills in working with APIs, handling asynchronous JavaScript with Promises, DOM manipulation, and user input handling. It was a practical exercise to reinforce my knowledge of JavaScript fundamentals and web development best practices.",
        "codeLink": "https://github.com/IvanVargas21/async-javascript",
        "demo": "https://github.com/IvanVargas21/async-javascript",
        "techStack": [htmlIcon, cssIcon, javascriptIcon],
        "techs": ['HTML', 'CSS', 'JavaScript']
    }
];
