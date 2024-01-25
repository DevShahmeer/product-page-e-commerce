import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="switcher wrapper">
      <picture className="decorative-image">
        <source
          srcSet="images/graphic-shallow.jpg 1x, images/graphic-shallow-2x.jpg 2x"
          media="(max-width: 600px)"
        />
        <source srcSet="images/graphic.png 1x, images/graphic-2x.png 2x" />
        <Image
          src="/images/graphic-shallow.jpg"
          alt=""
          width={600}
          height={300}
          loading="lazy"
        />
      </picture>
      <div className="content repel" data-repel-variant="vertical">
        <header className="site-head repel">
          <p className="site-head__name">spaziovisia</p>
          <p className="space">Elevate your space</p>
        </header>
        <article className="flow">
          <h1>A tribute to ancient handicrafts</h1>
          <p>
            The materials are simple and completely natural, the internal
            structure of the stem consists of hundreds of cavities, which makes
            it strong and light.
          </p>
          <p>
            <Link className="icon-link" href="#">
              <span>Explore Kettal collection</span>
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 25"
                height="1.5ex"
                width="auto"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="m16.172 11.5-5.364-5.364 1.414-1.414L20 12.5l-7.778 7.778-1.414-1.414 5.364-5.364H4v-2h12.172Z"
                  />
                </g>
              </svg>
            </Link>
          </p>
        </article>
      </div>
    </main>
  );
}
