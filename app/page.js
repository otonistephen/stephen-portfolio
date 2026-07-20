import Contacts from './_components/Contanct/Contact';
import FadeInSection from './_components/FadeInSection';
import Hero from './_components/Hero/Hero';
import About from './_components/About/About';
import Projects from './_components/Projects/Projects';
import Skills from './_components/Skills/Skills';

export default function Home() {
  // Define the structured data schema for search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Stephen Otoni',
    jobTitle: 'Frontend Developer',
    url: 'https://otonistephen.vercel.app', // You will update this later with your Vercel/Custom URL
    sameAs: [
      'https://github.com/otonistephen', // Update with your actual profile links
      'https://instagram.com/otonistephen'
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'JavaScript',
      'Frontend Development',
      'Web Development',
      'Supabase'
    ],
  };

  return (
    <main>
      {/* Inject the JSON-LD script securely into the head element of this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id='home'>
        <Hero />
      </section>
        <section id='about'>
        <About/>
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <FadeInSection>
        <section id='skills'>
          <Skills />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id='contact'>
          <Contacts />
        </section>
      </FadeInSection>
    </main>
  );
}