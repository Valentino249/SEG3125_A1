import gravityJump from '../assets/gravity_jump.png'
import rotr from '../assets/rotr.png'
import whatsAbove from '../assets/whats_above.png'

function Header() {
    return (
        <div>
            <div className="flex md:items-start items-center h-screen flex-col p-5">
                <p className="mb-2 text-4xl font-bold text-bg-orange-50 mt-50 mb-10 gap-10 md:px-10">Game Development</p>
                <div className="grid md:grid-cols-4 grid-cols-1 items-center gap-10 md:px-10">
                    <div className="flex flex-col">
                        <img src={gravityJump} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                        <p className="mt-5">test</p>
                    </div>
                    
                    <div className="flex flex-col">
                        <img src={rotr} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <img src={whatsAbove} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <img src={gravityJump} alt="Profile Photo" className="md:size-96 size-72 object-cover" />
                    </div>
                    
                    
                    
                <div>
                    
                    
                    
                </div>
               
                </div>
            </div>
        </div>
    )

}

export default Header