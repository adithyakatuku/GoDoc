import { useState } from 'react';
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
  HiDownload,
  HiShare,
  HiTrash,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiClock,
} from 'react-icons/hi';
import { cardStyles, tabStyles, theme } from '../../styles/theme';

interface Record {
  id: number;
  type: 'prescription' | 'report' | 'history';
  title: string;
  provider: string;
  date: string;
  icon: string;
  archived?: boolean;
}

const MedicalRecords = () => {
  const [activeTab, setActiveTab] = useState('all');

  const records: Record[] = [
    {
      id: 1,
      type: 'prescription',
      title: 'Prescription - High Blood Pressure',
      provider: 'Dr. Emily Carter',
      date: '12 Dec 2024',
      icon: 'medication',
    },
    {
      id: 2,
      type: 'report',
      title: 'Blood Test Report',
      provider: 'LabCorp',
      date: '20 Nov 2024',
      icon: 'science',
    },
    {
      id: 3,
      type: 'prescription',
      title: 'Prescription - Diabetes',
      provider: 'Dr. Michael Johnson',
      date: '10 Oct 2024',
      icon: 'medication',
    },
    {
      id: 4,
      type: 'history',
      title: 'Medical History Summary (2023)',
      provider: 'Dr. Olivia Williams',
      date: '08 Aug 2024',
      icon: 'history',
      archived: true,
    },
  ];

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'prescription', label: 'Prescriptions' },
    { id: 'report', label: 'Reports' },
    { id: 'history', label: 'History' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'medication':
        return HiOutlineDocumentText;
      case 'science':
        return HiOutlineChartBar;
      case 'history':
        return HiClock;
      default:
        return HiOutlineDocumentText;
    }
  };

  const filteredRecords =
    activeTab === 'all'
      ? records
      : records.filter((record) => {
          return record.type === activeTab;
        });

  return (
    <Box minH="100vh" bg={theme.colors.background.tertiary}>
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8, lg: 12 }}>
        <Box mb={6}>
          <Heading size="lg" fontWeight={theme.typography.fontWeight.extrabold} mb={2} color={theme.colors.text.primary}>
            Medical Records
          </Heading>
          <Text color={theme.colors.text.secondary}>
            Access and manage your prescriptions, reports, and medical history.
          </Text>
        </Box>

        {/* Tabs */}
        <Flex gap={2} mb={6} flexWrap="wrap">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              {...tabStyles.default}
              {...(activeTab === tab.id ? tabStyles.active : tabStyles.inactive)}
            >
              {tab.label}
            </Button>
          ))}
        </Flex>

        {/* Records List */}
        <Grid templateColumns="1fr" gap={3}>
          {filteredRecords.map((record) => (
            <GridItem key={record.id}>
              <Box
                {...cardStyles.default}
                opacity={record.archived ? 0.75 : 1}
              >
                <Flex align="center" gap={4}>
                  {/* Icon */}
                  <Box
                    w="48px"
                    h="48px"
                    borderRadius="full"
                    bg={record.archived ? '#e2e8f0' : 'rgba(16, 185, 129, 0.1)'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon
                      as={getIcon(record.icon)}
                      w={6}
                      h={6}
                      color={record.archived ? '#718096' : '#10b981'}
                    />
                  </Box>

                  {/* Content */}
                  <Box flex={1}>
                    <Heading size="sm" fontWeight="800" mb={1} color="gray.800">
                      {record.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      {record.provider} - {record.date}
                    </Text>
                  </Box>

                  {/* Actions */}
                  <Flex gap={1}>
                    <Box
                      as="button"
                      w="36px"
                      h="36px"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      transition="all 0.2s ease"
                      _hover={{
                        bg: '#f7fafc',
                        '& > svg': { color: '#10b981' },
                      }}
                    >
                      <Icon
                        as={HiDownload}
                        w={5}
                        h={5}
                        color="gray.600"
                        transition="color 0.2s ease"
                      />
                    </Box>
                    <Box
                      as="button"
                      w="36px"
                      h="36px"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      transition="all 0.2s ease"
                      _hover={{
                        bg: '#f7fafc',
                        '& > svg': { color: '#10b981' },
                      }}
                    >
                      <Icon
                        as={HiShare}
                        w={5}
                        h={5}
                        color="gray.600"
                        transition="color 0.2s ease"
                      />
                    </Box>
                    <Box
                      as="button"
                      w="36px"
                      h="36px"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      transition="all 0.2s ease"
                      _hover={{
                        bg: '#f7fafc',
                        '& > svg': { color: '#ef4444' },
                      }}
                    >
                      <Icon
                        as={HiTrash}
                        w={5}
                        h={5}
                        color="gray.600"
                        transition="color 0.2s ease"
                      />
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MedicalRecords;

