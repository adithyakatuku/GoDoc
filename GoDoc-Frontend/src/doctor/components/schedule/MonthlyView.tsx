import { Box, Text, Grid } from '@chakra-ui/react';

interface MonthEvent {
  id: number;
  patientName: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface MonthlyViewProps {
  month: Date;
  monthEvents?: Record<number, MonthEvent[]>;
}

const MonthlyView = ({ month, monthEvents = {} }: MonthlyViewProps) => {
  const today = new Date(2024, 9, 25); // October 25, 2024

  // Get first day of month and total days
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const startDayOfWeek = firstDay.getDay(); // 0 = Sunday
  const totalDays = lastDay.getDate();

  // Generate calendar days
  const calendarDays: (number | null)[] = [];
  
  // Add empty cells for days before month starts
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= totalDays; day++) {
    calendarDays.push(day);
  }

  const isToday = (day: number | null) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      month.getMonth() === today.getMonth() &&
      month.getFullYear() === today.getFullYear()
    );
  };

  const getEventStyles = (status: string) => {
    switch (status) {
      case 'confirmed':
        return { bg: 'rgba(59, 130, 246, 0.1)', color: '#1e40af' };
      case 'pending':
        return { bg: 'rgba(245, 158, 11, 0.1)', color: '#92400e' };
      case 'cancelled':
        return { bg: 'rgba(239, 68, 68, 0.1)', color: '#991b1b' };
      default:
        return { bg: 'gray.100', color: 'gray.700' };
    }
  };

  const formatMonthYear = () => {
    return month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
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
        mb={4}
      >
        {formatMonthYear()}
      </Text>

      <Grid templateColumns="repeat(7, 1fr)" gap="1px" fontSize="sm">
        {/* Weekday headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Box
            key={day}
            textAlign="center"
            fontWeight="700"
            color="gray.500"
            py={2}
            fontSize="xs"
          >
            {day}
          </Box>
        ))}

        {/* Calendar days */}
        {calendarDays.map((day, index) => {
          const todayCell = isToday(day);
          const events = day ? monthEvents[day] || [] : [];

          return (
            <Box
              key={index}
              borderTop="1px"
              borderColor="gray.200"
              p={2}
              minH="120px"
              bg={todayCell ? 'rgba(16, 185, 129, 0.05)' : '#e8f5f0'}
            >
              {day && (
                <>
                  <Text
                    fontWeight={todayCell ? '700' : '500'}
                    color={todayCell ? '#10b981' : 'gray.800'}
                    mb={1}
                  >
                    {day}
                  </Text>
                  
                  {events.length > 0 && (
                    <Box display="flex" flexDirection="column" gap={1}>
                      {events.map((event) => {
                        const styles = getEventStyles(event.status);
                        return (
                          <Box
                            key={event.id}
                            fontSize="xs"
                            bg={styles.bg}
                            color={styles.color}
                            borderRadius="sm"
                            px={1}
                            py={0.5}
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                            fontWeight="500"
                          >
                            {event.patientName}
                          </Box>
                        );
                      })}
                    </Box>
                  )}
                </>
              )}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MonthlyView;

