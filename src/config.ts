export const siteConfig = {
  name: "Zhanbolot (Zhan) Eraliev",
  title: "Software Engineer | Greater Seattle Area | WA",
  description: "Portfolio website of Zhanbolot",
  accentColor: "#1d4ed8",
  social: {
    email: "ezhanbolot@gmail.com",
    linkedin: "https://linkedin.com/in/zhanbolot-eraliev-317a28173",
    twitter: "https://x.com/zhanbolot_erali",
    github: "https://github.com/zhanboloteraliev",
  },
  aboutMe:
    "Full-Stack Software Engineer specializing in AI-driven applications. Proven experience building and deploying scalable RAG systems using Python, FastAPI, LangChain, and Pinecone. Proficient in front-end development with React and cloud deployment using AWS and Docker. <a href='/ZhanbolotEralievResume.pdf' target='_blank' style='color: #1d4ed8; font-weight: bold;'>Download my Resume</a>",
  skills: ["RAG", "Python", "Node.js", "AWS", "JavaScript", "Docker"],
  projects: [
    {
      name: "Kalys Bot",
      description:
        "Engineered a RAG-based AI system for legal Question-Answering, leveraging vector databases of the entire Kyrgyz legal code (statutes, codes, and regulations) to provide hallucination-mitigated, authoritative legal interpretations.",
      link: "https://kalys.onrender.com",
      skills: ["RAG", "LangChain", "Pinecone", "HyDE", "Python", "Tesseract OCR", "JavaScript", "HTML/CSS", "TailwindCSS", "FastAPI"],
    },
    {
      name: "AI Visual Novel Creator",
      description:
        "Won 'Best Use of AI Award' at the CodeDay Hackathon for developing a multimodal application. Integrated Stability AI for real-time image synthesis and Google Gemini for dynamic, context-aware dialogue generation.",
      link: "https://showcase.codeday.org/project/cmhgqspw91903j5my04z26yk6",
      skills: ["Python", "RenPy", "FastAPI"],
    },
    {
      name: "Poly Predictor Kit",
      description:
        "Secured 1st Place at QuackHacks by developing a browser extension for Polymarket users. The tool democratizes risk analysis, transforming complex market data into accessible, actionable insights for novice traders.",
      link: "https://devpost.com/software/poly-predictor-kit",
      skills: ["Python", "Snowflake", "GraphQL", "FastAPI"],
    },
  ],
  experience: [
    {
      company: "Supreme Court of Kyrgyz Republic",
      title: "Software Engineer Intern",
      dateRange: "Jul 2025 - Oct 2025",
      bullets: [
        "Developed and deployed RAG based AI agent 'Kalys' to analyze 19 constitutional documents, improving legal document search efficiency by 70% for a team of 50+ court employees.",
        "Engineered a data pipeline using Tesseract OCR to process over 5,000 pages of complex legal PDFs, reducing manual data entry time by 95%",
        "Implemented a Hypothetical Document Embeddings (HyDE) retrieval mechanism that enhanced context relevance by 40%",
      ],
    },
    {
      company: "KurultAI R&D Club",
      title: "Mentor & Co-Founder",
      dateRange: "Aug 2024 - Present",
      bullets: [
        "Led a 6-member team to win the Best Use of AI award at Hackathon Codeday and won 1st place at Hackathon QuackHacks",
        "Developed a curriculum on data structures and algorithms, which improved the problem-solving skills of over 30 members.",
        "Scaled club membership by 66% through targeted outreach for people and the organization of 10+ workshops and contests, attracting engineers from Google, Microsoft, and Amazon.",
      ],
    },
  ],
  education: [
    {
      school: "Lake Washington Institute of Technology",
      degree: "Bachelor of Science in Computer Science (expected in 06/2027)",
      dateRange: "2023 - 2027",
      achievements: [
        "GPA: 3.77",
        "Dean's List 3 semesters",
        "Member of Phi Theta Kappa Honor Society",
      ],
    }
  ],
};
