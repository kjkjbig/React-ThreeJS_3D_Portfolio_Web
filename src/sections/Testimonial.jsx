import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants"


const Testimonial = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Wasidjaoisdjiasasidj"  
                    sub="CSIADAISKDAIKD ASKDASDK"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map(({imgPath , name , mentions , review}) => (
                        <GlowCard card={{review}}>
                            <div className="flex item-center gap-3">
                                <div>
                                    <img src={imgPath}/>
                                </div>
                                <div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-white-50">{mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div> 
        </section>
    )
}

export default Testimonial