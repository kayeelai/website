import { about } from "../constants";
import styles, { layout } from "../style";
import { about_tech } from "../assets";

window.addEventListener("scroll", reveal)

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } 
    else {
      reveals[i].classList.remove('active');
    }
  }
}

const About = () => {
  return (
    <section id="about" className={`${layout.section} reveal`}>

        <div className={`${layout.sectionInfo}  ml-24 pt-0`}>
            <h2 className={`${styles.heading2} mb-6`}>About Us</h2>
            <img src={about_tech} alt="img" className="rounded-[20px] max-w-[600px]"/>
        </div>

            <p className={`${styles.paragraph} ml-24 sm:mt-12 md:mt-24 lg:mt-24 xl:mt-24 sm:max-w-[470px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[500px] text-left`}>
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
              <p className="mt-5">
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
              </p>
            </p>

        <div className={`${layout.sectionImg}`}>
        </div>
    </section>
  )
}

export default About