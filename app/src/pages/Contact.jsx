import { contacts } from "../constants";
import styles, { layout } from "../style";

const ContactCard = ({icon, title, content, index }) => (

    <div className={`flex flex-row p-6 rounded-[20px] 
    ${index !== contacts.length - 1 ? "mb-6" : "mb-0"} contact-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            ...
        </div>
        <div className="flex-1 flex flex-col ml-3 pt-2 pl-2">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
)

function Contact() {
    return (
        <section className={layout.section}>
            <div className={`${layout.sectionInfo}  ml-24`}>
                <h2 className={`${styles.heading2}`}>Contact Us</h2>
                <h3 className={`${styles.heading3} mt-5`}>Feel free to reach out to us for a quote!</h3>
                <h3 className={`${styles.heading3} mt-8`}>Opening hours:</h3>
                <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
                    Monday 10am-7pm <br />
                    Wednesday 10am-7pm <br />
                    Thursday 11am-8pm <br />
                    Friday 11am-8pm <br />
                    Saturday 9am-6pm <br />
                </p>
            </div>

            <div className={`${layout.sectionImg} flex-col ml-24 mr-24`}>
                {contacts.map((Contact, index) => (
                    <div key={Contact.id}>
                        <div className={`flex flex-row p-6 rounded-[20px] 
                        ${index !== contacts.length - 1 ? "mb-6" : "mb-0"} contact-card`}>
                            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                                <Contact.icon style={{ color: 'turquoise', fontSize:30 }} />
                            </div>
                            <div className="flex-1 flex flex-col ml-3 pt-2 pl-2">
                                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                                    {Contact.title}
                                </h4>
                                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                                    {Contact.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Contact;