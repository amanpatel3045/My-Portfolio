import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 150px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [


  {
    img: "https://i.postimg.cc/g2wVj7Xx/Screenshot-618.png",
    title: "Blogging Application",
    description:
      " A blog web application where user can create,read,update,delete their blog. ",
    techStack: [
      "React",
      "Redux",
      "Express.js",
      "Node.js",
      "MongoDB"
    ],
    repoLink:
      "https://github.com/amanpatel3045/Blog-Web-App",
    type: "Blog website created by self by using MERN Stack (Indivisual Project)",
    demoLink: "https://aman-blog-app.netlify.app/",
    blogLink: "#",
    features: [
      "   A user can Sign in or Sign up.",
      "User can Create blog.",
      "User can Read the blogs.",
      "User can Edit their own blog.",
      "User can Edit their own profile.",
      "User can delete their blog.",
    ],
  },












  {
    img: "https://i.imgur.com/TodbMCU.png",
    title: "Overstock ",
    description: "E-Commerce shop",
    techStack: ["HTML", "CSS", "React", "ChakraUI"],
    repoLink: "https://github.com/amanpatel3045/Team_OverStock",
    demoLink: "https://overstock-clone-akash.netlify.app/",
    type: "A collaborative project built by a team of 5 under 6 days during Construct week project.",
    blogLink: "#",
    features: [
      "Signup and Login.",
      "A user can add a product to cart or to wishlist.",
      "A user can sort and filter.",
      "A user can order by filling in the required details",
      "Orders history can be viewer in profile page",
    ],
  },
  {
    img: "https://i.postimg.cc/NG8mLnDC/MyNetPic.png",
    title: "MyNetDiary",
    description:
      "MyNetDiary helps people become more healthy, more active and lose weight.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/amanpatel3045/Masai-MyNetDiary-Project",
    demoLink: "https://my-net-dairy-masai-project.netlify.app/",
    type: "A collaborative project built by a team of 5 under 5 days during Construct week project.",
    blogLink: "#",
    features: [
      "Signup and Login.",

      " User can plan their diet according to current status of their body.",

      "  Users can also search food.",

      " Easy Tracking of Carbs, Protein, Fat.",
    ],
    responsibilities: [
      " Developed the Home Page",

      " Built signup and login form",
    ],
  },
  {
    img: "https://i.postimg.cc/rFDBT753/Screenshot-450.png",
    title: "Myntra ",
    description:
      "Myntra is a one stop shop for all your fashion and lifestyle needs.",

    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/amanpatel3045/MyntraClone2",
    demoLink: "https://myntracom.netlify.app/",
    type: "A collaborative project built by a team of 5 executed in 5 days.",
    blogLink: "#",
    features: [
      "Signup and Login.",

      "A user can add a product to cart or to wishlist.",

      " A user can sort and filter.",

      " A user can order by filling in the required details",

      " Orders history can be viewer in profile page",
    ],
    responsibilities: [
      " Built navigation bar.",

      "Built signup and login form.",
    ],
  },

  {
    img: "https://i.postimg.cc/nc2QpJ1N/Screenshot-451.png",
    title: "Dineout",
    description:
      "Dineout is a table booking platform helping customers to do table booking in their favourite restaurants.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/amanpatel3045/cloneItDineout",
    demoLink: "https://dineoutclone22.netlify.app/",
    type: "A collaborative project built by a team of 3 executed in 5 days",
    blogLink:
      "https://dinoutclone.hashnode.dev/find-the-best-restaurants-deals-discounts-and-offers-dinout",
    features: [
      " Sign Up | Login | User Profile.",
      "All Page - with Filter & Sort Functionality.",
      "Single Product Page (dynamic) along with Reservation Feature.",
      "Reservation Confirmation Page.",
    ],
    responsibilities: ["Built signup and login form."],
  },
  {
    img: "https://i.postimg.cc/Ss8s5YvB/Screenshot-452.png",
    title: "Travel Diary ",
    description:
      " Travel blog application where user can create,read,update,delete their blog. ",
    techStack: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Express.js",
      "Node.js",
      "MongoDB",
      "MaterialUI",
    ],
    repoLink:
      "https://github.com/amanpatel3045/TRAVEL-BLOG-APPLICATION-WITH-MERN-STACK",
    type: "Blog website created by self by using MERN Stack (Indivisual Project)",
    demoLink: "https://traveldiaryweb.netlify.app/",
    blogLink: "#",
    features: [
      "   A user can Sign in or Sign up.",
      "User can Create blog.",
      "User can Read the blogs.",
      "User can Edit their own blog.",
      "User can delete their blog.",
    ],
  },
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
