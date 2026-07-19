import Contacts from './_components/Contanct/Contact';
import FadeInSection from './_components/FadeInSection';
import Hero from './_components/Hero/Hero';
import Projects from './_components/Projects/Projects';
import Skills from './_components/Skills/Skills';

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <Projects/>
      <Skills/>
      <Contacts/> */}
      <section id='home'>
        {' '}
        <Hero />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <FadeInSection>
        {' '}
        <section id='skills'>
          <Skills />
        </section>
      </FadeInSection>

      <FadeInSection>
        {' '}
        <section id='contact'>
          <Contacts />
        </section>
      </FadeInSection>
    </main>
  );
}
