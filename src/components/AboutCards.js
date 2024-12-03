import React from 'react'
import './AboutCards.css'
import AboutCardItem from './AboutCardItem'

function AboutCards() {
  return (
    <div className='about-container'>
        <header className='about-title'>
            <h1>About Me</h1>
            <AboutCardItem
                src = "/Images/KTrotz copy.JPG"
                label="About Me"
                customClass = "profile-card"
                isCertifications={false}
            />
            <div className='personal-description-contain'>
            <p className="personal-description">
            Kamari is an IT professional specializing in software development, data analytics, and cloud solutions. A recent graduate of the University of Maryland, College Park, with a B.S. in Computer & Information Science, Kamari has consistently demonstrated excellence both academically and athletically, achieving multiple records as a Division I track and field athlete.

He holds certifications in AWS Cloud Practitioner, IC Agile, and CompTIA Security+, alongside technical expertise in Python, SQL, JavaScript, and data visualization tools such as Power BI and Tableau. Kamari’s professional experience spans a range of impactful roles, including automating processes, building dashboards, and optimizing workflows to enhance efficiency and improve decision-making.

In addition to his technical expertise, he thrives in collaborative environments where he bridges the gap between business needs and technical solutions. He prides himself on discipline, resilience, and teamwork—values shaped by his experience as a Division I student-athlete.
            </p>
            </div>
        </header>
        <section className="about-education">
            <h2>Education</h2>
            <ul className='card_items'>
                <AboutCardItem
                src="Images/UMDimg.png"
                text="University of Maryland: B.S. Information Science"
                label="May '24"
                isCertifications={false}
                />
            </ul>
        </section>
        <section className="about-jobs">
            <h2>Professional Experience</h2>
            <ul className="cards_items">
            <AboutCardItem
                src="Images/ACNimg.png"
                text="Accenture Federal Services: Technology Analyst"
                label="Sept '24 - Present"
                isCertifications={false}
                />
                <AboutCardItem
                src="Images/HomeDepotimg.png"
                text="The Home Depot: Data Analytics Intern"
                label="May '24 - Jul '24"
                isCertifications={false}
                />
                <AboutCardItem
                src="Images/carefirstimg.png"
                text="CareFirst: Data Science Intern"
                label="Sept '23 - Sept '24"
                isCertifications={false}
                />
                <AboutCardItem
                src="Images/nationalacademies.jpeg"
                text="National Academies: I.T. Helpdesk Intern"
                label="Jun '23 - Aug '23"
                isCertifications={false}
                />
                <AboutCardItem
                src="Images/UMDimg.png"
                text="University of Maryland: I.T. Helpdesk Intern"
                label="Jun '21 - Aug '21"
                isCertifications={false}
                />
            </ul>
        </section>
        <section className='about-certifications'>
        <h2>Industry Certifications</h2>
            <ul className='cards_items'>
            <AboutCardItem
                src="Images/security+img.png"
                text="CompTIA Security+"
                label="Nov '24"
                pdfLink="Images/CompTIA Security+ ce certificate.pdf"
                isCertifications={true}
            />
            <AboutCardItem
                src="Images/icagileimg.png"
                text="ICAgile Certified Professional"
                label="Sept '24"
                pdfLink="Images/ICP-Certification.pdf"
                isCertifications={true}
            />
            <AboutCardItem
                src="Images/awspractimg.png"
                text="AWS Certified Cloud Practitioner"
                label="Sept '23"
                pdfLink="Images/AWS Certified Cloud Practitioner certificate.pdf"
                isCertifications={true}
            />
            </ul>
        </section>

    </div>
  )
}

export default AboutCards