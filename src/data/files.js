const ProjectFile=[
    {
        name:"Projects",
        type:"folder",
        isOpen:true,
        children:[
            {
                name:"Project-1",
                typr:"file",
                language:"JavaScript"
            },
            {
                name:"Project-2",
                typr:"file",
                language:"JavaScript"
            },
            {
                name:"Project-3",
                typr:"file",
                language:"JavaScript"
            },
            {
                name:"assets",
                type:"folder",
                children:[
                    {name:"preview1.png",type:"file"},
                    {name:"preview2.png",type:"file"},
                    {name:"preview3.png",type:"file"}
                ]
            }
        ]

    }
]

const skillsFiles = [
  {
    name: "Skills",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "Frontend",
        type: "folder",
        isOpen: true,
        children: [
          { name: "JavaScript.jsx", type: "file", language: "typescript" },
          { name: "React.jsx", type: "file", language: "typescript" },
          { name: "TypeScript.js", type: "file", language: "typescript" },
          { name: "NextJS.jsx", type: "file", language: "typescript" },
        ],
      },
      {
        name: "DevOps",
        type: "folder",
        children: [
          { name: "Docker.yml", type: "file", language: "yaml" },
          { name: "AWS.json", type: "file", language: "json" },
          { name: "CICD.yml", type: "file", language: "yaml" },
        ],
      },
    ],
  },
];

const aboutFiles= [
  {
    name: "About",
    type: "folder",
    isOpen: true,
    children: [
      { name: "Profile.md", type: "file", language: "markdown" },
      { name: "Experience.json", type: "file", language: "json" },
      { name: "Education.md", type: "file", language: "markdown" },
      {
        name: "certificates",
        type: "folder",
        children: [
          { name: "React.pdf", type: "file" },
        ],
      },
    ],
  },
];

const contactFiles= [
  {
    name: "Contact",
    type: "folder",
    isOpen: true,
    children: [
      { name: "ContactForm.jsx", type: "file", language: "javscript" },
      { name: "SocialLinks.jsx", type: "file", language: "javascript" },
      { name: "ContactInfo.json", type: "file", language: "json" },
    ],
  },
];

export const getFileStructure = (activeTab) => {
  switch (activeTab) {
    case "projects":
      return ProjectFile;
    case "skills":
      return skillsFiles;
    case "about":
      return aboutFiles;
    case "contact":
      return contactFiles;
    default:
      return ProjectFile;
  }
};