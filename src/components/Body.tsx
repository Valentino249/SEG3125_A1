import gravityJump from '../assets/gravity_jump.png'
import rotr from '../assets/rotr.png'
import whatsAbove from '../assets/whats_above.png'
import bg from '../assets/background_1.png'

function Header() {
    return (
        <div>
            <div className="flex md:items-start justify-center min-h-screen flex-col p-5">
                <p className="mb-2 text-4xl font-bold text-bg-orange-50 mt-50 mb-10 gap-10 md:px-10">Game Development</p>
                <div className="grid md:grid-cols-4 grid-cols-1 items-center gap-10 md:px-10">
                    <div className="flex flex-col">
                        <a href="https://gold249.itch.io/gravity-jump" target="_blank" rel="noopener noreferrer">
                            <img src={gravityJump} alt="Profile Photo" className="md:size-96 size-72 object-cover hover:scale-105 transition duration-300" />
                        </a>
                        <p className="mt-5 font-bold text-2xl">Gravity Jump</p>
                    </div>
                    
                    <div className="flex flex-col">
                        <a href="https://gold249.itch.io/roll-of-the-wreck" target="_blank" rel="noopener noreferrer">

                        <img src={rotr} alt="Profile Photo" className="md:size-96 size-72 object-cover hover:scale-105 transition duration-300" />
                        </a>
                        <p className="mt-5 font-bold text-2xl">Roll of The Wreck</p>
                    </div>
                    <div className="flex flex-col">
                        <a href="https://gold249.itch.io/whats-above" target="_blank" rel="noopener noreferrer">
                            <img src={whatsAbove} alt="Profile Photo" className="md:size-96 size-72 object-cover hover:scale-105 transition duration-300" />
                        </a>
                        <p className="mt-5 font-bold text-2xl">What's Above</p>
                    </div>
                    <div className="flex flex-col">
                        <img src={bg} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                        <p className="mt-5 font-bold text-2xl">Coming soon...</p>
                    </div> 
                </div>
                <p className="mb-2 text-4xl font-bold text-bg-orange-50 mt-20 mb-10 gap-10 md:px-10">How I Work</p>
                <p className="text-2xl text-bg-orange-50 mb-5 gap-10 md:px-10">I got my start programming in high school by developing small video games in python. I improved my game development skills over the years by participating in Game Jams, which taught me to think critically under high pressure. At university, I have worked two internships as a full stack software developer. At my first internship, I worked on a small team of three developers on implementing cost-saving measures and increasing accessibility to CEED's Ruby on Rails website (makerepo.com). I approached each new project at this internship with a careful balance of patience and my learned abilities to work under time constraints. At my second internship with the National Research Council of Canada, I further developed my full stack software development skills by completing the development of a React webform. On this project, designing appealing, accessible front-facing pages was of the utmost importance, as that was what would encourage researchers to use our tool.</p>
            </div>
        </div>
    )

}

export default Header