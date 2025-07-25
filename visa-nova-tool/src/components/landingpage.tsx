import React from "react";
import { useNavigate } from 'react-router-dom';
import { NavBar } from "./Navbar";
import {
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
  ContentCardSubtitle,
  Typography,
  Surface,
  Footer,
  UtilityFragment,
  Button,
} from '@visa/nova-react';
import {
  VisaAccountLow,
  VisaCheckLow,
  VisaCloseLow,
} from '@visa/nova-icons-react';
import { ImageHeaderContentCard } from "./OutputSection/VisaComponents/VisaIndividualComponents/ImageContentCard";
import { DefaultFooter } from "./OutputSection/VisaComponents/VisaIndividualComponents/Footer";
import { CompactDashboardContentCard } from "./OutputSection/VisaComponents/VisaIndividualComponents/CompactDashBoardCardContent";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      {/* Hero Section */}
        <UtilityFragment vPaddingVertical={24} vPaddingHorizontal={16}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
            <Typography variant="display-1">Build with Visa Nova Components</Typography>
            <Typography variant="headline-2" colorScheme="subtle">Search, preview, and copy Visa Nova components for faster and consistent UI development.</Typography>
            <div style={{ display: 'flex', gap: 8 }} className="v-hide-mobile">
              <Button buttonSize="large" onClick={() => navigate('/build')}>Try It Now</Button>
              <Button buttonSize="large" colorScheme="secondary" onClick={() => { localStorage.setItem('hasSeenTour', 'false'); navigate('/build'); }}>View Tutorial</Button>
            </div>
          </div>
        </UtilityFragment>

      <div style={{ display: 'flex', flexDirection: 'row'}}>
        {/* <ImageHeaderContentCard/>
        <ImageHeaderContentCard/> */}
      </div>
      {/* <CompactDashboardContentCard />  */}
      <DefaultFooter />
      
    </div>
  );
};

export default LandingPage;
