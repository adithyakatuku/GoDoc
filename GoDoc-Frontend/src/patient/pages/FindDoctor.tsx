import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
} from '@chakra-ui/react';
import { HiSearch, HiRefresh } from 'react-icons/hi';
import { MdSearchOff } from 'react-icons/md';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  imageUrl: string;
  city: string;
  hospital: string;
  branch: string;
  department: string;
}

const FindDoctor = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('any');
  const [selectedHospital, setSelectedHospital] = useState('any');
  const [selectedBranch, setSelectedBranch] = useState('any');
  const [selectedDepartment, setSelectedDepartment] = useState('any');

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Evelyn Reed',
      specialty: 'Cardiologist',
      location: 'City General Hospital, North Wing',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBD54-8VAajIHDJlhzTO9MdU41hm73sZStGjq8nOj2xCI2FjjKc_ysZGrjC04h2V980ecpmzhqgOvHdBugLuxgj1Khef5gz1z064EMOkCl27pEeWZ8dTaC_TSVGRCsqfEjUtzQZjNqyXMA4GZDpcts7VtU0gk6Lgm-vQo5Vi924oYS2IS2eN464cfPCrEj9yYYGw9CjEZ9gRAfpGIjcVWfi4OGIjI2eTHbZm7SIc6nZPEHj3YuTYx3J82XckMFSycoLlwpW6X5WcBe0',
      city: 'New York',
      hospital: 'City General Hospital',
      branch: 'North Wing',
      department: 'Cardiology',
    },
    {
      id: 2,
      name: 'Dr. Marcus Chen',
      specialty: 'Neurologist',
      location: 'Downtown Medical Center',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDG4kve8yNeHq5XNxzunr0ZLKkgjsC70Uf_6BB-1PiyiBDBMwlJc5BDCC2FXQzI1LPy3WkCnaLx8rrYFOg0Ev24IxHFhlpr5dcmnCDuc-WZ2oO1QYmD5GvQBnNOER-MzzZErjxhavAP54JJmAG4uhOEqDG7CYPpTIW6zM7VZQoM2ki9scI_sy1fjDCdtVDhHouBXmCkFsFJJWRrZYOoQTcblJpy8tE0jwQHMPq0qsSdTu_k9IGrSCIeSrCuA1DH9vABQUZgwBlDEcdO',
      city: 'New York',
      hospital: 'Downtown Medical Center',
      branch: 'South Tower',
      department: 'Neurology',
    },
    {
      id: 3,
      name: 'Dr. Sofia Garcia',
      specialty: 'Pediatrician',
      location: "Oakside Children's Clinic",
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDntyi8QdAD4SXgx2RYoQFdJ8nrca8z2o_V7F-MkCDI6WCp7lV8Zdvd-XZcEq9DzZb0MadIzDq9qMimQ5apAJH4J_5sLa_Za2PGFcVvOhStwuq2TCi4z4FAT92fBReYTT1jlW7Z-tUpcJAYLjJqacFl9xI_dH6eqsY7cqWs19a7xaAKkAfaVabUEm_c9YYV8whAFyTgL1wD0jgpi1mQ2UabwtHE6nxe3ggheflY4SjBlppyUjP20ZAvoEQ7lkaAUTpXAzU40y9jlb_-',
      city: 'Los Angeles',
      hospital: "Oakside Children's Clinic",
      branch: 'West Annex',
      department: 'Pediatrics',
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      searchQuery === '' ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCity = selectedCity === 'any' || doctor.city === selectedCity;
    const matchesHospital =
      selectedHospital === 'any' || doctor.hospital === selectedHospital;
    const matchesBranch = selectedBranch === 'any' || doctor.branch === selectedBranch;
    const matchesDepartment =
      selectedDepartment === 'any' || doctor.department === selectedDepartment;

    return (
      matchesSearch &&
      matchesCity &&
      matchesHospital &&
      matchesBranch &&
      matchesDepartment
    );
  });

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCity('any');
    setSelectedHospital('any');
    setSelectedBranch('any');
    setSelectedDepartment('any');
  };

  return (
    <Box minH="100vh" bg="#e8f5f0">
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Box mb={6}>
          <Heading size="xl" fontWeight="800" mb={2} color="gray.800">
            Search Doctors & Specialists
          </Heading>
          <Text color="gray.600">Find the right doctor for your needs.</Text>
        </Box>

        {/* Search and Filters Card */}
        <Box
          bg="white"
          borderRadius="12px"
          boxShadow="md"
          border="1px solid"
          borderColor="gray.200"
          p={6}
          mb={6}
        >
          {/* Search Input */}
          <Box position="relative" mb={6}>
            <Icon
              as={HiSearch}
              position="absolute"
              left={4}
              top="50%"
              transform="translateY(-50%)"
              color="gray.400"
              w={5}
              h={5}
              zIndex={1}
            />
            <Input
              placeholder="Search by name, specialty..."
              pl={12}
              borderRadius="8px"
              bg="#F8F8F8"
              border="1px solid"
              borderColor="#e2e8f0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              _focus={{
                borderColor: '#4CAF50',
                boxShadow: '0 0 0 0.25rem rgba(76, 175, 80, 0.25)',
              }}
            />
          </Box>

          {/* Filter Dropdowns */}
          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={4}
          >
            <Box>
              <Text fontSize="sm" fontWeight="500" color="gray.600" mb={2}>
                City
              </Text>
              <Box position="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    backgroundColor: '#F8F8F8',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4CAF50';
                    e.target.style.boxShadow = '0 0 0 0.25rem rgba(76, 175, 80, 0.25)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="any">Any</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                </select>
              </Box>
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="500" color="gray.600" mb={2}>
                Hospital
              </Text>
              <Box position="relative">
                <select
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    backgroundColor: '#F8F8F8',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4CAF50';
                    e.target.style.boxShadow = '0 0 0 0.25rem rgba(76, 175, 80, 0.25)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="any">Any</option>
                  <option value="City General Hospital">City General Hospital</option>
                  <option value="Downtown Medical Center">Downtown Medical Center</option>
                  <option value="Oakside Children's Clinic">
                    Oakside Children's Clinic
                  </option>
                </select>
              </Box>
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="500" color="gray.600" mb={2}>
                Hospital Branch
              </Text>
              <Box position="relative">
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    backgroundColor: '#F8F8F8',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4CAF50';
                    e.target.style.boxShadow = '0 0 0 0.25rem rgba(76, 175, 80, 0.25)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="any">Any</option>
                  <option value="North Wing">North Wing</option>
                  <option value="South Tower">South Tower</option>
                  <option value="West Annex">West Annex</option>
                </select>
              </Box>
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="500" color="gray.600" mb={2}>
                Department
              </Text>
              <Box position="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    backgroundColor: '#F8F8F8',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4CAF50';
                    e.target.style.boxShadow = '0 0 0 0.25rem rgba(76, 175, 80, 0.25)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="any">Any</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
              </Box>
            </Box>
          </Grid>
        </Box>

        {/* Results Header */}
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={4}
          mb={6}
        >
          <Text color="gray.600">
            Showing{' '}
            <Text as="span" fontWeight="600" color="gray.800">
              {filteredDoctors.length}
            </Text>{' '}
            doctors
          </Text>
          <Button
            bg="white"
            color="gray.600"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            px={5}
            py={2}
            onClick={handleReset}
            _hover={{ bg: 'gray.50' }}
          >
            <Flex align="center" gap={2}>
              <Icon as={HiRefresh} w={5} h={5} />
              <Text>Reset</Text>
            </Flex>
          </Button>
        </Flex>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={6}
          >
            {filteredDoctors.map((doctor) => (
              <GridItem key={doctor.id}>
                <Box
                  bg="white"
                  borderRadius="12px"
                  boxShadow="sm"
                  textAlign="center"
                  p={6}
                  h="100%"
                  display="flex"
                  flexDirection="column"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0.5rem 1.5rem rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Box
                    w="96px"
                    h="96px"
                    borderRadius="full"
                    mx="auto"
                    mb={4}
                    backgroundImage={`url("${doctor.imageUrl}")`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    border="2px solid"
                    borderColor="rgba(76, 175, 80, 0.5)"
                  />
                  <Heading size="sm" fontWeight="800" mb={1}>
                    {doctor.name}
                  </Heading>
                  <Text fontWeight="600" color="#4CAF50" mb={2}>
                    {doctor.specialty}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={6}>
                    {doctor.location}
                  </Text>
                  <Button
                    bg="#4CAF50"
                    color="white"
                    borderColor="#4CAF50"
                    fontWeight="700"
                    mt="auto"
                    w="100%"
                    _hover={{ bg: '#388E3C', borderColor: '#388E3C' }}
                    onClick={() => navigate(`/patient/find-doctor/${doctor.id}`)}
                  >
                    Book Appointment
                  </Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Box
            bg="#F5F7FA"
            border="2px dashed"
            borderColor="#E0E0E0"
            borderRadius="12px"
            textAlign="center"
            py={10}
            px={6}
          >
            <Icon
              as={MdSearchOff}
              w={16}
              h={16}
              color="rgba(76, 175, 80, 0.7)"
              mb={4}
            />
            <Heading size="md" fontWeight="800" mb={2}>
              No Doctors Found
            </Heading>
            <Text color="gray.600" maxW="400px" mx="auto">
              We couldn't find any doctors matching your search criteria. Try
              adjusting your filters or searching for a different name.
            </Text>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default FindDoctor;

