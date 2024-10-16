export const metadata = {
    title: 'Conversation Design',
    description: 'Check out my CxD projects',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">write-ups</h1>

            <div className="space-y-8">
                {/* Case Study 1: Movie Recommendation Agent */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="font-bold text-gray-600 text-xl mb-4">Movie Recommendation Agent</h2>
                    <p className="text-gray-600 mb-4">
                        This case study explores the design of a movie recommendation agent, leveraging conversational AI to offer personalized movie suggestions based on user preferences across multiple streaming service platforms. The project aimed to enhance user experience, increase engagement, and reduce churn.
                    </p>
                    <a
                        href="/movie-recommendation-case-study.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Download Case Study PDF
                    </a>
                    <br />
                    <a
                        href="https://www.behance.net/gallery/210311333/Conversation-Design-Case-Study-Recommendation-Agent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Case Study on Behance
                    </a>
                </div>

                {/* Case Study 2: PWA Aggregator and Educator */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-gray-600 font-bold text-xl mb-4">PWA Aggregator and Educator for Cantonica</h2>
                    <p className="text-gray-600 mb-4">
                        This case study focuses on a PWA aggregator and educational platform aimed at increasing PWA adoption and providing PWA access in resource-constrained areas.
                        <br />
                        <em>(Currently under construction)</em>
                    </p>
                </div>
            </div>
        </section>
    )
}
