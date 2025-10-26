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

gsap.registerPlugin(ScrollTrigger)

const PortfolioSection = () => {
  useEffect(() => {
    // GSAP Animations (optimized for video section only)
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
        end: "bottom top", // End when the bottom of videoSection hits the top of the viewport
        pin: true,
        pinSpacing: false, // Prevent extra space from being added
      },
    })

    gsap.to(`.${CSS.escape(styles.right)}`, {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        trigger: `.${CSS.escape(styles.videoSection)}`,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })

    gsap.to(`.${CSS.escape(styles.left)}`, {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        trigger: `.${CSS.escape(styles.videoSection)}`,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })

    gsap.to(`.${CSS.escape(styles.txtBottom)}`, {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 2,
      scrollTrigger: {
        trigger: `.${CSS.escape(styles.videoSection)}`,
        start: "top top",
        end: "bottom top",
        scrub: 1,
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
      end: "bottom top", // Match the videoSection end to avoid extra scroll
      scrub: 1,
      pin: true,
      pinSpacing: false, // Prevent extra space
      ease: "ease",
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
      <section className={`${styles.videoSection} custom-experience`}>
        <div className={styles.videoContainer}>
          <video src={FlowerVideo} autoPlay loop muted style={{ width: "100%", display: "block" }}></video>
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
          <p className={styles.txtBottom} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
            Designs that will inspire your wardrobe
          </p>
        </div>

        <div className={styles.vContainer}>
          <div className={styles.leftSide}>
            <div className={styles.tv}>
              <div className={styles.bg} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                push
              </div>
              <div className={styles.sm} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                the
              </div>
              <div className={`${styles.bg} ${styles.bottom}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                envelope
              </div>
            </div>
            <div className={styles.textContainer}>
              <p style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                Photography has become a big part of almost every element of our lives.
              </p>
              <p style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                It has become widespread and diverse but we know that this is still a real form of art and magic.
              </p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <p style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
              explore works{" "}
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className={styles.faArrowRightLong}
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioSection