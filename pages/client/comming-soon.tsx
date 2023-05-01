import LogoPurple from "@/public/client/assets/img/YS-purple.svg";
import Comming from "@/public/client/assets/img/cooming.jpg";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

function Index() {
  useEffect(() => {
    // @ts-ignore
    $(".promotional_tour_slider").owlCarousel({
      loop: true,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
    // @ts-ignore
    $(".partner_slider_area").owlCarousel({
      loop: true,
      dots: false,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 4,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 8,
        },
      },
    });
  }, []);

  const { data } = useSWR("/featuredHotels");
  const router = useRouter();

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <div className="mobile-container">
        <header>
          <section className="hero-banner">
            <div className="logo-wrapper">
              <img src={LogoPurple.src} alt="logo" />
            </div>
            <div className="hero-image"></div>
          </section>
        </header>
        <main>
          <article className="text-info">
            <h2>{"We're"}</h2>
            <h2>
              Coming
              <br />
              Soon
            </h2>
            <p>
              {`We're excited to announce that something amazing is coming soon!
              Our travel website is currently undergoing some updates and
              improvements to provide you with an even better travel experience.
              Whether you're planning a weekend getaway, an adventurous trip, or
              a relaxing vacation, we'll have everything you need to make it
              unforgettable. Stay tuned for more updates, and we can't wait to
              help you plan your next adventure`}
            </p>
          </article>
        </main>
      </div>
      <div className="hero-image-desktop">
        <img
          src={Comming.src}
          alt="Femail athlete squinting towards the camera."
        />
      </div>
    </div>
  );
}

export default Index;
