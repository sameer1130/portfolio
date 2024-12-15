
import Book from "../public/ion--book-outline.svg"
import Star from "../public/ion--medical-outline.svg"
import SkillCard from "./SkillCard"


export default function Resume() {
    return (
        <div className="lg:py-4 mb-6">
        
        <div className="flex justify-start py-4 items-center font-bold text-2xl mt-4">
            <div className="flex justify-center items-center p-2 border border-zinc-500 bg-zinc-600 rounded-lg p-2">
                <Book className="text-green-500 w-6 h-6" />
            </div>
            <div className="ml-2">
                Experience
            </div>

        </div>
        <div className="">
            <div className="flex justify-start py-4 items-center font-bold text-md">
                <div className="flex justify-center items-center rounded-lg p-2">
                    <Star className="text-green-500 w-6 h-6" />
                </div>
                <div className="ml-2">
                    ABM Knowledgeware
                </div>

            </div>
            <div className="pl-12 mt-[-12px] text-md text-green-500 pb-2">
                Jun 2020 - Sept 2020
            </div>
            <div className="px-12 leading-loose text-zinc-300">
                <div>

                    ◦ Experienced in transforming Figma design concepts into fully functional websites through the use of HTML, CSS,
                    and JavaScript.
                </div>
                <div>

                    ◦ I have a history of working collaboratively with cross-functional teams, including product managers and UI/UX
                    designers, to bring digital projects to fruition.
                </div>
                <div>

                    ◦ Worked on developing games based on JS.
                </div>
                <div>

                    ◦ Used Chrome DevTools to debug and resolve front-end issues related to the website and the built JS games.     
                </div>

            </div>

        </div>
        <div className="">
            <div className=" font-bold text-3xl text-white mt-12 px-4">
                My Skills
            </div>
            <div className="flex justify-center items-center bg-zinc-700 border-zinc-100 shadow-md shadow-black px-8 py-4 rounded-2xl mt-4 overflow-auto max-h-[400px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 xl:grid-cols-5 gap-8">
                    <SkillCard image="/Images/icons8-react-480.png" title="React" />
                   
                    <SkillCard image="/Images/icons8-tailwindcss-480.png" title="CSS" />
                    <SkillCard image="/Images/icons8-html-5-480.png" title="HTML" />
                    <SkillCard image="/Images/icons8-nodejs-240.png" title="Node.js" />
                    <SkillCard image="/Images/icons8-java-480.png" title="Java" />
                    <SkillCard image="/Images/icons8-python-240.png" title="Python" />
                    <SkillCard image="/Images/icons8-nextjs-240.png" title="Nextjs" />
                    <SkillCard image="/Images/icons8-my-sql-144.png" title="SQL" />
                    <SkillCard image="/Images/icons8-mongo-db-96.png" title="Mongo" />
                    <SkillCard image="/Images/icons8-postgresql-480.png" title="Postgres" />
                    <SkillCard image="/Images/icons8-prisma-orm-240.png" title="Prisma" />
                    <SkillCard image="/Images/icons8-docker-144.png" title="Docker" />
                    <SkillCard image="/Images/icons8-typescript-240.png" title="TS" />
                    <SkillCard image="/Images/icons8-mind-map-100.png" title="Kafka" />
                    <SkillCard image="/Images/icons8-redis-480.png" title="Redis" />
                    <SkillCard image="/Images/icons8-aws-144.png" title="AWS" />
                    <SkillCard image="/Images/icons8-javascript-144.png" title="JS" />

    
                </div>

            {/* //Programming Languages: Java, Python, C++, Javascript
• Web Technologies:HTML, CSS, React, Nextjs, TypeScript
• Database Systems: SQL, MongoDB, Postgres, Prisma
• DevOps & Version Control: Docker, Kubernetes, GIT
• Other Tools & Technologies:Monorepos, Turborepos, redis, WebRTC, GRPC, Prometheus, Grafana, Kafka,
GraphQL, Zod, AWS Deployments, Tailwind CSS, websockets */}

            </div>
        </div>

        </div>
    )
}