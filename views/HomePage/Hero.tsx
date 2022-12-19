import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Choisissez les énergies renouvelables pour votre habitation.</CustomOverTitle>
        <Heading>Solar for Africa and renewables energies</Heading>
        <Description>
          Nous nous appuyons sur notre expérience de l’énergie solaire pour concevoir et assembler nos kits solaires.
          Les kits SOLAR FOR AFRICA sont livrés prêts à être posés et utilisés sur des châssis équipés des protections, de l’onduleur, du régulateur de charge, des batteries et des câbles solaires. Les kits comprennent les panneaux photovoltaïques ainsi que les châssis de toiture.
          En option, sur les grosses puissances des systèmes de trackers solaires peuvent être adjoints.
        </Description>
        <CustomButtonGroup>
          <NextLink href='/contact'>
          <Button color='primary' onClick={() => {
            //setIsModalOpened(true)
            }}>
            Contactez-nous <span>&rarr;</span>
          </Button>
          </NextLink>
          {/* <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink> */}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
