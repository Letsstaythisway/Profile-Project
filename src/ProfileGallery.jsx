import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileViewer from "./ProfileViewer";
import { useState } from "react";

const users = [
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Henry",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
  {
    name: "Alice Smith",
    title: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Robert Johnson",
    title: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Emily Davis",
    title: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Michael Brown",
    title: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Sarah Wilson",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "David Martinez",
    title: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Sophia Taylor",
    title: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    name: "James Anderson",
    title: "QA Tester",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Olivia Moore",
    title: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Benjamin Thomas",
    title: "Cloud Architect",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Charlotte Jackson",
    title: "Social Media Manager",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Ethan White",
    title: "Mobile Developer",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Mia Harris",
    title: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    name: "Liam Martin",
    title: "Business Analyst",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    name: "Amelia Thompson",
    title: "Recruitment Specialist",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Noah Garcia",
    title: "Cybersecurity Analyst",
    image: "https://randomuser.me/api/portraits/men/93.jpg",
  },
  {
    name: "Harper Martinez",
    title: "SEO Specialist",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    name: "Lucas Robinson",
    title: "IT Consultant",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "Ella Walker",
    title: "Customer Success Manager",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    name: "Mason Lewis",
    title: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Isabella Young",
    title: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Logan Hall",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Ava King",
    title: "Copywriter",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    name: "Alexander Wright",
    title: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Emma Scott",
    title: "HR Specialist",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Elijah Green",
    title: "Machine Learning Engineer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Aria Adams",
    title: "Accountant",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Oliver Baker",
    title: "Supply Chain Analyst",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Chloe Nelson",
    title: "Event Planner",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    name: "Daniel Carter",
    title: "Sales Manager",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Ella Peterson",
    title: "PR Specialist",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    name: "Aiden Mitchell",
    title: "System Administrator",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Layla Evans",
    title: "Editor",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Jackson Rivera",
    title: "AI Researcher",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Grace Phillips",
    title: "Technical Writer",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    name: "Sebastian Lee",
    title: "Innovation Consultant",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Victoria Brown",
    title: "Research Analyst",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Henry Wilson",
    title: "Legal Advisor",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Lily Sanchez",
    title: "Instructional Designer",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Matthew Bennett",
    title: "Network Engineer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Abigail Clark",
    title: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Jack Perez",
    title: "Technical Support Specialist",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Sofia Hughes",
    title: "Financial Planner",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    name: "Ryan Howard",
    title: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Ella Murphy",
    title: "Brand Strategist",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Jayden Collins",
    title: "AI Developer",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
];

const galleryStyle = {
  display: "flex",
  gap: "15px",
  width: "100%",
  hieght: "100vh",
  flexWrap: "wrap",
};

const ProfileGallery = () => {
  const [showProfile, setShowProfile] = useState(false);

  const [selectedProfile, setSelectedProfile] = useState({
    name: "",
    title: "",
    image: "",
  });
  return (
    <div>
      <h1 className="m-10 fs-9xl">ProfileGallery</h1>
      <div style={galleryStyle} className="justify-center items-center">
        {users.map((item) => {
          return (
            <ProfileCard
              opensessame={setShowProfile}
              data={item}
              setSelectedProfile={setSelectedProfile}
            />
          );
        })}
      </div>

      {showProfile ? (
        <ProfileViewer {...selectedProfile} closeModal={setShowProfile} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileGallery;
