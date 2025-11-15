import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import godocLogo from '../assets/godoc-logo.png';
import { theme } from '../styles/theme';

const PreLoginNavbar = () => {
  return (
    <Box bg={theme.colors.background.primary} borderBottom="1px solid" borderColor={theme.colors.border.light} py={4}>
      <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }}>
        <Link to="/login">
          <Flex align="center" gap={3} cursor="pointer" _hover={{ opacity: 0.8 }}>
            <Image src={godocLogo} alt="GoDoc" h={10} />
            <Heading size="md" color={theme.colors.primary[500]} fontWeight={theme.typography.fontWeight.extrabold}>
              GoDoc
            </Heading>
          </Flex>
        </Link>
      </Container>
    </Box>
  );
};

export default PreLoginNavbar;

