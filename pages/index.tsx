import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
// import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import Confiance from 'views/HomePage/Confiance';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/pompe2.jpg" title="PHOTOVOLTAIQUE – POMPES SOLAIRES" overTitle="POMPES SOLAIRES">
            <p>
              L&apos;utilisation de systèmes de pompage immergés ou en surface alliés à un système photovoltaïque est une alternative intéressante. En effet, l&apos;énergie solaire reste abondante et gratuite, elle est captée via des panneaux solaires posés soit en châssis au sol soit sur des trackers solaires qui vont suivre la course du soleil pour augmenter les performances du système.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/solar.jpeg" title="PHOTOVOLTAIQUE –Kit automatique et hybride" overTitle="KIT AUTONOME" reversed>
            <p>
              Les kits SOLAR FOR AFRICA sont livrés prêts à être posés et utilisés sur des châssis équipés des protections, de l&apos;onduleur, du régulateur de charge, des batteries et des câbles solaires. Les kits comprennent les panneaux photovoltaïques ainsi que les châssis de toiture.
            </p>
            {/* <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul> */}
          </BasicSection>
          <BasicSection imageUrl="/offres/tele.png" title="PHOTOVOLTAIQUE – KIT SOLAIRE" overTitle="KIT SOLAIRE">
            <p>
              Le KIT SOLAIRE est une centrale solaire, faisant fonctionner plusieurs appareils comme le téléviseur 32 pouces et le ventilateur, les accessoires, les téléphones portables et les lumières vives d&apos;une simple pression sur un interrupteur.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/offres/eolinne.jpg" title="ÉNERGIE ÉOLIENNE" overTitle="KIT ÉOLIENNE" reversed>
            <p>
            Allant des petites éolienne de quelques watt à des grandes Éolienne de plusieurs kilowatts, nous proposons des aérogénérateur de dernière génération et très performant.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/offres/pomp.jpg" title="SYSTÈME DE POMPAGE ÉOLIEN" overTitle="POMPAGE ÉOLIEN" >
            <p>
            Nous proposons des éoliennes de pompage pour la production d'eau potable et l'abreuvoir des bétails en site isolés
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <Confiance />
          {/* <FeaturesGallery /> */}
          <Features />
          <Testimonials />
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
