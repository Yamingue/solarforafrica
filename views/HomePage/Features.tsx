import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import OverTitle from 'components/OverTitle';

const FEATURES = [
  {
    imageUrl: '/energie-renouvelable.svg',
    title: 'Energies renouvelables.',
    description:
      `Étude, conception, réalisation, réhabilitation et maintenance :
      Electricité solaire I Chauffe-eau Solaire I Froid et climatisation solaire I Pompage solaire I Systèmes d'irrigation solaire goûte à goûte et par inondation I Éoliennes de pompage et produc-trice d'électricité Production de biogaz I Production de charbon vert`,
  },
  {
    imageUrl: '/formations.svg',
    title: 'Formations.',
    description:
      'Technique & Pratique en Energie Solaire Photovoltaïque',
  },
  {
    imageUrl: '/environnement.svg',
    title: 'Genie Rural, Civil & environnemental.',
    description:
      `Eco-construction ou construction durable, création, restauration, rénovation, réhabilitation des bâtiments permettant de respecter au mieux l'écologie à chaque étape de la construction, afin de profité pleinement du de ces atouts: (chauffage, consommation d'énergie, rejet des divers flux : eau, déchets), études d'impact environnementale.
      Forages manuels, mécaniques, et puits pastoraux.
      Construction et Réfection des
      Bâtiments, Construction métallique, Plomberie.`,
  },
  {
    imageUrl: '/informatique.svg',
    title: 'Informatique & Télécoms.',
    description:
      `Drive test sites, Entretien des pilonnes, Construction des sites, VSAT, Création des bases de données, Maintenance informatique`,
  },
  {
    imageUrl: '/assurance.svg',
    title: 'Assurance SAV,Vent et installations.',
    description:
      `Nous assurons le service après vente de tout nos équipement`,
  },
];

export default function Features() {
  return (
    <Container>
      <div
        style={{
          margin:'0px auto',
          paddingBottom:50,
          textAlign:'center'
        }}
      >
        <OverTitle>Notre domaine d’intervention</OverTitle>
      </div>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
