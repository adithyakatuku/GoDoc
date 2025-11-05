import { Box, Text, Flex } from '@chakra-ui/react';

interface ScheduleEvent {
  id: number;
  time: string;
  patientName?: string;
  type: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'blocked';
}

interface DailyViewProps {
  date: Date;
  events: ScheduleEvent[];
}

const DailyView = ({ date, events }: DailyViewProps) => {
  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '03:00 PM',
  ];

  const getEventByTime = (time: string) => {
    return events.find((event) => event.time === time);
  };

  const getEventStyles = (status: string) => {
    switch (status) {
      case 'confirmed':
        return {
          bg: 'rgba(59, 130, 246, 0.1)',
          borderColor: '#3b82f6',
          titleColor: '#1e40af',
          textColor: '#2563eb',
        };
      case 'pending':
        return {
          bg: 'rgba(245, 158, 11, 0.1)',
          borderColor: '#f59e0b',
          titleColor: '#92400e',
          textColor: '#d97706',
        };
      case 'cancelled':
        return {
          bg: 'rgba(239, 68, 68, 0.1)',
          borderColor: '#ef4444',
          titleColor: '#991b1b',
          textColor: '#dc2626',
        };
      case 'blocked':
        return {
          bg: 'rgba(148, 163, 184, 0.2)',
          borderColor: '#64748b',
          titleColor: '#1e293b',
          textColor: '#475569',
        };
      default:
        return {
          bg: 'white',
          borderColor: 'gray.200',
          titleColor: 'gray.800',
          textColor: 'gray.600',
        };
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Box
      bg="white"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
      p={{ base: 4, sm: 6 }}
      minH="600px"
    >
      <Text
        fontSize="md"
        fontWeight="700"
        color="gray.700"
        textAlign="center"
        mb={8}
      >
        {formatDate(date)}
      </Text>

      <Flex direction="column" gap={3}>
        {timeSlots.map((time) => {
          const event = getEventByTime(time);
          const styles = event ? getEventStyles(event.status) : null;

          return (
            <Flex key={time} align="start" gap={3} minH="50px">
              <Text
                w="70px"
                textAlign="right"
                fontWeight="500"
                color="gray.500"
                fontSize="sm"
                flexShrink={0}
                pt={1}
              >
                {time}
              </Text>
              <Box w="2px" bg="gray.200" flexShrink={0} minH="100%" />
              <Box flex={1}>
                {event && styles && (
                  <Box
                    p={3}
                    borderRadius="md"
                    bg={styles.bg}
                    borderLeft="3px solid"
                    borderLeftColor={styles.borderColor}
                  >
                    <Text
                      fontWeight="700"
                      fontSize="sm"
                      color={styles.titleColor}
                    >
                      {event.patientName}
                    </Text>
                    <Text fontSize="xs" color={styles.textColor} mt={0.5}>
                      {event.type}
                    </Text>
                  </Box>
                )}
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default DailyView;

