import { useSpring, animated } from "react-spring";

const AnimatedNumber = ({ number }) => {
    const { too } = useSpring({
        from: { too: 0 },
        too: number,
        delay: 200,
        config:{mass:1, tension:20, friction:10},
    })

    return <animated.div className="text-6xl font-bold">{too.to((n) => n.toFixed(0))}</animated.div>
};

const Counter = () => {
    const counter = [
        {
            number: 231,
            description: "Happy Users",

        },
        {
            number: 385,
            description: "Issues Solved",
        },
        {
            number: 159,
            description: "Good Reviews",
        },
        {
            number: 127,
            description: "Case Studies",
        },
        {
            number: 211,
            description: "Orders Received",
        },
    ]
    return (
        <div id="counter" className="container mx-auto pt-20">
          
            <div className="grid grid-cols-5 gap-9 px-40 sm:grid-cols-1">
                {counter.map((counter) => (
                    <div className="p-8">
                        <div className="flex flex-col  items-center">
                           <AnimatedNumber number={counter.number}/>
                            <div className="p-3">{counter.description}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>);
}

export default Counter;