"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import styles from "./PortfolioSection.module.css"

// Import media files
import FlowerVideo from "../assets/images/flower.mp4"
import WindowImage from "../assets/images/window.png"
import Image1 from "../assets/images/about.png"
import Image2 from "../assets/images/about1.png"
import Image3 from "../assets/images/about2.png"
import Image4 from "../assets/images/about3.png"
import Image5 from "../assets/images/about4.png"
import ImageP1 from "../assets/images/about5.png"
import ImageP2 from "../assets/images/about6.png"
import ImageP3 from "../assets/images/about7.png"
import ImageP4 from "../assets/images/about8.png"
import ImageP5 from "../assets/images/about9.png"
import ImageB1 from "../assets/images/about10.png"
import ImageB2 from "../assets/images/about5.png"
import ImageB3 from "../assets/images/about12.png"
import ImageB4 from "../assets/images/about.png"
import ImageB5 from "../assets/images/about3.png"

gsap.registerPlugin(ScrollTrigger)

const PortfolioSection = () => {
  useEffect(() => {
    // GSAP Animations
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    })

    gsap.to(`.${CSS.escape(styles.imgContainer)}`, {
      scale: 52,
      ease: "ease",
      scrollTrigger: {
        trigger: `.${CSS.escape(styles.videoSection)}`,
        scrub: 1,
        start: "top top",
        endTrigger: ".custom-experience", // Ends pinning when CustomExperience starts
        end: "top top", // Releases pin at the top of CustomExperience
        pin: true,
      },
    })

    gsap.to(`.${CSS.escape(styles.right)}`, {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    })

    gsap.to(`.${CSS.escape(styles.left)}`, {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    })

    gsap.to(`.${CSS.escape(styles.txtBottom)}`, {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 2,
      scrollTrigger: {
        start: 2,
      },
    })

    const tl = gsap.timeline()
    tl.from(`.${CSS.escape(styles.leftSide)} div`, {
      y: 150,
      opacity: 0,
      stagger: {
        amount: 0.4,
      },
      delay: 0.5,
    })
      .from(`.${CSS.escape(styles.rightSide)}`, { opacity: 0, duration: 2 }, 0.5)
      .to(`.${CSS.escape(styles.wrapper)}`, { x: -window.innerWidth })

    ScrollTrigger.create({
      animation: tl,
      trigger: `.${CSS.escape(styles.wrapper)}`,
      start: "top top",
      end: "+=600",
      scrub: 1,
      pin: true,
      ease: "ease",
    })

    gsap.utils.toArray(`.${CSS.escape(styles.col)}`).forEach((image) => {
      gsap.fromTo(
        image,
        {
          opacity: 0.3,
          x: 0,
        },
        {
          opacity: 1,
          x: -50,
          scrollTrigger: {
            trigger: image,
            start: "10%",
            stagger: {
              amount: 0.4,
            },
          },
        },
      )
    })

    const timeline = gsap.timeline()
    timeline
      .from(`.${CSS.escape(styles.title)} span`, {
        y: 150,
        skewY: 7,
        duration: 3,
      })
      .from(`.${CSS.escape(styles.txtBottom)}`, {
        letterSpacing: -10,
        opacity: 0,
        duration: 3,
      })

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <section className={styles.videoSection}>
      <div className={styles.videoContainer} style={{ position: 'relative' }}>
  <video
    src={FlowerVideo}
    autoPlay
    loop
    muted
    playsInline
    style={{ width: '100%', display: 'block' }}
  ></video>
  {/* Dark overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // adjust 0.4 to make it lighter or darker
      pointerEvents: 'none', // allows video interactions if needed
    }}
  ></div>
</div>

        <div className={styles.imgContainer}>
          <img src={WindowImage || "/placeholder.svg"} alt="" className={styles.img} />
        </div>

        <div className={styles.textContent}>
          <div className={styles.imgTxt}>
            <div className={`${styles.title} ${styles.sm} ${styles.left}`}>
              <span>between</span>
            </div>
            <div className={`${styles.title} ${styles.bg} ${styles.left}`}>
              <span>Reality</span>
            </div>
            <div className={`${styles.title} ${styles.bg} ${styles.right} ${styles.n}`}>
              <span>&</span>
            </div>
            <div className={`${styles.title} ${styles.bg} ${styles.right}`}>
              <span>Dream</span>
            </div>
          </div>
          <p
            className={styles.txtBottom}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
          >
            Designs that will inspire your wardrobe
          </p>
        </div>

        <div className={styles.vContainer}>
          <div className={styles.leftSide}>
          <div className={styles.tv}>
              <div
                className={styles.bg}
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
              >
                Your
              </div>
              <div
                className={styles.sm}
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
              >
                Define
              </div>
              <div
                className={`${styles.bg} ${styles.bottom}`}
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
              >
                Elegance
              </div>
            </div>
            <div className={styles.textContainer}>
              <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                Fashion is bold, vibrant, and everywhere—fueling self-expression and confidence.
              </p>
              <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                It evolves with every trend, mixing creativity and attitude, proving that style isn’t just clothing—it’s
                energy, culture, and unstoppable magic.
              </p>
            </div>
          </div>
          <div className={styles.rightSide}>
              <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                explore works{' '}
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className={styles.faArrowRightLong}
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }} // optional: shadow for icon
                />
              </p>
            </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.boxesContainer}>
          <div className={`${styles.columns} ${styles.box1}`}>
            <div className={`${styles.col} ${styles.col1}`}>
              <div className={styles.imgBox}>
                <img src={Image1 || "/placeholder.svg"} alt="Carolina 1" />
              </div>
              <div className={styles.imgBox}>
                <img src={Image2 || "/placeholder.svg"} alt="Carolina 2" />
              </div>
            </div>
            <div className={styles.col2}>
              <h1>Jodha Bai</h1>
              <span>1 october 1542</span>
              <div className={styles.line}></div>
              <div className={styles.textBox}>
                <p>
                  Their union symbolized religious tolerance. She was called Queen Mother during Akbar’s and her son’s reign.
                </p>
                <p>Jodha Bai was Akbar’s first and last love, and the longest-serving Hindu Mughal Empress.</p>
              </div>
            </div>
            <div className={`${styles.col} ${styles.col3}`}>
              <div className={styles.imgBox}>
                <img src={Image3 || "/placeholder.svg"} alt="Carolina 3" />
              </div>
              <div className={styles.imgBox}>
                <img src={Image4 || "/placeholder.svg"} alt="Carolina 4" />
              </div>
              <div className={styles.imgBox}>
                <img src={Image5 || "/placeholder.svg"} alt="Carolina 5" />
              </div>
            </div>
          </div>
          <div className={`${styles.columns} ${styles.box2}`}>
            <div className={`${styles.col} ${styles.col1}`}>
              <div className={styles.imgBox}>
                <img src={ImageP1 || "/placeholder.svg"} alt="Soul Dance 1" />
              </div>
              <div className={styles.imgBox}>
                <img src={ImageP2 || "/placeholder.svg"} alt="Soul Dance 2" />
              </div>
            </div>
            <div className={styles.col2}>
              <h1>Rani Padmavati</h1>
              <span>17 september 1303</span>
              <div className={styles.line}></div>
              <div className={styles.textBox}>
                <p>
                  Rani Padmavati, or Padmini, was the legendary queen of Mewar, known for her beauty.
                </p>
                <p>She chose jauhar over dishonor when Alauddin Khilji attacked Chittorgarh, symbolizing Rajput pride forever.</p>
              </div>
            </div>
            <div className={`${styles.col} ${styles.col3}`}>
              <div className={styles.imgBox}>
                <img src={ImageP3 || "/placeholder.svg"} alt="Soul Dance 3" />
              </div>
              <div className={styles.imgBox}>
                <img src={ImageP4 || "/placeholder.svg"} alt="Soul Dance 4" />
              </div>
              <div className={styles.imgBox}>
                <img src={ImageP5 || "/placeholder.svg"} alt="Soul Dance 5" />
              </div>
            </div>
          </div>
          <div className={`${styles.columns} ${styles.box3}`}>
            <div className={`${styles.col} ${styles.col1}`}>
              <div className={styles.imgBox}>
                <img src={ImageB1 || "/placeholder.svg"} alt="80's Vibes 1" />
              </div>
              <div className={styles.imgBox}>
                <img src={ImageB2 || "/placeholder.svg"} alt="80's Vibes 2" />
              </div>
              <div className={styles.imgBox}>
                <img src={ImageB4 || "/placeholder.svg"} alt="80's Vibes 4" />
              </div>
            </div>
            <div className={styles.col2}>
              <h1>RANI LAKSHMIBAI</h1>
              <span>19 NOVEMBER 1828</span>
              <div className={styles.line}></div>
              <div className={styles.textBox}>
                <p>
                  Rani Lakshmibai, born Manikarnika in 1828, learned horse riding, sword fighting, and archery young.
                </p>
                <p>She led the 1857 revolt bravely, carrying her son and sword, dying fighting the British.</p>
              </div>
            </div>
            <div className={`${styles.col} ${styles.col3}`}>
              <div className={styles.imgBox}>
                <img src={ImageB3 || "/placeholder.svg"} alt="80's Vibes 3" />
              </div>
              <div className={styles.imgBox}>
                <img src={ImageB5 || "/placeholder.svg"} alt="80's Vibes 5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioSection