import { useSpring, animated } from "react-spring";

const AnimatedNumber = ({ number }) => {
    const { too } = useSpring({
        from: { too: 0 },
        too: number,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
        <animated.div>{too.to((n) => n.toFixed(0))}</animated.div>
    )
};

const Counter = () => {

    const counter = [
        {
            value: 231,
            info: "Happy Users"
        },
        {
            value: 385,
            info: "Issues Solved"
        },
        {
            value: 159,
            info: "Good Reviews"
        },
        {
            value: 127,
            info: "Case Studies"
        },
        {
            value: 211,
            info: "Orders Received"
        }
    ]



    return (
        <div className=" flex container mx-auto max-w-6xl justify-between py-28">

            {counter.map((counter) => (
                <div className=" p-8">
                    <div className="text-center font-bold text-5xl">
                        <AnimatedNumber number={counter.value} />
                    </div>
                    <p className="text-gray-500 text-xl pt-4">{counter.info}</p>
                </div>
            ))}

        </div>
    );
}

export default Counter;