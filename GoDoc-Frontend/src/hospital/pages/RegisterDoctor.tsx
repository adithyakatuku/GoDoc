import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Input,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { buttonStyles, buttonStylesSecondary, cardStyles, theme } from '../../styles/theme';

const RegisterDoctor = () => {
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState('Dr. John Doe');
  const [department, setDepartment] = useState('General Surgery');
  const [email, setEmail] = useState('john.doe@example.com');
  const [specialization, setSpecialization] = useState('MD, PhD, Cardiologist');
  const [associatedBranch, setAssociatedBranch] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement doctor registration logic
    console.log('Doctor registration submitted', {
      doctorName,
      department,
      email,
      specialization,
      associatedBranch,
      password,
    });
    // Navigate back to doctors page after successful registration
    navigate('/hospital/doctors');
  };

  const handleClear = () => {
    setDoctorName('');
    setDepartment('');
    setEmail('');
    setSpecialization('');
    setAssociatedBranch('');
    setPassword('');
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.tertiary}>
      <Container maxW="container.lg" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Box mb={8}>
          <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
            Doctor Management
          </Heading>
          <Text fontSize={theme.typography.fontSize.lg} color={theme.colors.text.secondary} lineHeight="1.6">
            Streamline doctor registration and manage existing profiles efficiently. Ensure all medical staff information is up-to-date and easily accessible.
          </Text>
        </Box>

        {/* Registration Form Card */}
        <Box {...cardStyles.default}>
          <Heading size="lg" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={8}>
            Register New Doctor
          </Heading>

          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} mb={6}>
              {/* Left Column */}
              <GridItem>
                {/* Doctor Name */}
                <Box mb={6}>
                  <Text
                    as="label"
                    fontSize={theme.typography.fontSize.sm}
                    fontWeight={theme.typography.fontWeight.semibold}
                    color={theme.colors.text.primary}
                    mb={2}
                    display="block"
                  >
                    Doctor Name
                  </Text>
                  <Input
                    type="text"
                    placeholder="Enter doctor's full name"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    borderRadius={theme.borderRadius.md}
                    bg={theme.colors.background.primary}
                    border="1px solid"
                    borderColor={theme.colors.border.light}
                    h="48px"
                    _focus={{
                      borderColor: theme.colors.primary[600],
                      boxShadow: `0 0 0 0.25rem ${theme.colors.primary[200]}`,
                    }}
                    required
                  />
                </Box>

                {/* Department */}
                <Box>
                  <Text
                    as="label"
                    fontSize={theme.typography.fontSize.sm}
                    fontWeight={theme.typography.fontWeight.semibold}
                    color={theme.colors.text.primary}
                    mb={2}
                    display="block"
                  >
                    Department
                  </Text>
                  <Input
                    type="text"
                    placeholder="Enter department name"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    borderRadius={theme.borderRadius.md}
                    bg={theme.colors.background.primary}
                    border="1px solid"
                    borderColor={theme.colors.border.light}
                    h="48px"
                    _focus={{
                      borderColor: theme.colors.primary[600],
                      boxShadow: `0 0 0 0.25rem ${theme.colors.primary[200]}`,
                    }}
                    required
                  />
                </Box>
              </GridItem>

              {/* Right Column */}
              <GridItem>
                {/* Email Address */}
                <Box mb={6}>
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
                    placeholder="Enter email address"
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
                    required
                  />
                </Box>

                {/* Specialization / Education / Titles */}
                <Box>
                  <Text
                    as="label"
                    fontSize={theme.typography.fontSize.sm}
                    fontWeight={theme.typography.fontWeight.semibold}
                    color={theme.colors.text.primary}
                    mb={2}
                    display="block"
                  >
                    Specialization / Education / Titles
                  </Text>
                  <Input
                    type="text"
                    placeholder="e.g., MD, PhD, Cardiologist"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    borderRadius={theme.borderRadius.md}
                    bg={theme.colors.background.primary}
                    border="1px solid"
                    borderColor={theme.colors.border.light}
                    h="48px"
                    _focus={{
                      borderColor: theme.colors.primary[600],
                      boxShadow: `0 0 0 0.25rem ${theme.colors.primary[200]}`,
                    }}
                    required
                  />
                </Box>
              </GridItem>
            </Grid>

            {/* Full Width Fields */}
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} mb={6}>
              {/* Associated Branch */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Associated Branch
                </Text>
                <Box position="relative">
                  <select
                    value={associatedBranch}
                    onChange={(e) => setAssociatedBranch(e.target.value)}
                    style={{
                      width: '100%',
                      borderRadius: theme.borderRadius.md,
                      border: '1px solid',
                      borderColor: theme.colors.border.light,
                      padding: '12px 40px 12px 20px',
                      fontSize: theme.typography.fontSize.sm,
                      fontWeight: theme.typography.fontWeight.medium,
                      backgroundColor: theme.colors.background.primary,
                      color: theme.colors.text.primary,
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '12px',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.colors.primary[600];
                      e.target.style.boxShadow = `0 0 0 0.25rem ${theme.colors.primary[200]}`;
                      e.target.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme.colors.border.light;
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  >
                    <option value="">Select a branch</option>
                    <option value="main">Main Campus Hospital</option>
                    <option value="downtown">Downtown Clinic</option>
                    <option value="suburban">Suburban Medical Center</option>
                    <option value="community">Community Health Clinic</option>
                  </select>
                </Box>
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
                  placeholder="Set a secure password"
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
                  required
                />
              </Box>
            </Grid>

            {/* Action Buttons */}
            <Flex justify="flex-end" gap={4} mt={8}>
              <Button
                {...buttonStylesSecondary.outlined}
                onClick={handleClear}
                type="button"
              >
                Clear Form
              </Button>
              <Button
                {...buttonStyles.primary}
                type="submit"
              >
                Register Doctor
              </Button>
            </Flex>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterDoctor;

