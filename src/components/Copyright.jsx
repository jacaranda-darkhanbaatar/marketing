const Copyright = () => {
  return (
    <div className="text-left pt-[1.5rem] bg-sky-200">
      <div className="max-w-[72rem] px-4 lg:grid lg:grid-cols-3 mx-auto">
        <ul className="mb-4 m-0 p-0 text-[0.875rem] leading-[1.5rem] text-slate-500">
          <li className="inline-block mr-4 mb-2">
            <a href="alt">Article Details</a>
          </li>
          <li className="inline-block mr-4 mb-2">
            <a href="alt">Terms & Conditions</a>
          </li>
          <li className="inline-block mr-4 mb-2">
            <a href="alt">Privacy Policy</a>
          </li>
        </ul>
        <p className="pb-2 text-[0.875rem] leading-[1.5rem] text-right text-slate-500">
          Copyright ©<a href="alt">Your name</a>
        </p>
        <p className="pb-2 text-[0.875rem] leading-[1.5rem] text-right text-slate-500">
          Distributed by :<a href="alt">Themewagon</a>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
