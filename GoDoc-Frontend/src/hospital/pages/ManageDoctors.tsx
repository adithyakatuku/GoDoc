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
  Icon,
} from '@chakra-ui/react';
import { HiSearch, HiPencil, HiTrash } from 'react-icons/hi';
import { buttonStyles, buttonStylesSecondary, cardStyles, theme } from '../../styles/theme';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  branch: string;
  contact: string;
  status: 'active' | 'inactive';
}

const ManageDoctors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. John Smith',
      specialization: 'Cardiology',
      branch: 'Main Hospital',
      contact: '+1 (555) 123-4567',
      status: 'active',
    },
    {
      id: 2,
      name: 'Dr. Emily White',
      specialization: 'Pediatrics',
      branch: "Children's Wing",
      contact: '+1 (555) 987-6543',
      status: 'active',
    },
    {
      id: 3,
      name: 'Dr. Michael Brown',
      specialization: 'Neurology',
      branch: 'Neuro Center',
      contact: '+1 (555) 234-5678',
      status: 'inactive',
    },
    {
      id: 4,
      name: 'Dr. Sarah Davis',
      specialization: 'Dermatology',
      branch: 'Skin Clinic',
      contact: '+1 (555) 345-6789',
      status: 'active',
    },
    {
      id: 5,
      name: 'Dr. Robert Garcia',
      specialization: 'Orthopedics',
      branch: 'Orthopedic Dept.',
      contact: '+1 (555) 456-7890',
      status: 'active',
    },
    {
      id: 6,
      name: 'Dr. Laura Martinez',
      specialization: 'Oncology',
      branch: 'Cancer Care Unit',
      contact: '+1 (555) 567-8901',
      status: 'active',
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const query = searchQuery.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(query) ||
      doctor.specialization.toLowerCase().includes(query) ||
      doctor.branch.toLowerCase().includes(query) ||
      doctor.status.toLowerCase().includes(query)
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return theme.colors.text.primary;
      case 'inactive':
        return theme.colors.status.error;
      default:
        return theme.colors.text.secondary;
    }
  };

  const handleEdit = (doctorId: number) => {
    // TODO: Implement edit functionality
    console.log('Edit doctor:', doctorId);
  };

  const handleDelete = (doctorId: number) => {
    // TODO: Implement delete functionality
    console.log('Delete doctor:', doctorId);
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.tertiary}>
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Box mb={8}>
          <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
            Manage Doctors
          </Heading>
          <Text fontSize={theme.typography.fontSize.lg} color={theme.colors.text.secondary} lineHeight="1.6">
            Oversee and register medical professionals within the GoDoc hospital network.
          </Text>
        </Box>

        {/* Action Bar - Register Button and Search */}
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={4}
          mb={6}
        >
          <Button {...buttonStyles.primary} onClick={() => navigate('/hospital/doctors/register')}>
            Register New Doctor
          </Button>
          <Box position="relative" flex="1" maxW="400px">
            <Input
              placeholder="Search doctors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              borderRadius={theme.borderRadius.md}
              bg={theme.colors.background.primary}
              border="1px solid"
              borderColor={theme.colors.border.light}
              h="48px"
              className="search-input"
              data-search-input="true"
              _focus={{
                borderColor: theme.colors.primary[600],
                boxShadow: `0 0 0 0.25rem ${theme.colors.primary[200]}`,
              }}
            />
            <Icon
              as={HiSearch}
              position="absolute"
              left="16px"
              top="50%"
              transform="translateY(-50%)"
              w={5}
              h={5}
              color={theme.colors.text.secondary}
              pointerEvents="none"
            />
          </Box>
        </Flex>

        {/* Registered Doctors Section */}
        <Box {...cardStyles.default}>
          <Heading size="md" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
            Registered Doctors
          </Heading>
          <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} mb={6}>
            A comprehensive list of all medical professionals, their specializations, and associated branches.
          </Text>

          <Box overflowX="auto">
            <Box
              as="table"
              w="100%"
              borderCollapse="collapse"
              css={{
                '& thead tr': {
                  backgroundColor: theme.colors.background.secondary,
                  borderBottom: `2px solid ${theme.colors.border.light}`,
                },
                '& tbody tr': {
                  borderBottom: `1px solid ${theme.colors.border.light}`,
                  '&:nth-of-type(even)': {
                    backgroundColor: theme.colors.background.secondary,
                  },
                  '&:hover': {
                    backgroundColor: theme.colors.primary[50],
                  },
                },
                '& th, & td': {
                  padding: '16px',
                  textAlign: 'left',
                },
                '& th': {
                  color: theme.colors.text.primary,
                  fontWeight: theme.typography.fontWeight.bold,
                  fontSize: theme.typography.fontSize.xs,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                },
                '& td': {
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize.sm,
                },
              }}
            >
              <Box as="thead">
                <Box as="tr">
                  <Box as="th">Name</Box>
                  <Box as="th">Specialization</Box>
                  <Box as="th">Branch</Box>
                  <Box as="th">Contact</Box>
                  <Box as="th">Status</Box>
                  <Box as="th">Actions</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {filteredDoctors.map((doctor) => (
                  <Box as="tr" key={doctor.id}>
                    <Box as="td" fontWeight={theme.typography.fontWeight.semibold}>
                      {doctor.name}
                    </Box>
                    <Box as="td">{doctor.specialization}</Box>
                    <Box as="td">{doctor.branch}</Box>
                    <Box as="td">{doctor.contact}</Box>
                    <Box as="td">
                      <Text
                        fontWeight={theme.typography.fontWeight.semibold}
                        color={getStatusColor(doctor.status)}
                        textTransform="capitalize"
                      >
                        {doctor.status}
                      </Text>
                    </Box>
                    <Box as="td">
                      <Flex gap={2}>
                        <Button
                          {...buttonStylesSecondary.outlined}
                          size="sm"
                          minW="auto"
                          px={3}
                          h="32px"
                          onClick={() => handleEdit(doctor.id)}
                        >
                          <Icon as={HiPencil} w={4} h={4} />
                        </Button>
                        <Button
                          {...buttonStylesSecondary.outlined}
                          size="sm"
                          minW="auto"
                          px={3}
                          h="32px"
                          onClick={() => handleDelete(doctor.id)}
                        >
                          <Icon as={HiTrash} w={4} h={4} />
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ManageDoctors;

