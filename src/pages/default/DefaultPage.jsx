import "./defaultPage.scss"

const DefaultPage = () => {

    return (
        <div className='logo'>
            <div
                className="h-screen flex justify-center items-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url('https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
                }}
            >
                <div className="space-y-5">
                    <p className="text-white font-bold text-5xl flex flex-col items-center">
                        <span>Unlimited movies, TV <br /></span>
                        <span> shows and more. </span>
                    </p>
                    <p className="text-white font-semibold text-3xl flex flex-col items-center">Watch anywhere. Cancel anytime.</p>
                    <p className="text-white text-lg flex flex-col items-center">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                        />
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="h-screen flex items-center justify-center bg-black p-5">
                <div className="space-y-5 p-5">
                    <p className="text-white font-bold text-4xl">Enjoy on your TV.</p>
                    <p className="text-white font-semibold text-xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div>
                    <img alt="TV" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                </div>
            </div>

            <hr />
            <div className="h-screen flex items-center justify-center bg-black p-5">
                <div>
                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
                </div>
                <div className="space-y-5">
                    <p className="text-white font-bold text-4xl">Download your shows to watch offline.</p>
                    <p className="text-white font-semiboldbold text-xl">Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            <hr />
            <div className="h-screen flex items-center justify-center bg-black p-5">
                <div className="space-y-5 p-5">
                    <p className="text-white font-bold text-4xl">Watch everywhere.</p>
                    <p className="text-white font-semiboldbold text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div>
                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" data-uia="our-story-card-img" />
                </div>
            </div>
            <hr />
            <div className="h-screen flex items-center justify-center bg-black p-5">
                <div className="p-5">
                    <img alt="" className="our-story-card-img" src="https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" data-uia="our-story-card-img" />
                </div>
                <div className="space-y-5">
                    <p className="text-white font-bold text-4xl">Create profiles for children.</p>
                    <p className="text-white font-semiboldbold text-xl">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
            <hr />
            <div className="min-h-screen bg-black space-y-10">
                <p className="p-5 text-white font-bold text-5xl flex justify-center">Frequently Asked Questions</p>
                <div className="space-y-5 flex flex-col justify-center items-center">
                    <div className="p-5 bg-[#303030] w-3/4">
                        <p className="text-3xl text-white">What is Netflix ?</p>
                    </div>
                    <div className="p-5 bg-[#303030] w-3/4">
                        <p className="text-3xl text-white">How much does Netflix cost ?</p>
                    </div>
                    <div className="p-5 bg-[#303030] w-3/4">
                        <p className="text-3xl text-white">Where can I watch ?</p>
                    </div>
                    <div className="p-5 bg-[#303030] w-3/4">
                        <p className="text-3xl text-white">Is Netflix good for kids ?</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default DefaultPage