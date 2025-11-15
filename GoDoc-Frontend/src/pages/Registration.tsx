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

const Registration = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center" py={12}>
      <Container maxW="lg" px={6}>
        <Box
          bg="white"
          borderRadius="3xl"
          boxShadow="2xl"
          border="1px"
          borderColor="gray.200"
          p={{ base: 10, md: 16 }}
          maxW="540px"
          mx="auto"
        >
          {/* Logo */}
          <Flex justify="center" mb={10}>
            <Flex align="center" gap={3}>
              <Image src={godocLogo} alt="GoDoc" h={12} />
              <Heading size="2xl" color="#11d452" fontWeight="800">
                GoDoc
              </Heading>
            </Flex>
          </Flex>

          {/* Title and Subtitle */}
          <Box textAlign="center" mb={12}>
            <Heading size="2xl" fontWeight="800" color="gray.900" mb={4} lineHeight="1.2">
              Register Your Account
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="1.6">
              Choose your role to get started with GoDoc
            </Text>
          </Box>

          {/* Registration Buttons */}
          <Flex direction="column" gap={5} mb={10}>
            <Button
              bg="#34C759"
              color="white"
              fontWeight="500"
              borderRadius="8px"
              h="48px"
              fontSize="18px"
              lineHeight="28px"
              w="100%"
              px={3}
              border="none"
              _hover={{
                bg: '#29A047',
              }}
              _active={{
                bg: '#207B37',
              }}
              transition="background 0.2s ease"
              onClick={() => navigate('/patient/home')}
            >
              Register as a Patient
            </Button>
            <Button
              bg="white"
              color="gray.800"
              fontWeight="500"
              borderRadius="8px"
              h="48px"
              fontSize="18px"
              lineHeight="28px"
              w="100%"
              px={3}
              border="2px solid"
              borderColor="gray.300"
              _hover={{
                bg: 'gray.50',
                borderColor: 'gray.400',
              }}
              _active={{
                bg: 'gray.100',
                borderColor: 'gray.500',
              }}
              transition="all 0.2s ease"
              onClick={() => navigate('/doctor/home')}
            >
              Register as a Hospital
            </Button>
          </Flex>

          {/* Login Link */}
          <Text fontSize="sm" color="gray.600" textAlign="center">
            Already have an account?{' '}
            <Text
              as="span"
              color="#11d452"
              fontWeight="700"
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

