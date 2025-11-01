import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const PatientDashboard = () => {
  return (
    <Box minH="100vh" bg="#e8f5f0">
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        <Heading 
          size="xl" 
          fontWeight="800" 
          mb={10} 
          textAlign={{ base: 'center', lg: 'left' }}
          color="gray.800"
        >
          Welcome back, Sarah
        </Heading>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
          {/* Left Column */}
          <GridItem>
            {/* Upcoming Appointment */}
            <Box mb={8}>
              <Heading size="md" fontWeight="800" mb={4} color="gray.800">
                Upcoming Appointment
              </Heading>
              <Box
                as="button"
                bg="white"
                borderRadius="16px"
                boxShadow="sm"
                p={6}
                transition="all 0.3s ease"
                cursor="pointer"
                w="100%"
                textAlign="left"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Flex justify="space-between" align="center">
                  <Box flex={1}>
                    <Text color="gray.600" fontSize="14px" mb={2}>
                      Today, 10:00 AM
                    </Text>
                    <Heading size="sm" fontWeight="800" mb={1} color="gray.800">
                      Dr. Emily Carter
                    </Heading>
                    <Text color="gray.600" fontSize="14px">
                      General Practitioner
                    </Text>
                  </Box>
                  <Box
                    w="100px"
                    h="100px"
                    borderRadius="12px"
                    backgroundImage='url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb71DnBNtYjSn4uHLfHcKS9D0Il2S044o_J7MIhN9qw395yIBiuUgiNMXAVzhg0iStZaMh8vabS-y1SbvL9MAEqf9YXX1k6xQmBRARmk-u8EN76h2DTBBt2q-rwnKIzklDmJrpmbzuyVb8ldyPgOENp3YhgSez8ibYpkcESWk5WGemsnseQxbLCmi2QjbBs9Jxuw-GaVrhx4PfHL3173bh4Njhuk-Q2lBgpp5GMSnpYZAX_V4d_OAcJo6z1pwxqIxIb-cgFPTdSMeu")'
                    backgroundSize="cover"
                    backgroundPosition="center"
                  />
                </Flex>
              </Box>
            </Box>

            {/* Recent Documents */}
            <Box>
              <Heading size="md" fontWeight="800" mb={4} color="gray.800">
                Recent Documents
              </Heading>
              <Box
                as="button"
                bg="white"
                borderRadius="16px"
                boxShadow="sm"
                p={6}
                transition="all 0.3s ease"
                cursor="pointer"
                w="100%"
                textAlign="left"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Flex justify="space-between" align="center">
                  <Box flex={1}>
                    <Heading size="sm" fontWeight="800" mb={1} color="gray.800">
                      Blood Test Results
                    </Heading>
                    <Text color="gray.600" fontSize="14px">
                      Uploaded on July 15, 2024
                    </Text>
                  </Box>
                  <Box
                    w="100px"
                    h="100px"
                    borderRadius="12px"
                    backgroundImage='url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5HovB2O3GUR5PsNzjnuRf-Mk75U-TIXkgF-CNAzhtwJpQJvuL8Fa3h5aKfVAzmOF0tJlyNLRw-ZgsMFgVChgXC7Bo_YBszBhiVLMR1J9wR5IHod8XiAU3KDYe3X9aS7XwFfgD_JLGxTxabRuOaX02-4K_5Sneex5fSR2ePlAHcJSusXUTNnuAeeBfZ0E_jcx9qM2vpIJSMK0SzR88Nr6QNAxtQMZYnsnqwOnOg99iFYl51NGmqCdgiiV_1pRQ_TBFnLZZF5TfI1px")'
                    backgroundSize="cover"
                    backgroundPosition="center"
                  />
                </Flex>
              </Box>
            </Box>
          </GridItem>

          {/* Right Column - Quick Actions */}
          <GridItem>
            <Box>
              <Heading size="md" fontWeight="800" mb={4} color="gray.800">
                Quick Actions
              </Heading>
              <Flex direction="column" gap={4}>
                <Button
                  bg="#10b981"
                  color="white"
                  size="lg"
                  fontWeight="700"
                  borderRadius="12px"
                  py={4}
                  border="none"
                  transition="all 0.2s ease"
                  _hover={{
                    opacity: 0.9,
                    transform: 'translateY(-1px)',
                  }}
                >
                  Find a Doctor
                </Button>
                <Button
                  bg="#c6f4e3"
                  color="#10b981"
                  size="lg"
                  fontWeight="700"
                  borderRadius="12px"
                  py={4}
                  border="none"
                  transition="all 0.2s ease"
                  _hover={{
                    opacity: 0.9,
                    transform: 'translateY(-1px)',
                  }}
                >
                  Find a Hospital
                </Button>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientDashboard;

