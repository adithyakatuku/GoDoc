import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Input,
  Icon,
} from '@chakra-ui/react';
import { HiSearch, HiPencil, HiTrash, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { buttonStyles, buttonStylesSecondary, cardStyles, theme } from '../../styles/theme';

interface Branch {
  id: number;
  name: string;
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  operatingHours: string;
  status: 'active' | 'inactive' | 'maintenance';
}

const HospitalBranches = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const branches: Branch[] = [
    {
      id: 1,
      name: 'Main City Hospital',
      location: 'Metropolis, CA',
      contact: {
        email: 'maincity@godoc.com',
        phone: '(555) 123-4567',
      },
      operatingHours: '24/7',
      status: 'active',
    },
    {
      id: 2,
      name: 'Coastal Medical Center',
      location: 'Seaside, CA',
      contact: {
        email: 'coastal@godoc.com',
        phone: '(555) 234-5678',
      },
      operatingHours: '8 AM - 8 PM',
      status: 'active',
    },
    {
      id: 3,
      name: 'Mountain View Clinic',
      location: 'Highland, CO',
      contact: {
        email: 'mountain@godoc.com',
        phone: '(555) 345-6789',
      },
      operatingHours: '9 AM - 5 PM',
      status: 'inactive',
    },
    {
      id: 4,
      name: 'Downtown Urgent Care',
      location: 'Metropolis, CA',
      contact: {
        email: 'urgentcare@godoc.com',
        phone: '(555) 456-7890',
      },
      operatingHours: '7 AM - 11 PM',
      status: 'active',
    },
    {
      id: 5,
      name: 'Green Valley Hospital',
      location: 'Countryside, NY',
      contact: {
        email: 'greenvalley@godoc.com',
        phone: '(555) 567-8901',
      },
      operatingHours: '24/7',
      status: 'maintenance',
    },
  ];

  const filteredBranches = branches.filter((branch) => {
    const query = searchQuery.toLowerCase();
    return (
      branch.name.toLowerCase().includes(query) ||
      branch.location.toLowerCase().includes(query) ||
      branch.status.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredBranches.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBranches = filteredBranches.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return theme.colors.text.primary;
      case 'inactive':
        return theme.colors.status.error;
      case 'maintenance':
        return theme.colors.primary[600];
      default:
        return theme.colors.text.secondary;
    }
  };

  const handleEdit = (branchId: number) => {
    // TODO: Implement edit functionality
    console.log('Edit branch:', branchId);
  };

  const handleDelete = (branchId: number) => {
    // TODO: Implement delete functionality
    console.log('Delete branch:', branchId);
  };

  return (
    <Box minH="100vh" bg={theme.colors.background.tertiary}>
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={4}
          mb={6}
        >
          <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary}>
            Hospital Branches
          </Heading>
          <Button {...buttonStyles.primary} onClick={() => navigate('/hospital/branches/register')}>
            Register New Branch
          </Button>
        </Flex>

        {/* Search Bar */}
        <Box mb={6} position="relative">
          <Input
            placeholder="Search branches by name, city, or status..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
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

        {/* Table Card */}
        <Box {...cardStyles.default} p={0} overflow="hidden">
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
                  <Box as="th">Branch Name</Box>
                  <Box as="th">Location</Box>
                  <Box as="th">Contact</Box>
                  <Box as="th">Operating Hours</Box>
                  <Box as="th">Status</Box>
                  <Box as="th">Actions</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {paginatedBranches.map((branch) => (
                  <Box as="tr" key={branch.id}>
                    <Box as="td" fontWeight={theme.typography.fontWeight.semibold}>
                      {branch.name}
                    </Box>
                    <Box as="td">{branch.location}</Box>
                    <Box as="td">
                      <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary}>
                        {branch.contact.email}
                      </Text>
                      <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary}>
                        {branch.contact.phone}
                      </Text>
                    </Box>
                    <Box as="td">{branch.operatingHours}</Box>
                    <Box as="td">
                      <Text
                        fontWeight={theme.typography.fontWeight.semibold}
                        color={getStatusColor(branch.status)}
                        textTransform="capitalize"
                      >
                        {branch.status === 'maintenance' ? 'Under Maintenance' : branch.status}
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
                          onClick={() => handleEdit(branch.id)}
                        >
                          <Icon as={HiPencil} w={4} h={4} />
                        </Button>
                        <Button
                          {...buttonStylesSecondary.outlined}
                          size="sm"
                          minW="auto"
                          px={3}
                          h="32px"
                          onClick={() => handleDelete(branch.id)}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <Flex justify="center" align="center" gap={4} mt={6}>
            <Button
              {...buttonStylesSecondary.outlined}
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              _disabled={{
                opacity: 0.4,
                cursor: 'not-allowed',
              }}
            >
              <Icon as={HiChevronLeft} w={5} h={5} />
            </Button>
            <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} fontWeight={theme.typography.fontWeight.medium}>
              Page {currentPage} of {totalPages}
            </Text>
            <Button
              {...buttonStylesSecondary.outlined}
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              _disabled={{
                opacity: 0.4,
                cursor: 'not-allowed',
              }}
            >
              <Icon as={HiChevronRight} w={5} h={5} />
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default HospitalBranches;

