export const metadata = {
    title: 'Security Write-ups',
    description: 'CTF and security-related write-ups by me.',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Security Write-ups</h1>

            <ul className="list-decimal list-inside space-y-6">
                {/* Write-up 1: CTF Challenges */}
                <li>
                    <p className="inline font-bold text-xl mb-2">CTF Challenges Write-up</p>
                    <p className=" text-gray-200 mb-2">
                        This write-up covers solutions for various CTF challenges, including steganography, recursive zip files, RSA attacks, and OSINT. It provides an in-depth analysis of each challenge and the techniques used to solve them.
                    </p>
                    <a
                        href="/writeups/A_Scuffed_CTF_Walkthrough.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Download CTF Write-up Presentation PDF
                    </a>
                </li>

                {/* Write-up 2: Software Security Labs */}
                <li>
                    <h2 className="inline font-bold text-xl mb-2">Software Security Labs</h2>
                    <ul className="list-disc list-inside ml-4 space-y-4">
                        {/* Lab 1 */}
                        <li>
                            <h3 className="inline font-semibold text-lg">Lab 1: Buffer Overflow and Shellcode Injection</h3>
                            <p className="text-gray-200">
                                This lab demonstrates the exploitation of buffer overflow vulnerabilities and the crafting of shellcode for code injection.
                            </p>
                            <a
                                href="/softwaresecurityclass/lab1.docx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mr-4"
                            >
                                Problem Statement
                            </a>
                            <a
                                href="/softwaresecurityclass/SoftwareSecurityLab3Report.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Write-up
                            </a>
                        </li>
                        {/* Lab 2 */}
                        <li>
                            <h3 className="inline font-semibold text-lg">Lab 2: Static Analysis of API Usages in Java Classes using Soot</h3>
                            <p className="text-gray-200">
                                This lab explores static analysis techniques using the Soot framework to evaluate API usage in Java classes for identifying security flaws.
                            </p>
                            <a
                                href="/softwaresecurityclass/lab2.docx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mr-4"
                            >
                                Problem Statement
                            </a>
                            <a
                                href="/softwaresecurityclass/SoftwareSecurityLab3Report.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Write-up
                            </a>
                        </li>
                        {/* Lab 3 */}
                        <li>
                            <h3 className="inline font-semibold text-lg">Lab 3: Symbolic Execution for Backdoor Discovery</h3>
                            <p className="text-gray-200">
                                This lab focuses on using symbolic execution with angr to analyze firmware for potential backdoors, demonstrating how to detect and understand hidden malicious behavior.
                            </p>
                            <a
                                href="/softwaresecurityclass/SoftwareSecurityLab3Report.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mr-4"
                            >
                                Problem Statement
                            </a>
                            <a
                                href="/labs/symbolic-execution-writeup.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Write-up
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
