import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import godocLogo from '../assets/godoc-logo.png';
import { buttonStyles, theme } from '../styles/theme';

const Registration = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100vh" bg={theme.colors.background.secondary} display="flex" alignItems="center" justifyContent="center" py={12}>
      <Container maxW="lg" px={6}>
        <Box
          bg={theme.colors.background.primary}
          borderRadius={theme.borderRadius['3xl']}
          boxShadow={theme.shadows['2xl']}
          border="1px"
          borderColor={theme.colors.border.light}
          p={{ base: 10, md: 16 }}
          maxW="540px"
          mx="auto"
        >
          {/* Logo */}
          <Flex justify="center" mb={10}>
            <Flex align="center" gap={3}>
              <Image src={godocLogo} alt="GoDoc" h={12} />
              <Heading size="2xl" color={theme.colors.primary[500]} fontWeight={theme.typography.fontWeight.extrabold}>
                GoDoc
              </Heading>
            </Flex>
          </Flex>

          {/* Title and Subtitle */}
          <Box textAlign="center" mb={12}>
            <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={4} lineHeight="1.2">
              Register Your Account
            </Heading>
            <Text fontSize={theme.typography.fontSize.lg} color={theme.colors.text.secondary} lineHeight="1.6">
              Choose your role to get started with GoDoc
            </Text>
          </Box>

          {/* Registration Buttons */}
          <Flex direction="column" gap={5} mb={10}>
            <Button
              {...buttonStyles.primary}
              w="100%"
              onClick={() => navigate('/patient/home')}
            >
              Register as a Patient
            </Button>
            <Button
              {...buttonStyles.secondary}
              w="100%"
              onClick={() => navigate('/register/hospital')}
            >
              Register as a Hospital
            </Button>
          </Flex>

          {/* Login Link */}
          <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} textAlign="center">
            Already have an account?{' '}
            <Text
              as="span"
              color={theme.colors.primary[500]}
              fontWeight={theme.typography.fontWeight.bold}
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => navigate('/login')}
            >
              Log In
            </Text>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Registration;

