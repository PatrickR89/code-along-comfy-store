import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            facilis, officiis possimus illo autem iste deserunt aliquam
            reiciendis ex ducimus ad pariatur repellendus sequi provident
            numquam, obcaecati odit quas architecto. In minus explicabo tempore
            quae ad quod eum earum quasi id! Ex accusamus totam optio provident
            iure cupiditate repellendus possimus iste, magnam, dicta, nostrum
            exercitationem. Consectetur placeat incidunt dolores laborum? Facere
            quae molestiae odio culpa! Ab eum molestiae quis, ducimus dolorem
            quos excepturi! Cupiditate animi suscipit possimus qui impedit illo
            quos, voluptates cum deleniti! Quidem distinctio nam qui eveniet
            earum.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
