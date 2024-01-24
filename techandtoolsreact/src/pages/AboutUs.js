import React from "react";
import "../Component/AboutUs.css";

export const AboutUs = () => {
  const teamMembers = [
    {
      name: "Clarence Dave Maongca",
      role: "Team Leader",
      image: "TMMAONGCA.jpg",
      socials: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith/",
        github: "https://github.com/janesmith",
      },
    },

    {
      name: "Archie Agulay",
      role: "Team Member",
      image: "TMAGULAY.jpg",
      socials: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith/",
        github: "https://github.com/janesmith",
      },
    },
    {
      name: "Lancelot Aldaba",
      role: "Team Member",
      image: "TMALDABA.jpg",
      socials: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith/",
        github: "https://github.com/janesmith",
      },
    },
    {
      name: "Jonathan Alegre",
      role: "Team Member",
      image: "TMALEGRE.jpg",
      socials: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith/",
        github: "https://github.com/janesmith",
      },
    },
  ];

  return (
    <div className="about-us-container">
      <h1>Meet the Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <div className="social-links">
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
