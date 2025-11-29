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
import { HiRefresh, HiArrowUp, HiArrowDown } from 'react-icons/hi';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { buttonStylesSecondary, cardStyles, theme } from '../../styles/theme';

interface KPICard {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

interface DoctorPerformance {
  name: string;
  specialty: string;
  patientsServed: number;
  averageRating: number;
  totalPayouts: string;
}

const HospitalPerformanceDashboard = () => {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  const kpiData: KPICard[] = [
    {
      label: 'Total Patients Served',
      value: '12,450',
      change: '+8% vs. last month',
      trend: 'up',
    },
    {
      label: 'Average Doctor Rating',
      value: '4.7',
      change: '+0.1 vs. last month',
      trend: 'up',
    },
    {
      label: 'Total Payouts',
      value: '$1.2M',
      change: '+12% vs. last month',
      trend: 'up',
    },
    {
      label: 'Average Wait Time',
      value: '15 min',
      change: '-2 min vs. last month',
      trend: 'down',
    },
  ];

  const patientVolumeData = [
    { month: 'Jan', patients: 1050 },
    { month: 'Feb', patients: 1250 },
    { month: 'Mar', patients: 1700 },
    { month: 'Apr', patients: 1550 },
    { month: 'May', patients: 1900 },
    { month: 'Jun', patients: 2150 },
  ];

  const ratingsData = [
    { name: 'Excellent', value: 45, color: theme.colors.primary[600] },
    { name: 'Good', value: 30, color: theme.colors.primary[400] },
    { name: 'Average', value: 15, color: theme.colors.status.warning },
    { name: 'Poor', value: 10, color: theme.colors.status.error },
  ];

  const doctorPerformanceData: DoctorPerformance[] = [
    {
      name: 'Dr. Emily Carter',
      specialty: 'General Practitioner',
      patientsServed: 2500,
      averageRating: 4.9,
      totalPayouts: '$250,000.00',
    },
    {
      name: 'Dr. Alex Lee',
      specialty: 'Cardiologist',
      patientsServed: 1800,
      averageRating: 4.7,
      totalPayouts: '$180,000.00',
    },
    {
      name: 'Dr. Sarah Chen',
      specialty: 'Pediatrician',
      patientsServed: 2100,
      averageRating: 4.8,
      totalPayouts: '$210,000.00',
    },
    {
      name: 'Dr. Ben Davis',
      specialty: 'Orthopedic Surgeon',
      patientsServed: 1500,
      averageRating: 4.6,
      totalPayouts: '$150,000.00',
    },
    {
      name: 'Dr. Olivia White',
      specialty: 'Neurologist',
      patientsServed: 1200,
      averageRating: 4.5,
      totalPayouts: '$120,000.00',
    },
  ];

  const handleResetFilters = () => {
    setSelectedBranch('all');
    setSelectedPeriod('30');
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
          mb={8}
        >
          <Heading size="2xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary}>
            Hospital Performance Dashboard
          </Heading>
          <Flex gap={3} flexWrap="wrap">
            <Box position="relative">
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                style={{
                  borderRadius: theme.borderRadius.md,
                  border: '1px solid',
                  borderColor: theme.colors.border.light,
                  padding: '12px 40px 12px 20px',
                  fontSize: theme.typography.fontSize.sm,
                  fontWeight: theme.typography.fontWeight.medium,
                  backgroundColor: theme.colors.background.primary,
                  color: theme.colors.text.primary,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '12px',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = theme.colors.primary[600];
                  e.target.style.boxShadow = `0 0 0 0.25rem ${theme.colors.primary[200]}`;
                  e.target.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = theme.colors.border.light;
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="all">All Branches</option>
                <option value="branch1">Branch 1</option>
                <option value="branch2">Branch 2</option>
              </select>
            </Box>
            <Box position="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                style={{
                  borderRadius: theme.borderRadius.md,
                  border: '1px solid',
                  borderColor: theme.colors.border.light,
                  padding: '12px 40px 12px 20px',
                  fontSize: theme.typography.fontSize.sm,
                  fontWeight: theme.typography.fontWeight.medium,
                  backgroundColor: theme.colors.background.primary,
                  color: theme.colors.text.primary,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '12px',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = theme.colors.primary[600];
                  e.target.style.boxShadow = `0 0 0 0.25rem ${theme.colors.primary[200]}`;
                  e.target.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = theme.colors.border.light;
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
              </select>
            </Box>
            <Button
              {...buttonStylesSecondary.outlined}
              onClick={handleResetFilters}
            >
              <Flex align="center" gap={2}>
                <Icon as={HiRefresh} w={4} h={4} />
                <Text>Reset Filters</Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>

        {/* KPI Cards */}
        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6} mb={8}>
          {kpiData.map((kpi, index) => (
            <GridItem key={index}>
              <Box {...cardStyles.default}>
                <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} mb={2}>
                  {kpi.label}
                </Text>
                <Flex align="baseline" gap={2} mb={2}>
                  <Heading size="xl" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary}>
                    {kpi.value}
                  </Heading>
                </Flex>
                <Flex align="center" gap={1}>
                  {kpi.trend === 'up' ? (
                    <Icon as={HiArrowUp} w={4} h={4} color={theme.colors.primary[600]} />
                  ) : (
                    <Icon as={HiArrowDown} w={4} h={4} color={theme.colors.status.error} />
                  )}
                  <Text
                    fontSize={theme.typography.fontSize.xs}
                    color={kpi.trend === 'up' ? theme.colors.primary[600] : theme.colors.status.error}
                    fontWeight={theme.typography.fontWeight.semibold}
                  >
                    {kpi.change}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>

        {/* Charts Section */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6} mb={8}>
          {/* Patient Volume Chart */}
          <GridItem>
            <Box {...cardStyles.default}>
              <Heading size="md" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
                Patient Volume by Month
              </Heading>
              <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} mb={6}>
                Total patients served over the last 6 months
              </Text>
              <Box w="100%" h="300px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={patientVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.border.light} />
                    <XAxis dataKey="month" stroke={theme.colors.text.secondary} />
                    <YAxis stroke={theme.colors.text.secondary} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: theme.colors.background.primary,
                        border: `1px solid ${theme.colors.border.light}`,
                        borderRadius: theme.borderRadius.md,
                      }}
                    />
                    <Legend />
                    <Bar dataKey="patients" fill={theme.colors.primary[600]} radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </GridItem>

          {/* Doctor Ratings Chart */}
          <GridItem>
            <Box {...cardStyles.default}>
              <Heading size="md" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
                Doctor Ratings Distribution
              </Heading>
              <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} mb={6}>
                Distribution of average doctor ratings
              </Text>
              <Box w="100%" h="300px">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ratingsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {ratingsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: theme.colors.background.primary,
                        border: `1px solid ${theme.colors.border.light}`,
                        borderRadius: theme.borderRadius.md,
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </GridItem>
        </Grid>

        {/* Doctor Performance Table */}
        <Box {...cardStyles.default}>
          <Heading size="md" fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary} mb={2}>
            Doctor Performance Details
          </Heading>
          <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.text.secondary} mb={6}>
            Comprehensive performance data for individual doctors
          </Text>
          <Box overflowX="auto">
            <Box
              as="table"
              w="100%"
              borderCollapse="collapse"
              css={{
                '& thead tr': {
                  borderBottom: `2px solid ${theme.colors.border.light}`,
                },
                '& tbody tr': {
                  borderBottom: `1px solid ${theme.colors.border.light}`,
                  '&:hover': {
                    backgroundColor: theme.colors.background.secondary,
                  },
                },
                '& th, & td': {
                  padding: '12px 16px',
                  textAlign: 'left',
                },
                '& th': {
                  color: theme.colors.text.primary,
                  fontWeight: theme.typography.fontWeight.bold,
                  fontSize: theme.typography.fontSize.sm,
                },
                '& td': {
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize.sm,
                },
              }}
            >
              <Box as="thead">
                <Box as="tr">
                  <Box as="th">Doctor Name</Box>
                  <Box as="th">Specialty</Box>
                  <Box as="th" textAlign="right">Patients Served</Box>
                  <Box as="th" textAlign="right">Average Rating</Box>
                  <Box as="th" textAlign="right">Total Payouts</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {doctorPerformanceData.map((doctor, index) => (
                  <Box as="tr" key={index}>
                    <Box as="td" fontWeight={theme.typography.fontWeight.semibold} color={theme.colors.text.primary}>
                      {doctor.name}
                    </Box>
                    <Box as="td" color={theme.colors.text.secondary}>
                      {doctor.specialty}
                    </Box>
                    <Box as="td" textAlign="right" color={theme.colors.text.primary} fontWeight={theme.typography.fontWeight.medium}>
                      {doctor.patientsServed.toLocaleString()}
                    </Box>
                    <Box as="td" textAlign="right" color={theme.colors.text.primary} fontWeight={theme.typography.fontWeight.medium}>
                      {doctor.averageRating}
                    </Box>
                    <Box as="td" textAlign="right" color={theme.colors.text.primary} fontWeight={theme.typography.fontWeight.medium}>
                      {doctor.totalPayouts}
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

export default HospitalPerformanceDashboard;

