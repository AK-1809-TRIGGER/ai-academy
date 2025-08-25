import course_img from "../../assets/images/ai-academy_img1.jpg";
import intro1 from "../../assets/videos/intro1.mp4";

export const courseData = [
  {
    id: 1,
    title: "Data Engineering",
    type: "Specialization",
    instructor: "instructor XYZ",
    instructorTitle: "Senior Data Scientist, IBM",
    instructorImage: course_img,
    instructorLinkedIn: "https://www.linkedin.com/in/instructor-XYZ",
    instructorTwitter: "https://twitter.com/instructorXYZ",
    instructorBio:
      "instructor XYZ, Ph.D., is a senior data scientist at IBM. With over a decade of experience in AI, data engineering, and machine learning, Alex brings a wealth of practical and academic expertise to learners. He is passionate about teaching and has helped thousands of students build careers in data science.",
    instructors: [
      {
        name: "Instructor XYZ",
        title: "Senior Data Scientist, IBM",
        image: course_img,
        linkedIn: "https://www.linkedin.com/in/instructor-XYZ",
        twitter: "https://twitter.com/instructorXYZ",
        bio: "XYZ, Ph.D., is a senior data scientist at IBM...",
      },
      {
        name: "Instructor XYZ",
        title: "Senior Data Scientist, IBM",
        image: course_img,
        linkedIn: "https://www.linkedin.com/in/instructor-XYZ",
        twitter: "https://twitter.com/instructorXYZ",
        bio: "XYZ, Ph.D., is a senior data scientist at IBM...",
      },
    ],
    description:
      "Build strong foundations in data engineering by working on real-life projects, from ETL pipelines to designing scalable data warehouses.",
    image: course_img,
    duration: "4 months",
    whatYouWillLearn: [
      "Basic data analytic methods using spreadsheets",
      "SQL for data extraction and manipulation",
      "Data visualization using IBM Cognos Analytics",
      "Applying Python for data analysis",
    ],

    skills: [
      "Data Analysis",
      "Excel",
      "SQL",
      "Data Visualization",
      "Python",
      "IBM Cognos Analytics",
      "Data Analysis",
      "Excel",
      "SQL",
      "Data Visualization",
      "Python",
      "IBM Cognos Analytics",
      "Data Analysis",
      "Excel",
      "SQL",
      "Data Visualization",
      "Python",
      "IBM Cognos Analytics",
    ],
    videoUrl: "https://youtu.be/rR8KZnbu-UI?si=nl6zztJt3nEWamFe",

    faqs: [
      {
        question: "What background knowledge is required?",
        answer:
          "No prior experience is required. This specialization is designed for beginners.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
    ],
    collaborators: [
      { name: "AI-Academy", logo: openai },
      { name: "Google", logo: AWS },
    ],
    topics: ["Data Engineering", "Data Processing", "MLOps"],
    level: "Beginner",
    whyEnroll: {
      title: "Why Enroll?",
      paragraphs: [
        "Data-informed decision-making is now an essential skill for everyone, from everyday consumer choices to business decisions at all levels. As reliance on data grows, so does the need for professionals who can analyze and interpret it effectively.",
        "The Data Analytics Professional Certificate, led by industry leader Sean Barnes, equips you with the skills to manage the entire data lifecycle, from defining problems to delivering insights. With this certificate, you’ll be prepared to pursue an entry-level role in data analytics or strengthen your current role with a solid foundation in data analysis.",
        "The skills you’ll gain are in high demand, and with data science roles projected to grow 36% from 2023 to 2033 according to the U.S. Bureau of Labor Statistics, developing these skills puts you at the forefront of a data-centric world.",
      ],
      image: {
        src: course_img,
        alt: "The data analytics lifecycle",
      },
      content: [
        "You’ll begin by learning the foundations of analysis and visualization, then move on to statistical techniques that support evidence-based decision-making. Next, you’ll develop Python skills to automate workflows and analyze data at scale (no prior coding experience required). Then, you’ll work with real-world data to extract information from websites, APIs, and databases, and clean data with Python and SQL to prepare it for analysis.",
        "Finally, you’ll learn to present your analysis in ways that support real decisions through clear writing, compelling visualizations, and interactive dashboards. You’ll also prepare for the job search with practical guidance on resumes, portfolios, and interviews.",
        "Unique to this program is its integration of AI tools into the analytics workflow. You’ll learn to use large language models as a thought partner, accelerating tasks like simulation modeling, formula debugging, and data visualization. Each of the course examples comes from real-world use cases, building practical and immediately useful skills.",
      ],
    },
    syllabus: {
      courses: [
        {
          title: "Course 1: Data Analytics Foundations",
          modules: [
            {
              title: "Module 1: Data and the Data Analyst Role",
              topics: [
                "Define data and its common representations, and differentiate between structured vs. unstructured data and variable types (categorical, discrete, continuous).",
                "List common data file formats (txt, CSV, JSON, etc.) and explore data roles (analyst, engineer, scientist) and their business impact.",
                "Identify career opportunities and the components of the data ecosystem. Use large language models (LLMs) for stakeholder analysis and evaluate their strengths and weaknesses.",
              ],
            },
            {
              title: "Module 2: Using Spreadsheets for Data Analytics",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
            {
              title: "Module 3: Data Visualization",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
            {
              title: "Module 4: The Data Analytics Lifecycle",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
          ],
        },
        {
          title: "Course 2: Applied Statistics for Data Analytics",
          modules: [
            {
              title: "Module 1: Probability & Distributions",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
            {
              title: "Module 2: Inferential Statistics",
              topics: ["Variables, data types, and control flow..."],
            },
          ],
        },
        {
          title: "Course 3: Python for Data Analytics",
          modules: [
            {
              title: "Module 1: Python Basics",
              topics: ["Variables, data types, and control flow..."],
            },
            {
              title: "Module 2: Data Analysis Libraries",
              topics: ["Using NumPy and pandas for analysis..."],
            },
          ],
        },
        {
          title: "Course 4: Data I/O and Preprocessing with Python and SQL",
          modules: [
            {
              title: "Module 1: Data Input/Output",
              topics: ["Reading and writing CSV, Excel..."],
            },
            {
              title: "Module 2: SQL Basics",
              topics: ["Creating tables, queries, joins..."],
            },
          ],
        },
        {
          title: "Course 5: Data Storytelling",
          modules: [
            {
              title: "Module 1: Storytelling Principles",
              topics: ["Building effective data narratives..."],
            },
            {
              title: "Module 2: Designing Dashboards",
              topics: ["Using tools like Tableau or Power BI..."],
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: "AI Python for Beginners",
    type: "Short Course",
    description:
      "This course introduces Python for AI, covering the basics of data structures, libraries like NumPy and Pandas, and building your first AI models.",
    image: course_img,
    collaborators: [{ name: "AGI Inc", logo: openai }],
    topics: ["Data Learning", "AI Safety", "Agents"],
    level: "Beginner",
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Builre and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
      "Measured and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Builre and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    Instructor: [
      {
        name: "John Doe",
        image: course_img,
        bio: "Senior Python Developer specializing in AI systems, with 10+ years building production-ready ML pipelines.",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
      {
        name: "John Doe",
        image: course_img,
        bio: "Senior Python Developer specializing in AI systems, with 10+ years building production-ready ML pipelines.",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    ],
    courseOutline: [
      {
        title: "Introduction",
        type: "Video",
        hasCode: true,
        videoFile: intro1,
        // videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",

        duration: "3min",
      },
      {
        title: "Why MCP",
        type: "Video",
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
        hasCode: false,
      },
      {
        title: "MCP Architecture",
        type: "Video",
        hasCode: false,
        videoFile: intro1,
      },
      {
        title: "Chatbot Example",
        type: "Video",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Conclusion",
        type: "Video",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
    ],
  },
  {
    id: 3,
    title: "Generative AI for Software Development",
    type: "Specialization",
    instructor: "instructor XYZ",
    instructorTitle: "Senior Data Scientist, IBM",
    instructorImage: course_img,
    instructorLinkedIn: "https://www.linkedin.com/in/instructor-XYZ",
    instructorTwitter: "https://twitter.com/instructorXYZ",
    instructorBio:
      "instructor XYZ, Ph.D., is a senior data scientist at IBM. With over a decade of experience in AI, data engineering, and machine learning, Alex brings a wealth of practical and academic expertise to learners. He is passionate about teaching and has helped thousands of students build careers in data science.",
    instructors: [
      {
        name: "Instructor XYZ",
        title: "Senior Data Scientist, IBM",
        image: course_img,
        linkedIn: "https://www.linkedin.com/in/instructor-XYZ",
        twitter: "https://twitter.com/instructorXYZ",
        bio: "XYZ, Ph.D., is a senior data scientist at IBM...",
      },
      {
        name: "Instructor XYZ",
        title: "Senior Data Scientist, IBM",
        image: course_img,
        linkedIn: "https://www.linkedin.com/in/instructor-XYZ",
        twitter: "https://twitter.com/instructorXYZ",
        bio: "XYZ, Ph.D., is a senior data scientist at IBM...",
      },
    ],
    description:
      "Master the tools and techniques for integrating generative AI into software projects. Learn about LLMs, prompt engineering, and practical deployments.",
    duration: "4 months",

    image: course_img,
    collaborators: [{ name: "Meta", logo: openai }],

    level: "Beginner",

    whatYouWillLearn: [
      "Basic data analytic methods using spreadsheets",
      "SQL for data extraction and manipulation",
      "Data visualization using IBM Cognos Analytics",
      "Applying Python for data analysis",
    ],

    skills: [
      "Data Analysis",
      "Excel",
      "SQL",
      "Data Visualization",
      "Python",
      "IBM Cognos Analytics",
      "Data Analysis",
      "Excel",
      "SQL",
      "Data Visualization",
      "Python",
      "IBM Cognos Analytics",
      "Data Analysis",
      "Excel",
      "SQL",
      "Data Visualization",
      "Python",
      "IBM Cognos Analytics",
    ],
    videoUrl: "https://youtu.be/rR8KZnbu-UI?si=nl6zztJt3nEWamFe",

    faqs: [
      {
        question: "What background knowledge is required?",
        answer:
          "No prior experience is required. This specialization is designed for beginners.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
    ],
    collaborators: [
      { name: "AI-Academy", logo: openai },
      { name: "Google", logo: AWS },
    ],
    topics: ["Data Engineering", "Data Processing", "MLOps"],
    level: "Beginner",
    whyEnroll: {
      title: "Why Enroll?",
      paragraphs: [
        "Data-informed decision-making is now an essential skill for everyone, from everyday consumer choices to business decisions at all levels. As reliance on data grows, so does the need for professionals who can analyze and interpret it effectively.",
        "The Data Analytics Professional Certificate, led by industry leader Sean Barnes, equips you with the skills to manage the entire data lifecycle, from defining problems to delivering insights. With this certificate, you’ll be prepared to pursue an entry-level role in data analytics or strengthen your current role with a solid foundation in data analysis.",
        "The skills you’ll gain are in high demand, and with data science roles projected to grow 36% from 2023 to 2033 according to the U.S. Bureau of Labor Statistics, developing these skills puts you at the forefront of a data-centric world.",
      ],
      image: {
        src: course_img,
        alt: "The data analytics lifecycle",
      },
      content: [
        "You’ll begin by learning the foundations of analysis and visualization, then move on to statistical techniques that support evidence-based decision-making. Next, you’ll develop Python skills to automate workflows and analyze data at scale (no prior coding experience required). Then, you’ll work with real-world data to extract information from websites, APIs, and databases, and clean data with Python and SQL to prepare it for analysis.",
        "Finally, you’ll learn to present your analysis in ways that support real decisions through clear writing, compelling visualizations, and interactive dashboards. You’ll also prepare for the job search with practical guidance on resumes, portfolios, and interviews.",
        "Unique to this program is its integration of AI tools into the analytics workflow. You’ll learn to use large language models as a thought partner, accelerating tasks like simulation modeling, formula debugging, and data visualization. Each of the course examples comes from real-world use cases, building practical and immediately useful skills.",
      ],
    },
    syllabus: {
      courses: [
        {
          title: "Course 1: Data Analytics Foundations",
          modules: [
            {
              title: "Module 1: Data and the Data Analyst Role",
              topics: [
                "Define data and its common representations, and differentiate between structured vs. unstructured data and variable types (categorical, discrete, continuous).",
                "List common data file formats (txt, CSV, JSON, etc.) and explore data roles (analyst, engineer, scientist) and their business impact.",
                "Identify career opportunities and the components of the data ecosystem. Use large language models (LLMs) for stakeholder analysis and evaluate their strengths and weaknesses.",
              ],
            },
            {
              title: "Module 2: Using Spreadsheets for Data Analytics",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
            {
              title: "Module 3: Data Visualization",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
            {
              title: "Module 4: The Data Analytics Lifecycle",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
          ],
        },
        {
          title: "Course 2: Applied Statistics for Data Analytics",
          modules: [
            {
              title: "Module 1: Probability & Distributions",
              topics: [
                "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
                "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
                "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
              ],
            },
            {
              title: "Module 2: Inferential Statistics",
              topics: ["Variables, data types, and control flow..."],
            },
          ],
        },
        {
          title: "Course 3: Python for Data Analytics",
          modules: [
            {
              title: "Module 1: Python Basics",
              topics: ["Variables, data types, and control flow..."],
            },
            {
              title: "Module 2: Data Analysis Libraries",
              topics: ["Using NumPy and pandas for analysis..."],
            },
          ],
        },
        {
          title: "Course 4: Data I/O and Preprocessing with Python and SQL",
          modules: [
            {
              title: "Module 1: Data Input/Output",
              topics: ["Reading and writing CSV, Excel..."],
            },
            {
              title: "Module 2: SQL Basics",
              topics: ["Creating tables, queries, joins..."],
            },
          ],
        },
        {
          title: "Course 5: Data Storytelling",
          modules: [
            {
              title: "Module 1: Storytelling Principles",
              topics: ["Building effective data narratives..."],
            },
            {
              title: "Module 2: Designing Dashboards",
              topics: ["Using tools like Tableau or Power BI..."],
            },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: "DSPy: Build and Optimize Agentic Apps",
    type: "Short Course",
    description:
      "Dive deep into DSPy to build and optimize agentic applications. From architecture to deployment, get hands-on with powerful AI workflows.",
    image: course_img,
    collaborators: [{ name: "AI-Academy", logo: openai }],
    topics: ["Data Learning", "AI Safety", "Agents"],
    level: "Beginner",
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    Instructor: [
      {
        name: "John Doe",
        image: course_img,
        bio: "Senior Python Developer specializing in AI systems, with 10+ years building production-ready ML pipelines.",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    ],
    courseOutline: [
      {
        title: "Introduction 2nd",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
    ],
  },
  {
    id: 5,
    title: "Orchestrating Workflows for GenAI Applications",
    type: "Course",
    description:
      "Understand and implement orchestration patterns for GenAI applications. Work with modern tools to create robust and scalable AI workflows.",
    image: course_img,
    collaborators: [{ name: "Stanford Online", logo: openai }],
    topics: ["Data Engineering", "Data Processing", "Anomaly Detection"],
    level: "Beginner",
    // videoUrl: intro1,
    videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
    features: [
      {
        title: "RAG for real-world applications",
        description:
          "Learn how retrieval and generation work together, and how to design each component to build reliable, flexible RAG systems.",
      },
      {
        title: "Search techniques and vector databases",
        description:
          "Use techniques like keyword search, semantic search, hybrid search, chunking, and query parsing to support RAG applications across domains like healthcare and e-commerce.",
      },
      {
        title: "Prompt design, evaluation, and deployment",
        description:
          "Craft prompts that make the most of retrieved context, evaluate RAG system performance, and prepare your pipeline for production.",
      },
    ],
    benifits: [
      {
        title: "ANY Title",
        description:
          "RAG helps large language models generate more accurate and useful responses by retrieving helps large language models generate more accurate and useful responses by retrievin etrieving helps large language models generate more accurate and useful responses by retrieving",
      },
    ],
    whyEnroll: {
      title: "Why Enroll?",
      paragraphs: [
        "Data-informed decision-making is now an essential skill for everyone, from everyday consumer choices to business decisions at all levels. As reliance on data grows, so does the need for professionals who can analyze and interpret it effectively.",
        "The Data Analytics Professional Certificate, led by industry leader Sean Barnes, equips you with the skills to manage the entire data lifecycle, from defining problems to delivering insights. With this certificate, you’ll be prepared to pursue an entry-level role in data analytics or strengthen your current role with a solid foundation in data analysis.",
        "The skills you’ll gain are in high demand, and with data science roles projected to grow 36% from 2023 to 2033 according to the U.S. Bureau of Labor Statistics, developing these skills puts you at the forefront of a data-centric world.",
      ],
    },
    courses: [
      {
        title: "Course 1: Data Analytics Foundations",
        modules: [
          {
            title: "Module 1: Data and the Data Analyst Role",
            topics: [
              "Define data and its common representations, and differentiate between structured vs. unstructured data and variable types (categorical, discrete, continuous).",
              "List common data file formats (txt, CSV, JSON, etc.) and explore data roles (analyst, engineer, scientist) and their business impact.",
              "Identify career opportunities and the components of the data ecosystem. Use large language models (LLMs) for stakeholder analysis and evaluate their strengths and weaknesses.",
            ],
          },
          {
            title: "Module 2: Using Spreadsheets for Data Analytics",
            topics: [
              "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
              "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
              "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
            ],
          },
          {
            title: "Module 3: Data Visualization",
            topics: [
              "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
              "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
              "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
            ],
          },
          {
            title: "Module 4: The Data Analytics Lifecycle",
            topics: [
              "Describe spreadsheet use cases in business and life, introducing Google Sheets and alternatives.",
              "Perform basic spreadsheet tasks (create, save, share, organize data) and use tools to sort and filter data.",
              "Compare different file types and data types (date, numeric, text) and connect them to structured/unstructured data.",
            ],
          },
        ],
      },
    ],
    instructor: "instructor XYZ11",
    instructorTitle: "Senior Data Scientist, IBM",
    instructorImage: course_img,
    instructorLinkedIn: "https://www.linkedin.com/in/instructor-XYZ",
    instructorTwitter: "https://twitter.com/instructorXYZ",
    instructorBio:
      "instructor XYZ, Ph.D., is a senior data scientist at IBM. With over a decade of experience in AI, data engineering, and machine learning, Alex brings a wealth of practical and academic expertise to learners. He is passionate about teaching and has helped thousands of students build careers in data science.",
    faqs: [
      {
        question: "What background knowledge is required?",
        answer:
          "No prior experience is required. This specialization is designed for beginners.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
      {
        question: "Can I get a job after completing this specialization?",
        answer: "Yes, it prepares you for entry-level data analyst roles.",
      },
    ],
    whatYouWillLearn: {
      description:
        "Explore the foundational concepts and practical tools required to build GenAI pipelines with Retrieval-Augmented Generation (RAG), semantic search, vector databases, and prompt engineering.",
      items: [
        {
          title: "RAG for real-world applications",
          description:
            "Learn how retrieval and generation work together, and how to design each component to build reliable, flexible RAG systems.",
        },
        {
          title: "Search techniques and vector databases",
          description:
            "Use techniques like keyword search, semantic search, hybrid search, chunking, and query parsing to support RAG applications across domains like healthcare and e-commerce.",
        },
        {
          title: "Prompt design, evaluation, and deployment",
          description:
            "Craft prompts that make the most of retrieved context, evaluate RAG system performance, and prepare your pipeline for production.",
        },
        {
          title: "Prompt design, evaluation, and deployment",
          description:
            "Craft prompts that make the most of retrieved context, evaluate RAG system performance, and prepare your pipeline for production.",
        },
        {
          title: "Prompt design, evaluation, and deployment",
          description:
            "Craft prompts that make the most of retrieved context, evaluate RAG system performance, and prepare your pipeline for production.",
        },
        {
          title: "Prompt design, evaluation, and deployment",
          description:
            "Craft prompts that make the most of retrieved context, evaluate RAG system performance, and prepare your pipeline for production.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Getting Structured LLM Output",
    type: "Specialization",
    description:
      "Learn how to design prompts and integrate APIs to ensure structured outputs from large language models for your projects.",
    image: course_img,
    collaborators: [{ name: "Hugging Face", logo: huggingface }],

    topics: ["Deep Learning", "Embeddings", "LLMOps"],
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Advanced Prompt Engineering",
    type: "Short Course",
    description:
      "Explore advanced techniques in prompt engineering and design effective AI workflows.",
    image: course_img,
    collaborators: [{ name: "OpenAI", logo: openai }],

    level: "Intermediate",
    topics: ["NLP"],
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    courseOutline: [
      {
        title: "Introduction 2nd",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://youtu.be/p83CiZlwsFg?si=sWeiHSpttNr-MBho",
      },
    ],
  },
  {
    id: 8,
    title: "AI for Business Leaders",
    type: "Course",
    description:
      "Equip yourself with the knowledge to leverage AI in strategic business decisions.",
    image: course_img,
    collaborators: [{ name: "AWS", logo: AWS }],

    topics: ["Deep Learning", "Embeddings", "LLMOps"],
    level: "Intermediate",
  },
  {
    id: 9,
    title: "Machine Learning Foundations",
    type: "Specialization",
    description:
      "Cover machine learning basics, including supervised and unsupervised learning techniques.",
    image: course_img,

    collaborators: [{ name: "Meta", logo: openai }],

    topics: ["Deep Learning", "Embeddings", "LLMOps"],
    level: "Intermediate",
  },
  {
    id: 10,
    title: "Full Stack AI Applications",
    type: "Short Course",
    description:
      "Learn how to integrate AI into full stack applications with React and Django.",
    image: course_img,
    collaborators: [{ name: "AI-Academy", logo: openai }],

    topics: ["Deep Learning", "Embeddings", "LLMOps"],
    level: "Intermediate",
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
  },
];

// collab logos

import AIForGoodlab from "../../assets/collab-logos/collab-AI-for-good-lab.png";
import AWS from "../../assets/collab-logos/collab-AWS.png";
import Cohere from "../../assets/collab-logos/collab-Cohere.png";
import coursera from "../../assets/collab-logos/collab-coursera.png";
import Google_Cloud from "../../assets/collab-logos/collab-Google_Cloud.png";
import huggingface from "../../assets/collab-logos/collab-huggingface.webp";
import Lamini from "../../assets/collab-logos/collab-Lamini.png";
import langchain from "../../assets/collab-logos/collab-langchain.png";
import microsoft from "../../assets/collab-logos/collab-microsoft.webp";
import openai from "../../assets/collab-logos/collab-openai.png";
import stanford from "../../assets/collab-logos/collab-stanford.webp";
import weights from "../../assets/collab-logos/collab-weights.png";
import Google from "../../assets/collab-logos/collab-Google.png";

export const collabLogos = [
  AIForGoodlab,
  AWS,
  Cohere,
  coursera,
  Google_Cloud,
  huggingface,
  Lamini,
  langchain,
  microsoft,
  openai,
  stanford,
  weights,
  Google,
];

//sidebar

export const topics = [
  "Agents",
  "AI Frameworks",
  "AI in Software Development",
  "AI Safety",
  "Anomaly Detection",
  "Chatbots",
  "Compression and Quantization",
  "Computer Vision",
  "Data Engineering",
  "Data Processing",
  "Deep Learning",
  "Diffusion Models",
  "Document Processing",
  "Embeddings",
  "Evaluation and Monitoring",
  "Event-Driven AI",
  "Fine-Tuning",
  "GenAI Applications",
  "Generative Models",
  "LLM Serving",
  "LLMOps",
  "Machine Learning",
  "Mathematical Foundations",
  "MLOps",
  "MultiModal",
  "NLP",
  "On-Device AI",
  "Prompt Engineering",
  "RAG",
  "Search and Retrieval",
  "Supervised Learning",
  "Synthetic Data",
  "Task Automation",
  "Time Series",
  "Transformers",
  "Unsupervised Learning",
  "Vector Databases",
];

export const collaborators = [
  "AGI Inc",
  "AI Dungeon",
  "AI21 labs",
  "Anthropic",
  "Arize AI",
  "Astronomer",
  "AWS",
  "Chroma",
  "CircleCI",
  'Co-authors of "Hands-On Large Language Models"',
  "Cohere",
  "Comet",
  "crewAI",
  "Databricks",
  "DeepLearning.AI",
  "DotTxt",
  "Flower Labs",
  "Giskard",
  "Google",
  "Google Cloud",
  "GuardrailsAI",
  "Haystack",
  "Hugging Face",
  "IBM Research's BeeAI",
  "Intel",
  "Lamini",
  "LangChain",
  "Letta",
  "Livekit, RealAvatar",
  "LlamaIndex",
  "Meta",
  "Microsoft",
  "Mistral AI",
  "MongoDB",
  "Neo4j",
  "NexusFlow",
  "OpenAI",
  "Penn State University",
  "Pinecone",
  "Predibase",
  "Qdrant",
  "Qualcomm",
  "Replit",
  "Stanford Online",
  "StatQuest",
  "Tavily",
  "Together AI",
  "TruEra",
  "University of Washington",
  "Unstructured",
  "Upstage",
  "Vectara",
  "Weaviate",
  "Weights and Biases",
  "WhyLabs",
  "Windsurf",
];

//my learning

export const coursesYouMightLike = [
  {
    id: 1,
    title: "Post-training of LLMs",
    type: "Short Course · 1 hour 16 mins",
    description:
      "Adapt LLMs for specific tasks and behaviors using post-training.",
    image: course_img,
    collaborators: [
      {
        name: "University of Washington",
        logo: AWS,
      },
      {
        name: "NexusFlow",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 2,
    title: "ACP: Agent Communication Protocol",
    type: "Short Course · 1 hour 41 mins",
    description:
      "Learn how autonomous agents communicate effectively and securely.",
    image: course_img,
    collaborators: [
      {
        name: "IBM Research's BeeAI",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 3,
    title: "Building with Llama 4",
    type: "Short Course · 1 hour",
    description:
      "Understand and build applications with Meta’s Llama 4, covering setup",
    image: course_img,
    collaborators: [
      {
        name: "Meta",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    type: "Short Course · 50 mins",
    description:
      "Discover the fundamentals of generative AI and how models like GPT..",
    image: course_img,
    collaborators: [
      {
        name: "OpenAI",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 5,
    title: "Ethics in AI Development",
    type: "Short Course · 45 mins",
    description:
      "Explore the ethical considerations and challenges involved in building AI.",
    image: course_img,
    collaborators: [
      {
        name: "Stanford University",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 6,
    title: "Deploying AI Applications",
    type: "Short Course · 1 hour 10 mins",
    description:
      "Learn how to deploy AI-powered applications efficiently using.",
    image: course_img,
    collaborators: [
      {
        name: "Google Cloud",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 7,
    title: "Fine-Tuning Transformers",
    type: "Short Course · 1 hour 30 mins",
    description:
      "Master fine-tuning techniques for transformer-based models for NLP.",
    image: course_img,
    collaborators: [
      {
        name: "Hugging Face",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
];
