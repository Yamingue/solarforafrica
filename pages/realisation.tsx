import PhotoAlbum from "react-photo-album";
import styled from 'styled-components';
import Page from 'components/Page';
import photos from 'utils/photos';
import RichText from 'components/RichText';
import relisation from 'utils/realistion';
// import FaqSection from 'views/PricingPage/FaqSection';
// import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
 
  return (
    <Page title="Réalisation" description="Visualiser nos dernières réalisations.">
      <Wrapper>
        <CustomRichText>
        <ul>
          {
          relisation.map((el,k)=><li key={k}>{el}</li>)
          }
        </ul>
        </CustomRichText>
        <PhotoAlbum layout="masonry" photos={photos} />
        
        {/* <PricingTablesSection />
        <FaqSection /> */}
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
const CustomRichText = styled(RichText)`
  li {
    margin: auto;
    width: fit-content;
  }
`;
