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
} from '@chakra-ui/react';
import PreLoginNavbar from '../components/PreLoginNavbar';
import { buttonStyles, theme } from '../styles/theme';

const PatientRegistration = () => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState('John Doe');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement patient registration logic
    console.log('Patient registration submitted');
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.secondary}>
      <PreLoginNavbar />
      <Container maxW="container.lg" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Box mb={8} textAlign="center">
          <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
            Register as a New Patient
          </Heading>
          <Text fontSize={theme.typography.fontSize.lg} color={theme.colors.text.secondary} lineHeight="1.6">
            Join GoDoc today. Provide your details below to create your patient account.
          </Text>
        </Box>

        {/* Form Card */}
        <Box
          bg={theme.colors.background.primary}
          borderRadius={theme.borderRadius['2xl']}
          boxShadow={theme.shadows.lg}
          border="1px solid"
          borderColor={theme.colors.border.light}
          p={{ base: 6, md: 8 }}
          maxW="100%"
          mx="auto"
        >
          <Heading size="lg" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={6}>
            Patient Registration Details
          </Heading>

          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={6}>
              {/* Patient Name */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Patient Name
                </Text>
                <Input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
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

              {/* Mobile Number */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Mobile Number
                </Text>
                <Input
                  type="tel"
                  placeholder="e.g., 123-456-7890"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
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

              {/* Email Address */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Email Address
                </Text>
                <Input
                  type="email"
                  placeholder="e.g., patient@example.com"
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

              {/* Date of Birth */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Date of Birth
                </Text>
                <Input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
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

              {/* Password */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Password
                </Text>
                <Input
                  type="password"
                  placeholder="Create a secure password"
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

              {/* Confirm Password */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Confirm Password
                </Text>
                <Input
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

              {/* Terms and Conditions Checkbox */}
              <Box>
                <Flex align="flex-start" gap={3}>
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      flexShrink: 0,
                      cursor: 'pointer',
                      accentColor: theme.colors.primary[600],
                    }}
                  />
                  <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} lineHeight="1.5">
                    I agree to the GoDoc{' '}
                    <Text
                      as="span"
                      color={theme.colors.primary[600]}
                      fontWeight={theme.typography.fontWeight.semibold}
                      cursor="pointer"
                      _hover={{ textDecoration: 'underline' }}
                      onClick={(e) => {
                        e.preventDefault();
                        // TODO: Open terms and conditions
                        console.log('Terms and Conditions clicked');
                      }}
                    >
                      Terms and Conditions.
                    </Text>
                  </Text>
                </Flex>
              </Box>

              {/* Register Now Button */}
              <Button
                {...buttonStyles.primary}
                w="100%"
                type="submit"
                mt={2}
              >
                Register Now
              </Button>
            </Flex>
          </form>
        </Box>

        {/* Footer Links */}
        <Flex
          justify="center"
          align="center"
          gap={6}
          mt={8}
          flexWrap="wrap"
        >
          <Text
            fontSize={theme.typography.fontSize.sm}
            color={theme.colors.primary[600]}
            fontWeight={theme.typography.fontWeight.semibold}
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => navigate('/login')}
          >
            Back to Login
          </Text>
          <Text
            fontSize={theme.typography.fontSize.sm}
            color={theme.colors.primary[600]}
            fontWeight={theme.typography.fontWeight.semibold}
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => {
              // TODO: Open help/support
              console.log('Need Help clicked');
            }}
          >
            Need Help?
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default PatientRegistration;

