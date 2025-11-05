import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/DoctorProfile.css';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const [activeTab, setActiveTab] = useState<'about' | 'reviews'>('about');
  const [selectedDate, setSelectedDate] = useState<Value>(new Date()); // July 5, 2024
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  // Mock doctor data - in real app, fetch based on doctorId
  const doctor = {
    id: doctorId,
    name: 'Dr. Emily Carter',
    specialty: 'Internal Medicine',
    address: '1234 Main Street, Anytown, USA',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
    about: 'Dr. Carter is a board-certified internist with over 10 years of experience. She specializes in preventive care and chronic disease management. She is affiliated with Anytown General Hospital.',
  };

  const timeSlots = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '1:00 PM',
    '1:30 PM',
  ];

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <Box minH="100vh" bg="#e8f5f0">
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Doctor Profile Card */}
        <Box
          bg="white"
          borderRadius="16px"
          boxShadow="sm"
          p={8}
        >
          <Flex gap={6} mb={6} flexDir={{ base: 'column', sm: 'row' }}>
            <Box
              w="120px"
              h="120px"
              borderRadius="full"
              overflow="hidden"
              flexShrink={0}
            >
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            <Box flex={1}>
              <Heading size="lg" fontWeight="800" mb={2} color="gray.800">
                {doctor.name}
              </Heading>
              <Text fontSize="md" color="gray.600" mb={2}>
                {doctor.specialty}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {doctor.address}
              </Text>
            </Box>
            </Flex>

            {/* Tabs */}
            <Flex borderBottom="2px solid" borderColor="gray.200" mb={6} px={4}>
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant="ghost"
                  borderRadius="none"
                  fontWeight="700"
                  fontSize="sm"
                  color={activeTab === tab.id ? '#10b981' : 'gray.600'}
                  borderBottom="2px solid"
                  borderBottomColor={
                    activeTab === tab.id ? '#10b981' : 'transparent'
                  }
                  mb="-2px"
                  px={0}
                  mr={8}
                  pb={3}
                  pt={2}
                  _hover={{
                    bg: 'transparent',
                    color: '#10b981',
                    borderBottomColor: '#10b981',
                  }}
                  onClick={() => setActiveTab(tab.id as 'about' | 'reviews')}
                >
                  {tab.label}
                </Button>
              ))}
            </Flex>

            {/* Tab Content */}
            {activeTab === 'about' ? (
              <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
                {/* Left: About & Availability */}
                <GridItem>
                <Box mb={8}>
                  <Heading size="md" fontWeight="800" mb={3} color="gray.800">
                    About
                  </Heading>
                  <Text color="gray.700" lineHeight="tall">
                    {doctor.about}
                  </Text>
                </Box>

                {/* Availability Section */}
                <Box>
                  <Heading size="md" fontWeight="800" mb={6} color="gray.800">
                    Availability
                  </Heading>

                  <Box className="doctor-calendar">
                    <Calendar
                      onChange={setSelectedDate}
                      value={selectedDate}
                      showDoubleView={true}
                      showNeighboringMonth={false}
                      minDetail={"month"}
                      minDate={new Date()}
                    />
                  </Box>
                </Box>
                </GridItem>

                {/* Right: Time Selection */}
                <GridItem>
                  <Box
                    bg="gray.50"
                    borderRadius="16px"
                    boxShadow="sm"
                    p={6}
                    position="sticky"
                    top={4}
                  >
                    <Heading size="md" fontWeight="800" mb={6} color="gray.800">
                      Select a time
                    </Heading>

                    {/* Time Slots */}
                    <Flex flexWrap="wrap" gap={3} mb={8}>
                      {timeSlots.map((time) => {
                        const isSelected = time === selectedTime;
                        return (
                          <Button
                            key={time}
                            bg={isSelected ? 'rgba(16, 185, 129, 0.1)' : 'white'}
                            color={isSelected ? '#10b981' : 'gray.700'}
                            border="1px solid"
                            borderColor={isSelected ? '#10b981' : 'gray.200'}
                            fontWeight={isSelected ? '700' : '500'}
                            borderRadius="lg"
                            px={4}
                            py={2}
                            fontSize="sm"
                            _hover={{
                              borderColor: '#10b981',
                              bg: 'rgba(16, 185, 129, 0.1)',
                            }}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        );
                      })}
                    </Flex>

                    {/* Book Appointment Button */}
                    <Button
                      w="100%"
                      bg="#10b981"
                      color="white"
                      fontWeight="700"
                      borderRadius="lg"
                      py={3}
                      fontSize="md"
                      _hover={{
                        bg: '#059669',
                      }}
                    >
                      Book Appointment
                    </Button>
                  </Box>
                </GridItem>
              </Grid>
            ) : (
              <Box w="100%">
                <Heading size="md" fontWeight="800" mb={4} color="gray.800">
                  Reviews
                </Heading>
                <Text color="gray.600">
                  No reviews yet. Be the first to review this doctor!
                </Text>
              </Box>
            )}
        </Box>
      </Container>
    </Box>
  );
};

export default DoctorProfile;

