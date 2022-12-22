import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
//import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/equipes/1.jpg',
    title: 'YAM-KING',
    description:'Ingenieur telecom'
  }, 
  {
    imageUrl: '/equipes/2.jpeg',
    title: 'MARIE KATTY',
    description:'INGENIEUR SOLAIRE'
  }, 
  {
    imageUrl: '/equipes/3.jpg',
    title: 'KAGRO VALERY',
    description:'INGENIEUR ELECTRIC'
  }, 
  // {
  //   imageUrl: '/equipes/4.jpg',
  //   title: 'YAM-KING',
  //   description:'ANALYSTE'
  // }, 
  // {
  //   imageUrl: '/equipes/5.jpg',
  //   title: 'YAM-KING',
  //   description:'Ingenieur telecom'
  // }, 
];

export default function FeaturesPage() {
  return (
    <Page title="NOTRE EQUIPE" description="SOLAR FOR AFRICA mobilise l'expertise nationale et internationale pour définir les attentes de ses clients et réaliser des ser-vices demandés dans le délais et avec professionnalisme.">
      <Wrapper>
        {/* <SectionTitle>Découvrez cette introduction rapide</SectionTitle> */}
        {/* <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" /> */}
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
