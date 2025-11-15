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
  Textarea,
  Icon,
} from '@chakra-ui/react';
import { HiCloudUpload, HiPlus, HiX } from 'react-icons/hi';
import PreLoginNavbar from '../components/PreLoginNavbar';
import { buttonStyles, buttonStylesSecondary, theme } from '../styles/theme';

const HospitalRegistration = () => {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState("St. Jude's Medical Center");
  const [email, setEmail] = useState('registration@stjudes.org');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [foundationDate, setFoundationDate] = useState('');
  const [motto, setMotto] = useState("Caring for every life, every moment.");
  const [description, setDescription] = useState("St. Jude's is a leading medical institution dedicated to patient care, research, and medical education. Our mission is to provide compassionate, high-quality healthcare services...");
  const [founders, setFounders] = useState<string[]>(['']);

  const handleAddFounder = () => {
    setFounders([...founders, '']);
  };

  const handleRemoveFounder = (index: number) => {
    setFounders(founders.filter((_, i) => i !== index));
  };

  const handleFounderChange = (index: number, value: string) => {
    const newFounders = [...founders];
    newFounders[index] = value;
    setFounders(newFounders);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement hospital registration logic
    console.log('Hospital registration submitted');
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.secondary}>
      <PreLoginNavbar />
      <Container maxW="container.lg" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Box mb={8}>
          <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
            Register Your Hospital
          </Heading>
          <Text fontSize={theme.typography.fontSize.lg} color={theme.colors.text.secondary} lineHeight="1.6">
            Provide the essential details to get your hospital listed and start managing your practice.
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
        >
          <Heading size="lg" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={6}>
            Hospital Registration Details
          </Heading>

          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={6}>
              {/* Hospital Name */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Hospital Name
                </Text>
                <Input
                  type="text"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
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

              {/* Hospital Logo */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Hospital Logo
                </Text>
                <Button
                  {...buttonStylesSecondary.outlined}
                  onClick={(e) => {
                    e.preventDefault();
                    // TODO: Implement file upload
                    console.log('Upload logo clicked');
                  }}
                >
                  <Flex align="center" gap={2}>
                    <Icon as={HiCloudUpload} w={5} h={5} />
                    <Text>Upload Logo</Text>
                  </Flex>
                </Button>
              </Box>

              {/* Founders */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Founders
                </Text>
                {founders.map((founder, index) => (
                  <Flex key={index} gap={2} mb={2} align="flex-end">
                    <Box flex={1}>
                      <Text
                        fontSize={theme.typography.fontSize.xs}
                        color={theme.colors.text.secondary}
                        mb={1}
                      >
                        Founder {index + 1}
                      </Text>
                      <Input
                        type="text"
                        placeholder="Enter founder's name"
                        value={founder}
                        onChange={(e) => handleFounderChange(index, e.target.value)}
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
                    {founders.length > 1 && (
                      <Button
                        {...buttonStyles.secondary}
                        h="48px"
                        minW="48px"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveFounder(index);
                        }}
                      >
                        <Icon as={HiX} w={5} h={5} />
                      </Button>
                    )}
                  </Flex>
                ))}
                <Button
                  {...buttonStylesSecondary.outlined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddFounder();
                  }}
                >
                  <Flex align="center" gap={2}>
                    <Icon as={HiPlus} w={5} h={5} />
                    <Text>Add Founder</Text>
                  </Flex>
                </Button>
              </Box>

              {/* Foundation Date */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Foundation Date
                </Text>
                <Input
                  type="date"
                  value={foundationDate}
                  onChange={(e) => setFoundationDate(e.target.value)}
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

              {/* Hospital Motto */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Hospital Motto
                </Text>
                <Input
                  type="text"
                  value={motto}
                  onChange={(e) => setMotto(e.target.value)}
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

              {/* Description / About */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Description / About
                </Text>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  borderRadius={theme.borderRadius.md}
                  bg={theme.colors.background.primary}
                  border="1px solid"
                  borderColor={theme.colors.border.light}
                  minH="120px"
                  resize="vertical"
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

              {/* Register Hospital Button */}
              <Button
                {...buttonStyles.primary}
                w="100%"
                type="submit"
                mt={4}
              >
                Register Hospital
              </Button>
            </Flex>
          </form>

          {/* Login Link */}
          <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} textAlign="center" mt={6}>
            Already have an account?{' '}
            <Text
              as="span"
              color={theme.colors.primary[500]}
              fontWeight={theme.typography.fontWeight.bold}
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => navigate('/login')}
            >
              Sign In
            </Text>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default HospitalRegistration;

