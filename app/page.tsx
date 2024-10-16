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
        Check out my <a href="/projects" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> projects here</a> and <a href="/writeups" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">my CTF writeups here</a>.
      </p>

      {/* Skills Section */}
      {/* Skills Section */}
      <section className="my-10">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vulnerability Assessment Tools */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Vulnerability Assessment Tools</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>Burp Suite, sqlmap, Cyberchef, pwntools, FactorDB, OWASP ZAP, Fuzzing</li>
            </ul>
          </div>

          {/* Fuzzing */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Fuzzing</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>AFL, AFL++, LibFuzzer, Honggfuzz, Coverage Analysis, Sanitizers (ASan, MSan, TSan)</li>
            </ul>
          </div>

          {/* Code Analysis */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Code Analysis</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>GDB (PEDA, pwndbg), Valgrind, CppCheck, Veracode, Flawfinder</li>
            </ul>
          </div>

          {/* Secure Coding Practices */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Secure Coding Practices</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>OWASP Top 10, SQLi, XSS, CSRF, SAST, DAST</li>
            </ul>
          </div>

          {/* Exploitation */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Exploitation</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>ROP, Format String, Dynamic Allocator, Kernel Exploits, Shellcode, Reverse Engineering, Race Conditions</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Languages</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>C, C#, Python, JavaScript, Assembly (x86-64)</li>
            </ul>
          </div>

          {/* Cloud Platforms */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Cloud Platforms</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>Google Cloud Platform, AWS, Microsoft Azure</li>
            </ul>
          </div>

          {/* Web Frameworks/APIs */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Web Frameworks/APIs</h3>
            <ul className="list-disctext-gray-800 list-inside ml-4 space-y-1">
              <li>ASP.NET, .NET Core, React.js, Django, Node.js, Express.js, Swagger, Postman</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Databases</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>SQL, NoSQL (MongoDB), Vector Databases (Pinecone, AstraDB, ChromaDB)</li>
            </ul>
          </div>

          {/* DevOps & CI/CD */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">DevOps & CI/CD</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>Docker, Kubernetes, Azure DevOps, GitHub Actions</li>
            </ul>
          </div>

          {/* Conversational AI */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Conversational AI</h3>
            <ul className="list-disc text-gray-800 list-inside ml-4 space-y-1">
              <li>LangChain, Microsoft Bot Framework, Dialogflow CX, Kore.ai, Hugging Face, RAG, Fine-tuning, RLHF</li>
            </ul>
          </div>
        </div>
      </section>



      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
