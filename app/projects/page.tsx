// import { BlogPosts } from 'app/components/posts'

export const metadata = {
    title: 'projects',
    description: 'Check out my projects.',
}

export default function Page() {
    const security_projects = [
        {
            name: "Discouraging Spam Attacks with Email Payment Stamps",
            description:
                "This project aims to enhance email security by implementing a HashCash-based system to discourage spam and DDoS attacks.",
            image: "/project_section/movielangai.png",
            github: "https://github.com/cystema/movielang-ai",
            link: "https://movielang.shubh.ink/"
        },
        {
            name: "Finding CVEs through Firmware Emulation",
            description:
                "This project focuses on identifying Common Vulnerabilities and Exposures (CVEs) in firmware images using emulation techniques.",
            image: "/project_section/movielangai.png",
            // github: "https://github.com/cystema/movielang-ai",
            link: "https://movielang.shubh.ink/"
        },
        {
            name: "Mini-Blockchain",
            description:
                "An implementation of a Blockchain, using Python 3 and Flask.",
            image: "/project_section/blockchain.png",
            github: "https://github.com/cystema/mini-blockchain",
        },
    ]
    const conversational_ai_projects = [
        {
            name: "MovieLang AI: Movies with Langflow",
            description:
                "Conversational AI tool offering seamless, intelligent movie recommendations.",
            image: "/project_section/movielangai.png",
            github: "https://github.com/cystema/movielang-ai",
            link: "https://movielang.shubh.ink/"
        },
        {
            name: "Movie AI Assistant",
            description:
                "Intent-based conversational agent providing personalized movie recommendations.",
            image: "/project_section/movieassistant.png",
            github: "https://github.com/cystema/movieassistant",
            link: "https://sites.google.com/view/movieassistant/home",
        },
        {
            name: "Insight Engine: PDF AI",
            description:
                "Conversational agent that allows conversations with PDF documents.",
            image: "/project_section/pdfassistant.png",
            github: "https://github.com/cystema/pdf-reader-langchain-streamlit",
            link: "https://pdf-insight-engine-langchain.streamlit.app/"
        },
        {
            name: "Insight Engine: CSV AI ",
            description:
                "Conversational agent empowering users to upload and query with their CSV data.",
            image: "/project_section/csvai.png",
            github: "https://github.com/cystema/langchain-panel-csv-query",
            link: "https://tight-water-9718.ploomberapp.io/app"
        },
        {
            name: "WikiLam: Wiki AI",
            description:
                "Conversational agent that allows indexing, querying and interaction with indexed Wikipedia pages.",
            image: "/project_section/wikilam.png",
            github: "https://github.com/cystema/wikilam",
        },
        {
            name: "Langchain Hierarchical Planning Agent",
            description:
                "Hierarchical API Planner to intelligently use an API spec to answer complex user queries.",
            image: "/project_section/hpa.png",
            github: "https://github.com/cystema/langchain-openapi-tmdb",
        },
    ];

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">projects i've worked on</h1>
            <div className="space-y-8">
                {conversational_ai_projects.map((project, index) => (
                    <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-full md:w-2/3">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 flex flex-col justify-between w-full md:w-1/3 flex-grow">
                            {/* <h4 className="text-gray-600 font-bold text-2xl mb-2">{project.name}</h4> */}
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex items-center space-x-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
