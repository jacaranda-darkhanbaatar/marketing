import { DiApple, DiAndroid } from "react-icons/di";

const Download = () => {
    return (
        <div className="text-left pt-[72px] pb-[120px] bg-cover" style={{ backgroundImage: 'url(images/conclusion-background.jpg)' }}>
            <div className="max-w-[72rem] mx-auto px-4 lg:grid lg:grid-cols-2 text-center">
            <div className="mb-16 mb-0">
            <img src="images/conclusion-smartphone.png" alt="" className="mb-16 lg:ml-20 align-middle block" />
            </div>
            <div className="mt-44 ml-12">
                <p className="mb-9 text-gray-800 text-3xl leading-10 ">Team management mobile applications don’t get much better than Pavo. Download it today</p>
                <button className="btn btn-primary px-9 py-3 " href="#download-ios">
                    <DiApple size={25} className="inline-block  mb-1 mr-1" />
                    Download
                </button>
                <button href="#download-android" className="btn btn-secondary px-9 py-3  lg:ml-4 mt-5 sm:mt-3  ml-1">
                    <DiAndroid size={25} className="inline-block mr-1 mb-1" />
                    Download
                </button>
                </div>
            </div>
        </div>);
}

export default Download;