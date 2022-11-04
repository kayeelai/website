const ServiceCard = ({ icon, title, content }) => (
    <div className="flex flex-col px-10 py-12 mx-10
    max-w-[370px] min-h-[410px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] feature-card">
        <img src={icon} alt={title} className="w-[60px] h-[60px] rounded-full mt-5 place-self-center"/>
        <div className="flex flex-col pr-2 ml-4 text-center mt-8">
            <h4 className="font-poppins font-semibold text-[25px] leading=[32px] text-white my-5">
                {title}
            </h4>
            <p className="font-poppins font-normal text-[20px] leading=[26px] text-dimWhite">
                {content}
            </p>
        </div>
    </div>
)

export default ServiceCard