import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/offres/sf40.png',
    title: 'd.light SF40 Solar Fan.',
    description:
      `
      Cage size:  12”
      Category:   Solar rechargeable fan
      Speed setting:  2+/- speed modes
      Runtime:  8+ hours
      Solar panel/Battery Additional features:  10W panel/33Wh Li-ion battery
      Gift :  In-built LED light Handle for easy lifting and carrying
      box weight: 3.4 kg
      Gift box dimensions:  560(L)x135(D)x396(H) mm
      `,
  },
  {
    imageUrl: '/offres/s200.png',
    title: 'd.light S200 Solar Lantern',
    description:
      `
      Solar Panel:  2.35W   
      Battery:    2400mAh
      Lighting Runtime:   Runtime at highest setting (200 lumens) is 5 hours on full charge battery.
      Additional Features: Customizable brightness settings, free mobile charging
      Units in a carton:  12
      Gift box Weight:  0.66 kg
      Gift box Dimensions:  161(L)x78(W)x284(H)mm
      40’ HQ Container Loading: 14400 units
      `,
  },
  {
    imageUrl: '/offres/d180.png',
    title: 'd.light D180 Solar Home System.',
    description:
      `
      Solar Panel: 12W
      Battery:  10 Ah LFP (32 Wh)
      Lamps:  1X tube light, 2X bulbs
      Accessorie: Radio, torch, mobile charging adapters
      Tube light: Up to 220 lumens
      Bulbs:  Up to 120 lumens
      Lighting Runtime: 2700 lumen-hours of light on full battery
      Additional Features: Two brightness settings
      Units in a carton: 6
      Gift box Weight: 3kg
      Gift box Dimensions: 495(L)x190(W)x80(H)mm
      40’ HQ Container Loading: 7500 units
      `,
  },
  {
    imageUrl: '/offres/d100.png',
    title: 'd.light D100 Solar Home System.',
    description:
      `
      Solar Panel:  9W
      Battery : 10 Ah LFP (32 Wh)
      Lamps: 1X tube light, 2X bulbs
      Accessories:  Mobile charging adapters
      Bulbs:  Up to 120 lumens
      Tube light: Up to 220 lumens
      Lighting Runtime: 3900 lumen-hours of light on full battery
      Additional Features:  Two brightness settings
      Units in a carton:  6
      Gift box Weight:  3.56 kg
      Gift box Dimensions:  400(L)x195(H)x80(D)mm
      40’ HQ Container Loading: 8700 units
      `,
  },
  {
    imageUrl: '/offres/tele.png',
    title: 'd.light X1000 Système solaire domestique avec télévision solaire',
    description:
      `
      `,
  }, 
];

export default function FeaturesPage() {
  return (
    <Page title="OFFRES" description="Nos solutions solaires rendent l'énergie propre universellement disponible et abordable.">
      <Wrapper>
        <SectionTitle>Découvrez cette introduction rapide</SectionTitle>
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
