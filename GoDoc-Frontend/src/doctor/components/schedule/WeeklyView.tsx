import { Box, Text, Grid, GridItem } from '@chakra-ui/react';

interface WeekEvent {
  id: number;
  patientName: string;
  time: string;
  type: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'blocked';
}

interface DaySchedule {
  date: Date;
  day: string;
  dayNum: string;
  events: WeekEvent[];
  isToday: boolean;
}

interface WeeklyViewProps {
  weekDates: Date[];
  weekEvents: Record<string, WeekEvent[]>;
}

const WeeklyView = ({ weekDates, weekEvents }: WeeklyViewProps) => {
  const today = new Date(2024, 9, 25); // October 25, 2024

  const getDaySchedule = (): DaySchedule[] => {
    return weekDates.map((date) => {
      const dayKey = date.toISOString().split('T')[0];
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      return {
        date,
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: date.getDate().toString(),
        events: weekEvents[dayKey] || [],
        isToday,
      };
    });
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

  const formatWeekRange = () => {
    if (weekDates.length === 0) return '';
    const firstDay = weekDates[0];
    const lastDay = weekDates[weekDates.length - 1];
    
    return `${firstDay.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${lastDay.getDate()}, ${lastDay.getFullYear()}`;
  };

  const daySchedules = getDaySchedule();

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
        mb={4}
      >
        {formatWeekRange()}
      </Text>

      <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={2}
        bg="gray.200"
        p={0.5}
        borderRadius="md"
      >
        {daySchedules.map((day) => (
          <GridItem
            key={day.dayNum}
            bg={day.isToday ? 'rgba(16, 185, 129, 0.05)' : '#e8f5f0'}
            p={2}
            borderRadius="sm"
          >
            <Text
              textAlign="center"
              fontWeight="700"
              color={day.isToday ? '#10b981' : 'gray.800'}
              fontSize="sm"
              mb={2}
            >
              {day.day}, {day.dayNum}
            </Text>
            
            {day.events.length > 0 ? (
              <Box display="flex" flexDirection="column" gap={2}>
                {day.events.map((event) => {
                  const styles = getEventStyles(event.status);
                  return (
                    <Box
                      key={event.id}
                      p={2}
                      borderRadius="md"
                      bg={styles.bg}
                      borderLeft="3px solid"
                      borderLeftColor={styles.borderColor}
                    >
                      <Text
                        fontWeight="700"
                        fontSize="xs"
                        color={styles.titleColor}
                      >
                        {event.patientName}
                      </Text>
                      <Text fontSize="xs" color={styles.textColor} mt={0.5}>
                        {event.time} - {event.type}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            ) : (
              <Text
                textAlign="center"
                color="gray.400"
                fontSize="xs"
                py={4}
              >
                No appointments
              </Text>
            )}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default WeeklyView;

