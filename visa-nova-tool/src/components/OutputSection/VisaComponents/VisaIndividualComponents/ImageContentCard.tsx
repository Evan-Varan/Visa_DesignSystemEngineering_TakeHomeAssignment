import { VisaChevronRightTiny } from '@visa/nova-icons-react';
import {
  Button,
  ContentCard,
  ContentCardBody,
  ContentCardImage,
  ContentCardSubtitle,
  ContentCardTitle,
  Link,
  Typography,
  Utility,
} from '@visa/nova-react';

/// This is the base url for where your site is deployed. `import.meta.env.BASE_URL` is the environment variable used to import the base url for Vite. Change this import to match your build tool's base url.
const BASE_URL = import.meta.env.BASE_URL;

export const ImageHeaderContentCard = () => {
  return (
    <ContentCard style={{inlineSize: '50vw'}}>
      <ContentCardImage
        // If your image is NOT decorative, be sure to write alt text describing the image
        alt=""
        // Make sure the src path is correct for your image
        src= '/masantocreative-ZqdetwBEdAA-unsplash.png'
        style={{inlineSize: '100%', objectFit: 'contain', overflow: 'hidden' }}
        tag="img"
      />
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
        <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
        <Typography className="v-pt-4">
          This is optional text that describes the headline and subtitle in more detail.
        </Typography>
        <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
          <Button>Primary action</Button>
          <Link href="./content-card" noUnderline>
            Destination label <VisaChevronRightTiny rtl />
          </Link>
        </Utility>
      </Utility>
    </ContentCard>
  );
};