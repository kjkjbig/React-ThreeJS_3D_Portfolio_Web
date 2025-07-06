import React from "react";
import { useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {

        const project = [project1Ref.current , 
        project2Ref.current,
        project3Ref.current
        ]


        project.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        y:50,
                        opacity:0
                    },
                    {
                        y:0,
                        opacity:1,
                        duration:1,
                        delay:0.3 * (index +1), 
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom-=100'
                        }
                    }
                )
            }
        )

        gsap.fromTo(
            sectionRef.current , 
            {opacity: 0 } , 
            {opacity: 1, duration: 1.5}
        )
    }, [])

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*left*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/aai.png"/>
                        </div>
                        <div className="text-content">
                            <h2>On-Deasmdasodaks asdadsadasdasdkasdoaskds
                                aoskdoaskdkkkasdad
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                asodiasjdoisajipdasipdjasdja0psjdiasjdoipasjda
                                asopdapisjsdijapajds
                            </p>
                        </div>
                    </div>

                    {/*right*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div /*className="image-wrapper bg-[#ffefdb]"*/>
                                <img src="/images/redefine.png" alt=""/>
                            </div>
                            <h2>Libary platfaoskdoaasdok s</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div /*className="image-wrapper bg-[#ffe7eb]"*/>
                                <img src="/images/port.png" alt=""/>
                            </div>
                            <h2>Libary platfaoskdoaasdok 2</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection