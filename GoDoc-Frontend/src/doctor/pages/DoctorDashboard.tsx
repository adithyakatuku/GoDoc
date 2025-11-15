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
import { buttonStyles, buttonStylesSecondary, cardStyles, theme } from '../../styles/theme';

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
    <Box minH="100vh" bg={theme.colors.background.tertiary}>
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        <Heading size="xl" fontWeight={theme.typography.fontWeight.extrabold} mb={8} color={theme.colors.text.primary}>
          Welcome back, Dr. Carter
        </Heading>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          {/* Left Column */}
          <GridItem>
            {/* Today's Schedule Stats */}
            <Box mb={8}>
              <Heading size="md" fontWeight={theme.typography.fontWeight.extrabold} mb={4} color={theme.colors.text.primary}>
                Today's Schedule
              </Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
                {stats.map((stat, index) => (
                  <Box
                    key={index}
                    {...cardStyles.default}
                  >
                    <Text fontSize="sm" color={theme.colors.text.tertiary} mb={1}>
                      {stat.label}
                    </Text>
                    <Text fontSize="3xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary}>
                      {stat.value}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </Box>

            {/* Upcoming Appointments */}
            <Box>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="md" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary}>
                  Upcoming Appointments
                </Heading>
                <Text
                  fontSize="sm"
                  fontWeight={theme.typography.fontWeight.semibold}
                  color={theme.colors.primary[600]}
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
                    {...cardStyles.default}
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
                        <Heading size="sm" fontWeight={theme.typography.fontWeight.extrabold} mb={1} color={theme.colors.text.primary}>
                          {appointment.patientName}
                        </Heading>
                        <Text fontSize="sm" color={theme.colors.text.tertiary}>
                          {appointment.reason}
                        </Text>
                      </Box>
                      <Box textAlign="right">
                        <Text fontWeight={theme.typography.fontWeight.semibold} color={theme.colors.text.primary} mb={1}>
                          {appointment.time}
                        </Text>
                        <Text fontSize="sm" color={theme.colors.text.tertiary}>
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
              <Heading size="md" fontWeight={theme.typography.fontWeight.extrabold} mb={4} color={theme.colors.text.primary}>
                Quick Actions
              </Heading>
              <Flex direction="column" gap={4}>
                <Button
                  {...buttonStyles.success}
                  w="100%"
                >
                  Patient Records
                </Button>
                <Button
                  {...buttonStylesSecondary.lightGreen}
                  w="100%"
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

