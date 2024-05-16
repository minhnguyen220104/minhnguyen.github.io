import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    python,
    java,
    tensorflow,
    aws,
    sql,
    sklearn,
    fastapi,
    pytorch,
    c,
    git,
    apache,
    ntu,
    continental,
    mobifone,
    jobit,
    tripguide,
    skindetect,
    bibliolouge,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning",
      icon: creator,
    },
    {
      title: "AI Engineer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Scikit Learn",
      icon: sklearn,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "fastapi",
      icon: fastapi,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Apache",
      icon: apache,
    },
  ];
  
  const experiences = [
    {
      title: "AI Engineer",
      company_name: "Continental",
      icon: continental,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Conducting in-depth review and analysis of the latest research and developments in the respective topics, gaining insights into their strengths and limitations.",
        "Adapting state-of-the-art methods published in top tier AI conferences for internal Continental datasets and proposing innovative techniques to modify these methods given limitations in our use-cases.",
        "Conducting rigorous evaluation and comparison of the proposed enhancements against known benchmarks using open and internal datasets.",
        "Implementing cloud-based model deployment using AWS tools such as S3, Lambda, Sagemaker, for model training and finetuning in test vehicle environments.",
        "Developing education material to champion the usage of AI in Continental business areas, explaining benefits and limitations of techniques used for each project especially to stakeholders who may not be proficient in AI fundamentals.",
      ],
    },
    {
      title: "Student Researcher",
      company_name: "Nanyang Technological University",
      icon: ntu,
      iconBg: "#E6DEDD",
      date: "Oct 2023- Jun 2024",
      points: [
        "Researched on project of ”Backdoor based Intellectual Property Protection for Deep Neural Networks” with Dr. Chang Chip Hong.",
        "Collaborating with postgraduates to propose a proactive method to protect the DNN model from stealing or abuse.",
        "Analysed and evaluated various Convolution Neural Network models, including ResNet, EfficientNet, GANs and U-NET.", 
        "Implemented ”Identifier CLassification” as the early-exit mechanism along the backbone architecture to have the models output wrong and unpredictable labels on clean inputs without the correct class-specific trigger",
        "Conducting backdoor training (sample-specific backdoor attack) on the clean dataset and transfer learning on the poisoned datasets.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Mobifone",
      icon: mobifone,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Developing and maintaining server-side of web applications using FastAPI and other related technologies.",
        "Design and maintaining relational database for web applications using Oracle and MySQL",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  /* const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ]; */
  
  const projects = [
    {
      name: "Skin Cancer Classification",
      description:
        "A transfer learning CNN model with ResNet50 for automated diagnosis of pigmented skin lesions. The classification solution covers a representative collection of all important diagnostic categories in the realm of pigmented lesions: Actinic keratoses, Basal cell carcinoma, Benign keratosis-like lesion, Dermatofibroma, Melanoma, Melanocytic nevi, Vascular lesions",
      tags: [
        {
          name: "resnet",
          color: "blue-text-gradient",
        },
        {
          name: "transfer learning",
          color: "green-text-gradient",
        },
        {
          name: "cnn",
          color: "pink-text-gradient",
        },
      ],
      image: skindetect,
      source_code_link: "https://github.com/minhnguyen220104/Skin-Cancer-Classification",
    },
    {
      name: "Bibliolouge",
      description:
        "E-Commerce website for buying and selling electronic devices online. The website display products from seven types: smartphone, accessories, headphone, smartwatch, mouse, tablet, laptop ",
      tags: [
        {
          name: "servlet",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "maven",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "purple-text-gradient",
        },
      ],
      image: bibliolouge,
      source_code_link: "https://github.com/minhnguyen220104/BiblilougeWeb",
    },
  ];
  
  export { services, technologies, experiences, /*testimonials*/ projects };