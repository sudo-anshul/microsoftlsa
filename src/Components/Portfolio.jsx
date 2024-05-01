/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/flamingo-8348527_1920.jpg";

const imageAltText = "A falmingo in water";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Microsoft Learn Student Ambassadors Profile",
    description:
      "Here is my Microsoft Learn Student Ambassadors profile.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/1f9df0bc-6466-4f86-a3de-8aa1ed846f55",
  },
  {
    title: "My LinkedIN profile",
    description:
      "Here is my linkedin profile which provides all the professional information about me",
    url: "https://www.linkedin.com/in/anshul-kushwaha/",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created from CSS Tailwind and deployed to firebase using github actions. Includes my all socail links.",
    url: "https://www.anshulkushwaha.com",
  },
  {
    title: "GitHub Profile",
    description:
      "My GitHub Profile and as well as my specified README.md",
    url: "https://github.com/sudo-anshul",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
