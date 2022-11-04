const PeopleCard = ({ name, title, img }) => (
    <div className="flex flex-col px-6 mx-10
    max-w-[370px] min-h-[410px] md:mr-10 sm:mr-5 mr-0 mt-1 mb-7">
        <img src={img} alt={name} className="w-[300] h-[300px] rounded-full place-self-center"/>
        <div className="flex flex-col ml-4 text-center mt-5">
            <h4 className="font-poppins font-semibold text-[25px] leading=[32px] text-white my-5">
                {name}
            </h4>
            <p className="font-poppins font-normal text-[20px] leading=[26px] text-dimWhite">
                {title}
            </p>
        </div>
    </div>
)

export default PeopleCard