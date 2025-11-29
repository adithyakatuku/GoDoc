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
} from '@chakra-ui/react';
import { buttonStyles, cardStyles, theme } from '../../styles/theme';

const RegisterBranch = () => {
  const navigate = useNavigate();
  const [branchName, setBranchName] = useState('');
  const [branchEmail, setBranchEmail] = useState('');
  const [location, setLocation] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement branch registration logic
    console.log('Branch registration submitted', {
      branchName,
      branchEmail,
      location,
      adminPassword,
    });
    // Navigate back to branches page after successful registration
    navigate('/hospital/branches');
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.tertiary}>
      <Container maxW="container.lg" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Box mb={8}>
          <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
            Register New Branch
          </Heading>
          <Text fontSize={theme.typography.fontSize.lg} color={theme.colors.text.secondary} lineHeight="1.6">
            Fill in the details below to add a new hospital branch to the system.
          </Text>
        </Box>

        {/* Registration Form Card */}
        <Box {...cardStyles.default}>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={6}>
              {/* Branch Name */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Branch Name
                </Text>
                <Input
                  type="text"
                  placeholder="Enter branch name (e.g., GoDoc City Hospital)"
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
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

              {/* Branch Email */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Branch Email
                </Text>
                <Input
                  type="email"
                  placeholder="Enter branch email (e.g., contact@godoc-city.com)"
                  value={branchEmail}
                  onChange={(e) => setBranchEmail(e.target.value)}
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

              {/* Location (Full Address) */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Location (Full Address)
                </Text>
                <Input
                  type="text"
                  placeholder="Enter full address (e.g., 123 Health Ave, Medical City, 12345)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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

              {/* Admin Password */}
              <Box>
                <Text
                  as="label"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.text.primary}
                  mb={2}
                  display="block"
                >
                  Admin Password
                </Text>
                <Input
                  type="password"
                  placeholder="Set a secure password for branch admin"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
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

              {/* Register Branch Button */}
              <Button
                {...buttonStyles.primary}
                w="100%"
                type="submit"
                mt={4}
              >
                Register Branch
              </Button>
            </Flex>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterBranch;

