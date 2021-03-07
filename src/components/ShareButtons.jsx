import { HStack, Stack, Text } from '@chakra-ui/react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const ShareButtons = props => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} spacing={1} align="center">
      <Text color="black">{props.label}</Text>
      <HStack spacing={1}>
        <FacebookShareButton url={props.shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={props.shareUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={props.shareUrl}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </HStack>
    </Stack>
  );
};

export default ShareButtons;
