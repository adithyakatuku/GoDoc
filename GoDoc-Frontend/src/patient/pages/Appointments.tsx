import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Badge,
} from '@chakra-ui/react';
import {
  HiPlus,
  HiChevronDown,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { MdEventBusy } from 'react-icons/md';
import { badgeStyles, buttonStyles, cardStyles, theme } from '../../styles/theme';

interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  location: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  imageUrl: string;
  isPast: boolean;
}

const Appointments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const appointments: Appointment[] = [
    {
      id: 1,
      doctorName: 'Dr. Evelyn Reed',
      specialty: 'Cardiology',
      date: 'October 26, 2024 at 10:30 AM',
      location: 'Green Valley General Hospital',
      status: 'confirmed',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy1s6KmP7G8t8mj4EioD5DrlLzhQHVebvTlizbocU6xsuraHTniWFom9OuhASKVCJoyESurTmg0Q_5UagxM3lvj69zjoKm_EfXmc0eFgIIwxdvEbpD-YqFkxujyO2KxDZ2I5j9Wr5AA1pQuB5AcBOJbyescmakWmM8Zxauupy11E9cCJ2EJWLBFG75fZZJ16L7pR4uPL5vHWdMEHVUQddaG_CJOIfEqv7rlFFMfGFJChUtvdWs-lzTC2BjpYigL1bFchzmlkUbwujC',
      isPast: false,
    },
    {
      id: 2,
      doctorName: 'Dr. Ben Carter',
      specialty: 'Dermatology',
      date: 'November 15, 2024 at 2:00 PM',
      location: 'Oakside Medical Clinic',
      status: 'confirmed',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMMkw4smzPoD5TKb9XGxerkqpHQkko5Fw_g-6vS_cu4jlmSyxkSbdqchKWm7Gj1aW86Zau2eY6MaNe_Hb-SRfpN-N4QD19B03p4vxRx0D0kpridMzgIrzojXlZYVjPnopK57QLV77SENQyQSB6J25aw7kNkvunSzvsf8LwWtlcPvWa6RKBAtREoidsJODbeXPDyBTqtYL-t8LdMtSDu1EhFsyMzhNcto2ZyWFiKCylXGPglXeFpE5Ec0DjQVNCdhptTVmaiwPI2k_v',
      isPast: false,
    },
  ];

  const filteredAppointments = appointments.filter((apt) => {
    if (activeTab === 'upcoming' && apt.isPast) return false;
    if (activeTab === 'past' && !apt.isPast) return false;
    return true;
  });

  const getStatusBadge = (status: string) => {
    const badgeMap: Record<string, keyof typeof badgeStyles> = {
      confirmed: 'success',
      pending: 'warning',
      cancelled: 'error',
    };
    const badgeType = badgeMap[status] || 'success';

    return (
      <Badge {...badgeStyles[badgeType]}>
        {status}
      </Badge>
    );
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.tertiary}>
      <Container maxW="container.xl" py={8} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={4}
          mb={6}
        >
          <Box>
            <Heading size="xl" fontWeight={theme.typography.fontWeight.extrabold} mb={2} color={theme.colors.text.primary}>
              My Appointments
            </Heading>
            <Text color={theme.colors.text.secondary}>
              View and manage your upcoming and past appointments.
            </Text>
          </Box>
          <Button
            {...buttonStyles.success}
            onClick={() => navigate('/patient/find-doctor')}
          >
            <Flex align="center" gap={2}>
              <Icon as={HiPlus} w={5} h={5} />
              <Text>Book New Appointment</Text>
            </Flex>
          </Button>
        </Flex>

        {/* Tabs */}
        <Box mb={6}>
          <Flex borderBottom="3px solid" borderColor="gray.200" mb={4}>
            <Button
              variant="ghost"
              borderRadius="none"
              fontWeight={theme.typography.fontWeight.bold}
              color={activeTab === 'upcoming' ? theme.colors.primary[600] : theme.colors.text.secondary}
              borderBottom="3px solid"
              borderBottomColor={
                activeTab === 'upcoming' ? theme.colors.primary[600] : 'transparent'
              }
              mb="-3px"
              px={6}
              _hover={{
                bg: 'transparent',
                color: theme.colors.primary[600],
              }}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </Button>
            <Button
              variant="ghost"
              borderRadius="none"
              fontWeight={theme.typography.fontWeight.bold}
              color={activeTab === 'past' ? theme.colors.primary[600] : theme.colors.text.secondary}
              borderBottom="3px solid"
              borderBottomColor={
                activeTab === 'past' ? theme.colors.primary[600] : 'transparent'
              }
              mb="-3px"
              px={6}
              _hover={{
                bg: 'transparent',
                color: theme.colors.primary[600],
              }}
              onClick={() => setActiveTab('past')}
            >
              Past
            </Button>
          </Flex>

          {/* Filter Buttons */}
          <Flex gap={3} flexWrap="wrap">
            <Button
              {...buttonStyles.secondary}
              fontSize={theme.typography.fontSize.sm}
              fontWeight={theme.typography.fontWeight.normal}
              h="auto"
              px={4}
              py={2}
            >
              <Flex align="center" gap={2}>
                <Text>Date Range</Text>
                <Icon as={HiChevronDown} w={4} h={4} />
              </Flex>
            </Button>
            <Button
              {...buttonStyles.secondary}
              fontSize={theme.typography.fontSize.sm}
              fontWeight={theme.typography.fontWeight.normal}
              h="auto"
              px={4}
              py={2}
            >
              <Flex align="center" gap={2}>
                <Text>Status: Confirmed</Text>
                <Icon as={HiChevronDown} w={4} h={4} />
              </Flex>
            </Button>
            <Button
              {...buttonStyles.secondary}
              fontSize={theme.typography.fontSize.sm}
              fontWeight={theme.typography.fontWeight.normal}
              h="auto"
              px={4}
              py={2}
            >
              <Flex align="center" gap={2}>
                <Text>Sort By: Date (Newest)</Text>
                <Icon as={HiChevronDown} w={4} h={4} />
              </Flex>
            </Button>
          </Flex>
        </Box>

        {/* Appointments List */}
        {filteredAppointments.length > 0 ? (
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            {filteredAppointments.map((appointment) => (
              <GridItem key={appointment.id}>
                <Box
                  {...cardStyles.default}
                  h="100%"
                >
                  <Flex justify="space-between" align="flex-start" mb={6}>
                    <Flex gap={4}>
                      <Box
                        w="64px"
                        h="64px"
                        borderRadius="full"
                        backgroundImage={`url("${appointment.imageUrl}")`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        flexShrink={0}
                      />
                      <Box>
                        <Heading size="sm" fontWeight="800" mb={1}>
                          {appointment.doctorName}
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          {appointment.specialty}
                        </Text>
                      </Box>
                    </Flex>
                    {getStatusBadge(appointment.status)}
                  </Flex>

                  <Box borderTop="1px solid" borderColor="gray.200" pt={4} mb={4}>
                    <Flex align="center" gap={2} mb={2} color="gray.600">
                      <Icon as={HiOutlineCalendar} w={5} h={5} />
                      <Text fontSize="sm">{appointment.date}</Text>
                    </Flex>
                    <Flex align="center" gap={2} color="gray.600">
                      <Icon as={HiOutlineLocationMarker} w={5} h={5} />
                      <Text fontSize="sm">{appointment.location}</Text>
                    </Flex>
                  </Box>

                  <Flex gap={2}>
                    <Button
                      flex={1}
                      {...buttonStyles.tertiary}
                      bg={theme.colors.primary[100]}
                      color={theme.colors.primary[600]}
                      _hover={{
                        bg: theme.colors.primary[200],
                      }}
                    >
                      Reschedule
                    </Button>
                    <Button
                      flex={1}
                      {...buttonStyles.secondary}
                    >
                      Cancel
                    </Button>
                  </Flex>
                </Box>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Box
            bg="rgba(16, 185, 129, 0.05)"
            border="2px dashed"
            borderColor="#d1d5db"
            borderRadius="12px"
            textAlign="center"
            py={10}
            px={6}
          >
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w="80px"
              h="80px"
              borderRadius="full"
              bg="rgba(16, 185, 129, 0.1)"
              mb={6}
            >
              <Icon as={MdEventBusy} w={10} h={10} color="#10b981" />
            </Box>
            <Heading size="md" fontWeight="800" mb={2}>
              No appointments found
            </Heading>
            <Text color="gray.600">
              It looks like you don't have any appointments matching your
              filters.
            </Text>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Appointments;

