// === ELEMENTS THAT WILL BE CLICKED === //
const navProjects = document.getElementById("projects-nav")
const navSkills = document.getElementById("skills-nav")
const navResume = document.getElementById("resume-nav")
const navContact = document.getElementById("contact-nav")
const navHome = document.getElementById("home-nav")
const seeMyWorkBtn = document.getElementById("see-my-work-btn")

// === ELEMENTS TO SCROLL TO === //
const projectsStart = document.getElementById("projects-start")
const skillsStart = document.getElementById("skills-start")
const resumeStart = document.getElementById("resume-start")
const contactStart = document.getElementById("contact-start")
const homeStart = document.getElementById("profile-photo")

navProjects.addEventListener("click", () => projectsStart.scrollIntoView({behavior: 'smooth'}))

seeMyWorkBtn.addEventListener("click", () => projectsStart.scrollIntoView({behavior: 'smooth'}))

navSkills.addEventListener("click", () => skillsStart.scrollIntoView({behavior: 'smooth'}))

navResume.addEventListener("click", () => resumeStart.scrollIntoView({behavior: 'smooth'}))

navContact.addEventListener("click", () => contactStart.scrollIntoView({behavior: 'smooth'}))

navHome.addEventListener("click", () => homeStart.scrollIntoView({behavior:"smooth"}))
