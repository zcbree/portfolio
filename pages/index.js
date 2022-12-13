
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const ColoredWrapper = styled.div.attrs({classname: 'container-fluid'})`
background-color: var(--primary-color-400);
padding: 2rem;
p {
  font-size: 1.155rem;
  line-height: 2.25rem;
}
`

const PlainWrapper = styled.div.attrs({classname: 'container-fluid'})`
background-color: var(--white);
padding: 2rem;
p {
  font-size: 1.155rem;
  line-height: 2.25rem;
}
`
export default function Home() {
return (
<div className={styles.container}>

    <ColoredWrapper>
      <div className="row">
        <div className="text-center">
          <Image className="img-fluid my-5 mx-auto" src="/portfolio.jpeg" alt="Vercel Logo" width={300} height={300} />
        </div>
        <div className="col-lg-8 col-11 mx-auto">
          <p>Bryanna Gardner is a graphic designer, web designer, and software engineer located in Detroit, MI.</p>
            <p>Thinking big and then bigger than that – Lori flexes her ability to look at the bigger picture, amplify best
            practices, present fresh strategies, and execute from start to finish.

            Lori’s portfolio includes work focused on identifying the unique story companies (of all sizes) have to tell
            and then using that to design from and for – while leaving room to evolve (because that’s always the goal).
            Lori is also an Adjunct Design Professor at Howard University – where she feels a lot of pressure to stay
            sharp (design and fashion-wise)!</p>
          <a href="#" className="portfolio-link">Curriculum vitae</a>
        </div>
      </div>
    </ColoredWrapper>

    <PlainWrapper>
    <div className="row">
      <div className="col-lg-8 col-11 mx-auto">
        <p>Lori was born and raised in Detroit, MI. She moved to Washington, DC in 2014 to attend graduate school and
          has lived in the area since. She holds a BA in Digital Media from the University of Detroit Mercy and an MFA
          in Design from Howard University. She did her graduate thesis on branding small, Black-owned businesses.</p>
        <p>Her greatest work happens on the inside</p>
        <p>Simple pleasures:</p>
        <ul>
          <li>Traveling</li>
          <li>Long-distance running</li>
          <li>Starbucks</li>
          <li>Making memories with her son and dog</li>
        </ul>
      </div>
    </div>
    </PlainWrapper>

    <ColoredWrapper>
      <div className="row">
        <div className="col"><h2>Services</h2></div>
        <div className="col my-3">
          <h3>Web Design</h3>
          <p>Solutions ranging from portfolios to e-commerce</p>
        </div>
        <div className="col my-3">
          <h3>Software Engineering</h3>
          <p>Solutions ranging from portfolios to e-commerce</p>
        </div>
        <div className="col my-3">
          <h3>Web Design</h3>
          <p>Solutions ranging from portfolios to e-commerce</p>
        </div>
      </div>
    </ColoredWrapper>

</div>
)
}