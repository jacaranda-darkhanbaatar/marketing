import { useSpring, animated } from "react-spring";

const AnimatedNumber = ({ number }) => {
  const { too } = useSpring({
    from: { too: 0 },
    too: number,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{too.to((n) => n.toFixed(0))}</animated.div>;
};

const Stats = () => {
  return (
    <div className="pt-8 pb-16 text-center">
      <div className="px-4">
        <div className="inline-block w-32 mx-7 mb-14">
          <div className="text-6xl font-bold">
            <AnimatedNumber number={231} />
          </div>
          <p className="text-slate-500 text-center text-sm align-middle">
            Happy Users
          </p>
        </div>
        <div className="inline-block w-32 mx-7 mb-14">
          <div className="text-6xl font-bold">
            <AnimatedNumber number={385} />
          </div>
          <p className="text-slate-500 text-center text-sm align-middle">
            Issues Solved
          </p>
        </div>
        <div className="inline-block w-32 mx-7 mb-14">
          <div className="text-6xl font-bold">
            <AnimatedNumber number={159} />
          </div>
          <p className="text-slate-500 text-center text-sm align-middle">
            Good Reviews
          </p>
        </div>
        <div className="inline-block w-32 mx-7 mb-14">
          <div className="text-6xl font-bold">
            <AnimatedNumber number={127} />
          </div>
          <p className="text-slate-500 text-center text-sm align-middle">
            Case Studies
          </p>
        </div>
        <div className="inline-block w-32 mx-7 mb-14">
          <div className="text-6xl font-bold">
            <AnimatedNumber number={211} />
          </div>
          <p className="text-slate-500 text-center text-sm align-middle">
            Orders Received
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
