import gravityJump from '../assets/gravity_jump.png'
import rotr from '../assets/rotr.png'
import whatsAbove from '../assets/whats_above.png'

function Header() {
    return (
        <div>
            <div className="flex h-screen flex-col">
                <p className="mb-2 text-4xl font-bold text-bg-orange-50 mt-50 mb-10 gap-10 md:px-10">Game Development</p>
                <div className="grid md:grid-cols-4 grid-cols-1 items-center gap-10 md:px-10">
                    <img src={gravityJump} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                    <img src={rotr} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                    <img src={whatsAbove} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                    <img src={gravityJump} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                <div>
                    
                    
                    
                </div>
               
                </div>
            </div>
        </div>
    )

}

export default Header