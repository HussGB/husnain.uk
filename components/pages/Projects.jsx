import React from 'react';
export default function Projects() {
    return (
        <>
<section id="projects" className="bg-gray-800 text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-700 p-6 rounded-md">
                        <h3 className="text-xl font-semibold mb-4">Fleco</h3>
                        <p className="text-gray-300 mb-4">A community-driven economy Discord bot, with a goal that is to provide the best economy experience in your Discord Guild.</p>
                        <a href="https://www.fleco.cloud/" target="_blank" className="text-blue-500 hover:underline">View Website</a>
                    </div>

                   
                    <div className="bg-gray-700 p-6 rounded-md">
                        <h3 className="text-xl font-semibold mb-4">FalixNodes | Ferolix</h3>
                        <p className="text-gray-300 mb-4">A discord bot I had made specifically for FalixNodes during my era as senior management & developer for the company FalixNodes Limited.</p>
                        <a href="https://github.com/HussGB/ferolix" target="_blank" className="text-blue-500 hover:underline">View Github</a>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-md">
                        <h3 className="text-xl font-semibold mb-4">Idle Bee Farm V1</h3>
                        <p className="text-gray-300 mb-4">A Discord Bot that you can use to farm Virtual Honey and sell it for money you will be able to use in the shop.</p>
                        <a href="https://github.com/HussGB/idle-bee-farm-v1" target="_blank" className="text-blue-500 hover:underline">View GitHub</a>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-md">
                        <h3 className="text-xl font-semibold mb-4">Idle Development</h3>
                        <p className="text-gray-300 mb-4">Idle Development is a small team of Developers consisting of 4 Developers, those are Triassic, Reverso, Floffah and Huss!</p>
                        <a href="https://github.com/IdleDevelopment" target="_blank" className="text-blue-500 hover:underline">View GitHub</a>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}