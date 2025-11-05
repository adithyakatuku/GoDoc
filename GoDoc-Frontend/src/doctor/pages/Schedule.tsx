import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/Schedule.css';
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
} from '@chakra-ui/react';
import {
  HiPlus,
  HiChevronLeft,
  HiChevronRight,
  HiCog,
} from 'react-icons/hi';
import DailyView from '../components/schedule/DailyView';
import WeeklyView from '../components/schedule/WeeklyView';
import MonthlyView from '../components/schedule/MonthlyView';

interface ScheduleEvent {
  id: number;
  time: string;
  patientName?: string;
  type: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'blocked';
}

interface UpcomingAppointment {
  id: number;
  date: string;
  day: string;
  patientName: string;
  time: string;
  type: string;
  isToday: boolean;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Schedule = () => {
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedDate, setSelectedDate] = useState<Value>(new Date(2024, 9, 25)); // October 25, 2024

  // Daily view events
  const dailyEvents: ScheduleEvent[] = [
    {
      id: 1,
      time: '09:30 AM',
      patientName: 'Sophia Wilson',
      type: 'Follow-up',
      status: 'confirmed',
    },
    {
      id: 2,
      time: '10:30 AM',
      patientName: 'Ava Williams',
      type: 'Pending Confirmation',
      status: 'pending',
    },
    {
      id: 3,
      time: '12:00 PM',
      patientName: 'Blocked',
      type: 'Lunch Break',
      status: 'blocked',
    },
    {
      id: 4,
      time: '01:00 PM',
      patientName: 'Elijah Moore',
      type: 'Consultation',
      status: 'confirmed',
    },
    {
      id: 5,
      time: '03:00 PM',
      patientName: 'James Miller',
      type: 'Cancelled',
      status: 'cancelled',
    },
  ];

