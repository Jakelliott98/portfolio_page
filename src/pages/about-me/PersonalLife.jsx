import football from '../../assets/football-playing.jpeg'
import travelling from '../../assets/travel-egypt.jpeg'
import snorkelling from '../../assets/snorkelling.jpeg'
import activity from '../../assets/activity-quad.jpeg'
import monkey from '../../assets/nature-monkey.jpeg'
import deepWork from '../../assets/reading.jpeg'
import paddle from '../../assets/paddle.jpeg'
import coding from '../../assets/coding.jpeg'

const personalInterests = [
    {
        title: 'Football',
        text: 'Playing semi-professional football has been a constant in my life for over a decade, shaping my discipline and competitive mindset.',
        source: football,
    },
    {
        title: 'Nature & Wildlife',
        text: 'I have a strong interest in wildlife, particularly marine life, and enjoy visiting aquariums when travelling.',
        source: monkey,
    },
    {
        title: 'Reading',
        text: 'I regularly read self-development books and enjoy fiction as a way to reflect, learn, and unwind.',
        source: deepWork,
    },
    {
        title: 'Travelling',
        text: 'Travelling allows me to explore new cultures and perspectives, with Japan and the Congo high on my future list.',
        source: travelling,
    },
    {
        title: 'Fitness',
        text: 'I enjoy staying active and exploring different forms of training, with my next goal of completing a half marathon.',
        source: paddle,
    },
    {
        title: 'Coding',
        text: 'I enjoy building and experimenting with code, driven by curiosity and a love of problem-solving.',
        source: coding,
    },
    {
        title: 'Snorkelling',
        text: 'Snorkelling has grown from my interest in marine life, with plans to learn scuba diving.',
        source: snorkelling,
    },
    {
        title: 'Adventure',
        text: 'I enjoy seeking out new experiences when travelling, embracing challenges and making memories.',
        source: activity,
    },
    {
        title: 'Chess',
        text: 'I’ve recently taken up chess, enjoying the strategic thinking and long-term planning it develops.',
        source: '',
    },
]

function PersonalLife () {
    
    return (
        <div className="">
            <h1 className="sectionHeading pb-10 text-center">
                <span className="opacity-60">🌱</span> Outside of Work
            </h1>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory pb-20">
                {
                    personalInterests.map((item) => {
                        return (
                            <InterestCard title={item.title} text={item.text} source={item.source} />
                        )
                    })
                }
            </div>
        </div>
    )
}

function InterestCard ({ source, title, text}) {
    return (
        <div className="min-w-64 h-[28rem] bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden flex flex-col">
            <img src={source} className="w-full h-72 object-cover"/>
            <div className="p-2 overflow-hidden">
                <p className="text-xl text-slate-100 font-semibold">{title}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

export default PersonalLife;