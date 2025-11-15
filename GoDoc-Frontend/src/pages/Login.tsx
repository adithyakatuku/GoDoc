import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Image,
} from '@chakra-ui/react';
import godocLogo from '../assets/godoc-logo.png';
import { buttonStyles, theme } from '../styles/theme';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    // For now, navigate to patient home
    navigate('/patient/home');
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.secondary} display="flex" alignItems="center" justifyContent="center" py={12}>
      <Container maxW="lg" px={6}>
        <Box
          bg={theme.colors.background.primary}
          borderRadius={theme.borderRadius['3xl']}
          boxShadow={theme.shadows['2xl']}
          border="1px solid"
          borderColor={theme.colors.border.light}
          p={{ base: 8, md: 12 }}
          maxW="480px"
          mx="auto"
        >
          {/* Logo */}
          <Flex justify="center" mb={8}>
            <Flex align="center" gap={3}>
              <Image src={godocLogo} alt="GoDoc" h={10} />
              <Heading size="xl" color={theme.colors.primary[500]} fontWeight={theme.typography.fontWeight.extrabold}>
                GoDoc
              </Heading>
            </Flex>
          </Flex>

          {/* Title and Subtitle */}
          <Box textAlign="center" mb={8}>
            <Heading size="xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
              Welcome to GoDoc
            </Heading>
            <Text fontSize={theme.typography.fontSize.base} color={theme.colors.text.secondary} lineHeight="1.6">
              Sign in to your account or create a new one.
            </Text>
          </Box>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={6} mb={6}>
              {/* Email/Username Field */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Email or Username
                </Text>
                <Input
                  type="text"
                  placeholder="Enter your email or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderRadius={theme.borderRadius.md}
                  bg={theme.colors.background.primary}
                  border="1px solid"
                  borderColor={theme.colors.border.light}
                  h="48px"
                  _focus={{
                    borderColor: theme.colors.primary[600],
                    boxShadow: `0 0 0 0.25rem ${theme.colors.primary[200]}`,
                  }}
                />
              </Box>

              {/* Password Field */}
              <Box>
                <Flex justify="space-between" align="center" mb={2}>
                  <Text
                    as="label"
                    fontSize={theme.typography.fontSize.sm}
                    fontWeight={theme.typography.fontWeight.semibold}
                    color={theme.colors.text.primary}
                    display="block"
                  >
                    Password
                  </Text>
                  <Text
                    fontSize={theme.typography.fontSize.sm}
                    color={theme.colors.primary[600]}
                    fontWeight={theme.typography.fontWeight.semibold}
                    cursor="pointer"
                    _hover={{ textDecoration: 'underline' }}
                    onClick={() => {
                      // TODO: Implement forgot password
                      console.log('Forgot password clicked');
                    }}
                  >
                    Forgot Password?
                  </Text>
                </Flex>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  borderRadius={theme.borderRadius.md}
                  bg={theme.colors.background.primary}
                  border="1px solid"
                  borderColor={theme.colors.border.light}
                  h="48px"
                  _focus={{
                    borderColor: theme.colors.primary[600],
                    boxShadow: `0 0 0 0.25rem ${theme.colors.primary[200]}`,
                  }}
                />
              </Box>
            </Flex>

            {/* Sign In Button */}
            <Button
              {...buttonStyles.primary}
              w="100%"
              type="submit"
              mb={6}
            >
              Sign In
            </Button>
          </form>

          {/* Sign Up Link */}
          <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} textAlign="center">
            Don't have an account?{' '}
            <Text
              as="span"
              color={theme.colors.primary[500]}
              fontWeight={theme.typography.fontWeight.bold}
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => navigate('/register')}
            >
              Sign Up
            </Text>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;