  // Weekly view - get the week dates
  const getWeekDates = (date: Date) => {
    const currentDate = date instanceof Date ? date : new Date(2024, 9, 25);
    const day = currentDate.getDay();
    const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    const monday = new Date(currentDate.setDate(diff));
    
    const weekDates: Date[] = [];
    for (let i = 0; i < 5; i++) { // Mon-Fri
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  // Weekly events data
  const weeklyEvents: Record<string, any[]> = {
    '2024-10-21': [
      { id: 1, patientName: 'Liam Johnson', time: '9:00 AM', type: 'Consultation', status: 'confirmed' },
      { id: 2, patientName: 'Ava Williams', time: '10:30 AM', type: 'Pending', status: 'pending' },
      { id: 3, patientName: 'Blocked', time: '12:00 PM', type: 'Lunch', status: 'blocked' },
    ],
    '2024-10-22': [
      { id: 4, patientName: 'Noah Brown', time: '11:00 AM', type: 'Follow-up', status: 'confirmed' },
    ],
    '2024-10-23': [],
    '2024-10-24': [
      { id: 5, patientName: 'Olivia Davis', time: '2:00 PM', type: 'Consultation', status: 'confirmed' },
      { id: 6, patientName: 'James Miller', time: '3:00 PM', type: 'Cancelled', status: 'cancelled' },
    ],
    '2024-10-25': [
      { id: 7, patientName: 'Sophia Wilson', time: '9:30 AM', type: 'Follow-up', status: 'confirmed' },
      { id: 8, patientName: 'Elijah Moore', time: '1:00 PM', type: 'Consultation', status: 'confirmed' },
    ],
  };

  // Monthly events data (by day of month)
  const monthlyEvents: Record<number, any[]> = {
    21: [
      { id: 1, patientName: 'Liam Johnson', status: 'confirmed' },
      { id: 2, patientName: 'Ava Williams', status: 'pending' },
    ],
    22: [
      { id: 3, patientName: 'Noah Brown', status: 'confirmed' },
    ],
    24: [
      { id: 4, patientName: 'Olivia Davis', status: 'confirmed' },
      { id: 5, patientName: 'James Miller', status: 'cancelled' },
    ],
    25: [
      { id: 6, patientName: 'Sophia Wilson', status: 'confirmed' },
      { id: 7, patientName: 'Elijah Moore', status: 'confirmed' },
    ],
    28: [
      { id: 8, patientName: 'Isabella T.', status: 'confirmed' },
    ],
  };

  const upcomingAppointments: UpcomingAppointment[] = [
    {
      id: 1,
      date: '25',
      day: 'FRI',
      patientName: 'Sophia Wilson',
      time: '9:30 AM',
      type: 'Follow-up',
      isToday: true,
    },
    {
      id: 2,
      date: '25',
      day: 'FRI',
      patientName: 'Elijah Moore',
      time: '1:00 PM',
      type: 'Consultation',
      isToday: false,
    },
    {
      id: 3,
      date: '28',
      day: 'MON',
      patientName: 'Isabella Taylor',
      time: '10:00 AM',
      type: 'Consultation',
      isToday: false,
    },
  ];

  const currentDate = selectedDate instanceof Date ? selectedDate : new Date(2024, 9, 25);
  const weekDates = getWeekDates(currentDate);

  return (
    <Box minH="100vh" bg="#e8f5f0">
      <Container maxW="container.xl" py={8} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Flex justify="space-between" align="center" mb={6} flexWrap="wrap" gap={4}>
          <Heading size="2xl" fontWeight="800" color="gray.800">
            My Schedule
          </Heading>
          <Button
            bg="gray.800"
            color="white"
            fontWeight="600"
            borderRadius="md"
            px={4}
            h={10}
            _hover={{ bg: 'gray.700' }}
          >
            <Flex align="center" gap={2}>
              <Icon as={HiPlus} w={4} h={4} />
              <Text fontSize="sm">Add Event</Text>
            </Flex>
          </Button>
        </Flex>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          {/* Left Column - Main Schedule */}
          <GridItem>
            <Flex direction="column" gap={4}>
              {/* View Toggle and Controls */}
              <Box
                bg="white"
                borderRadius="lg"
                border="1px"
                borderColor="gray.200"
                p={3}
              >
                <Flex
                  direction={{ base: 'column', sm: 'row' }}
                  gap={3}
                  justify="space-between"
                  align="center"
                >
                  {/* View Toggle */}
                  <Flex
                    bg="gray.100"
                    borderRadius="md"
                    p={1}
                    w={{ base: '100%', sm: 'auto' }}
                    gap={1}
                  >
                    <Button
                      px={6}
                      h={9}
                      bg={view === 'daily' ? 'white' : 'transparent'}
                      color={view === 'daily' ? 'gray.800' : 'gray.500'}
                      boxShadow="none"
                      fontWeight="600"
                      fontSize="sm"
                      borderRadius="md"
                      border="none"
                      _hover={{ bg: view === 'daily' ? 'white' : 'gray.200' }}
                      onClick={() => setView('daily')}
                    >
                      Daily
                    </Button>
                    <Button
                      px={6}
                      h={9}
                      bg={view === 'weekly' ? 'white' : 'transparent'}
                      color={view === 'weekly' ? 'gray.800' : 'gray.500'}
                      boxShadow="none"
                      fontWeight="600"
                      fontSize="sm"
                      borderRadius="md"
                      border="none"
                      _hover={{ bg: view === 'weekly' ? 'white' : 'gray.200' }}
                      onClick={() => setView('weekly')}
                    >
                      Weekly
                    </Button>
                    <Button
                      px={6}
                      h={9}
                      bg={view === 'monthly' ? 'white' : 'transparent'}
                      color={view === 'monthly' ? 'gray.800' : 'gray.500'}
                      boxShadow="none"
                      fontWeight="600"
                      fontSize="sm"
                      borderRadius="md"
                      border="none"
                      _hover={{ bg: view === 'monthly' ? 'white' : 'gray.200' }}
                      onClick={() => setView('monthly')}
                    >
                      Monthly
                    </Button>
                  </Flex>

                  {/* Navigation Controls */}
                  <Flex gap={2} align="center">
                    <Box
                      as="button"
                      w={8}
                      h={8}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      bg="gray.100"
                      color="gray.600"
                      _hover={{ bg: 'gray.200' }}
                    >
                      <Icon as={HiChevronLeft} w={5} h={5} />
                    </Box>
                    <Box
                      as="button"
                      w={8}
                      h={8}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      bg="gray.100"
                      color="gray.600"
                      _hover={{ bg: 'gray.200' }}
                    >
                      <Icon as={HiChevronRight} w={5} h={5} />
                    </Box>
                    <Button
                      bg="#10b981"
                      color="white"
                      fontWeight="600"
                      borderRadius="md"
                      px={4}
                      h={9}
                      ml={2}
                      _hover={{ bg: '#059669' }}
                    >
                      <Flex align="center" gap={2}>
                        <Icon as={HiCog} w={4} h={4} />
                        <Text fontSize="sm">Set Availability</Text>
                      </Flex>
                    </Button>
                  </Flex>
                </Flex>
              </Box>

              {/* Schedule Views */}
              {view === 'daily' && (
                <DailyView date={currentDate} events={dailyEvents} />
              )}
              {view === 'weekly' && (
                <WeeklyView weekDates={weekDates} weekEvents={weeklyEvents} />
              )}
              {view === 'monthly' && (
                <MonthlyView month={currentDate} monthEvents={monthlyEvents} />
              )}
            </Flex>
          </GridItem>

          {/* Right Column - Sidebar */}
          <GridItem>
            <Flex direction="column" gap={6}>
              {/* Schedule Overview */}
              <Box
                bg="white"
                borderRadius="lg"
                p={5}
                border="1px"
                borderColor="gray.200"
              >
                <Text fontSize="md" fontWeight="700" color="gray.700" mb={4}>
                  Schedule Overview
                </Text>
                <Grid
                  templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
                  gap={3}
                >
                  <Box bg="gray.100" p={3} borderRadius="md">
                    <Text fontSize="3xl" fontWeight="800" color="gray.800">
                      5
                    </Text>
                    <Text fontSize="sm" fontWeight="500" color="gray.500" mt={1}>
                      Today's Appts
                    </Text>
                  </Box>
                  <Box bg="gray.100" p={3} borderRadius="md">
                    <Text fontSize="3xl" fontWeight="800" color="gray.800">
                      28
                    </Text>
                    <Text fontSize="sm" fontWeight="500" color="gray.500" mt={1}>
                      Weekly Patients
                    </Text>
                  </Box>
                  <Box
                    bg="gray.100"
                    p={3}
                    borderRadius="md"
                    gridColumn={{ base: 'span 2', sm: 'span 1', lg: 'span 2' }}
                  >
                    <Text fontSize="3xl" fontWeight="800" color="gray.800">
                      12
                    </Text>
                    <Text fontSize="sm" fontWeight="500" color="gray.500" mt={1}>
                      Open Slots (Week)
                    </Text>
                  </Box>
                </Grid>
              </Box>

              {/* Upcoming Appointments */}
              <Box
                bg="white"
                borderRadius="lg"
                p={5}
                border="1px"
                borderColor="gray.200"
              >
                <Text fontSize="md" fontWeight="700" color="gray.700" mb={4}>
                  Upcoming
                </Text>
                <Flex direction="column" gap={4}>
                  {upcomingAppointments.map((appointment) => (
                    <Flex key={appointment.id} align="center" gap={3}>
                      <Box
                        bg={
                          appointment.isToday
                            ? '#10b981'
                            : 'gray.100'
                        }
                        color={appointment.isToday ? 'white' : 'gray.600'}
                        fontWeight="700"
                        borderRadius="md"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                        w="60px"
                        h="60px"
                        textAlign="center"
                        flexShrink={0}
                      >
                        <Text fontSize="xs" textTransform="uppercase">{appointment.day}</Text>
                        <Text fontSize="2xl" lineHeight="1">{appointment.date}</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="700" fontSize="sm" color="gray.800">
                          {appointment.patientName}
                        </Text>
                        <Text fontSize="xs" color="gray.500" mt={0.5}>
                          {appointment.time} - {appointment.type}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              </Box>

              {/* Mini Calendar */}
              <Box
                bg="white"
                borderRadius="lg"
                p={4}
                border="1px"
                borderColor="gray.200"
                className="schedule-mini-calendar"
              >
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  showNeighboringMonth={false}
                  minDetail="month"
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Schedule;

