
const VideoTitle=({title,overview})=>{

    return (
        <div className="w-screen aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black" >
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>

            <div>
                <button className=" bg-white text-black p-4 px-12 text-xl font-bold  rounded-lg hover:bg-opacity-50">
                      Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl  hover:bg-opacity-55  rounded-lg">
                    More Info</button>
            </div>

        </div>
    )
}

export default VideoTitle;