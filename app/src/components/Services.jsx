import { features } from "../constants";
import styles from "../style";
import ServiceCard from "./ServiceCard";

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

const Services = () => (
  <section id="services" className={`${styles.paddingY} ${styles.flexCenter} flex-1 flex-col relative`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-5 mb-3 relative z-[1]">
      <h2 className={`${styles.heading1} text-center reveal`}>
        Our Services
      </h2>
    </div>

    <div className="flex flex-wrap justify-center items-center w-full relative z-[1] reveal">
      {features.map((card) => <ServiceCard key={card.id} {...card} />)}
    </div>
  </section>
)

export default Services