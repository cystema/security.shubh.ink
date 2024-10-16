import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div>
        <h3 className="text-2xl font-semibold tracking-tighter">
          Hi, I'm Shubham.
        </h3>
        <h3 className="mb-4 text-2xl font-semibold tracking-tighter">
          I'm a Software Developer focused on Software and Systems Security.
        </h3>
        {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          I design visual, voice, and conversational experiences for chatbots, virtual assistants, and conversational agents.
        </h1> */}
      </div>


      <p className="mb-4 text-lg">
        Check out my <a href="/projects" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> projects here</a> and <a href="/writeups" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">some CTF writeups here.</a>.
      </p>

      {/* Skills Section */}
      <section className="my-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tighter">Skills</h2>
        <div>
          <h3 className="text-xl font-semibold mb-2">Conversation Design</h3>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Writing Dialog: clear, focused, empathetic.</li>
            <li>Building Complex Flows: simple directed dialog, complex modularization, and flexibility for growth.</li>
            <li>NLP: Intent-matching and classification, NLP, and integrations with DialogFlow, Kore.ai, and Microsoft Bot Framework.</li>
            <li>Managing backend integrations within the conversation.</li>
            <li>Multimodal Design: text, voice, custom payloads for visual interfaces.</li>
          </ul>
          <p className="mb-4">
            <em>Examples: financial services agents, user application portal helpers, facts and questionnaire bots, recommendation agents, customer service bots</em>
          </p>

        </div>
      </section>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
