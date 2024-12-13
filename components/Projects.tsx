import ProjectCard from "./ProjectCard";



export default function Projects() {
    return (
        <div className = "h-screen mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ProjectCard 
                img="/Images/d-wallet.jpeg"
                title="Centralized Exchange"
                description="Web Developement"
                githubLink="https://github.com/sameer1130/wallet-as-a-service"

                />
                <ProjectCard 
                img="/Images/3d-email.jpg"
                title="SAAS Automation Builder"
                description="Web Developement"
                githubLink="https://github.com/sameer1130/Zapier"
                />
                <ProjectCard 
                img="/Images/3d-webpage.jpg"
                title="Adaptive UI to reduce Stress"
                description="Machine Learning"
                githubLink="https://github.com/sameer1130"
                />
                <ProjectCard 
                img="/Images/3d-calci.jpg"
                title="Metristics-Statistical Calculator"
                description="Python"
                githubLink="https://github.com/sameer1130/METRICSTICS"
                />
                <ProjectCard 
                img="/Images/3d-blog.jpg"
                title="Medium Blog site"
                description="Web Development"
                githubLink="https://github.com/sameer1130"
                />
                <ProjectCard 
                img="/Images/3d-map.jpg"
                title="Ip address Locator"
                description="Web Development"
                githubLink="https://github.com/sameer1130/IP-tracker"
                />
                
            </div>
        </div>
    )
}