import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';

interface Appointment {
  id: number;
  patientName: string;
  reason: string;
  time: string;
  room: string;
  imageUrl: string;
}

const DoctorDashboard = () => {
  const stats = [
    { label: 'Total Appointments', value: '12' },
    { label: 'Completed', value: '5' },
    { label: 'Remaining', value: '7' },
  ];

  const upcomingAppointments: Appointment[] = [
    {
      id: 1,
      patientName: 'Sarah Miller',
      reason: 'Routine Check-up',
      time: '10:00 AM',
      room: 'Room 302',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOTtARPMUrlX4jd0YLMVdbAazI5VZV-6c3LHo6rEOVSw7hXqm4r1hZ7RRSuyRK-F35M_Yatr2okkeneky_5fE_oE-bmBrhFci-ofHpPn1ZmGYT3sWjRBnk1R-6_LQjvCz-2wTNqfd2oWliuXl7Uu0dT1k6Qbs-EpRsqYr-H8VkdHw9NKWPG_ojHyDuYHYewiIC0c11yzjAOl-QFIOAWQnVeEBIbsApSKtdt6eXbFbrrleLLl3mJrpMK-MwTEmgnTXZ1YQO0TNYi-o7',
    },
    {
      id: 2,
      patientName: 'John Davis',
      reason: 'Follow-up',
      time: '10:30 AM',
      room: 'Room 305',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5HovB2O3GUR5PsNzjnuRf-Mk75U-TIXkgF-CNAzhtwJpQJvuL8Fa3h5aKfVAzmOF0tJlyNLRw-ZgsMFgVChgXC7Bo_YBszBhiVLMR1J9wR5IHod8XiAU3KDYe3X9aS7XwFfgD_JLGxTxabRuOaX02-4K_5Sneex5fSR2ePlAHcJSusXUTNnuAeeBfZ0E_jcx9qM2vpIJSMK0SzR88Nr6QNAxtQMZYnsnqwOnOg99iFYl51NGmqCdgiiV_1pRQ_TBFnLZZF5TfI1px',
    },
  ];

  return (
    <Box minH="100vh" bg="#e8f5f0">
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        <Heading size="xl" fontWeight="800" mb={8} color="gray.800">
          Welcome back, Dr. Carter
        </Heading>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          {/* Left Column */}
          <GridItem>
            {/* Today's Schedule Stats */}
            <Box mb={8}>
              <Heading size="md" fontWeight="800" mb={4} color="gray.800">
                Today's Schedule
              </Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
                {stats.map((stat, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderRadius="xl"
                    boxShadow="sm"
                    p={4}
                  >
                    <Text fontSize="sm" color="gray.500" mb={1}>
                      {stat.label}
                    </Text>
                    <Text fontSize="3xl" fontWeight="800" color="gray.800">
                      {stat.value}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </Box>

            {/* Upcoming Appointments */}
            <Box>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="md" fontWeight="800" color="gray.800">
                  Upcoming Appointments
                </Heading>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="#10b981"
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                >
                  View All
                </Text>
              </Flex>
              <Flex direction="column" gap={4}>
                {upcomingAppointments.map((appointment) => (
                  <Box
                    key={appointment.id}
                    bg="white"
                    borderRadius="xl"
                    boxShadow="sm"
                    p={4}
                    transition="all 0.3s ease"
                    _hover={{
                      boxShadow: 'lg',
                    }}
                  >
                    <Flex align="center" gap={4}>
                      <Box
                        w={12}
                        h={12}
                        borderRadius="full"
                        flexShrink={0}
                        backgroundImage={`url("${appointment.imageUrl}")`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                      />
                      <Box flex={1}>
                        <Heading size="sm" fontWeight="800" mb={1} color="gray.800">
                          {appointment.patientName}
                        </Heading>
                        <Text fontSize="sm" color="gray.500">
                          {appointment.reason}
                        </Text>
                      </Box>
                      <Box textAlign="right">
                        <Text fontWeight="600" color="gray.800" mb={1}>
                          {appointment.time}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {appointment.room}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Flex>
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
                    bg: '#059669',
                    transform: 'translateY(-1px)',
                  }}
                >
                  Patient Records
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
                    bg: '#a8ead1',
                    transform: 'translateY(-1px)',
                  }}
                >
                  Full Schedule
                </Button>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default DoctorDashboard;

