import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { HiX, HiCalendar, HiDocumentText, HiBeaker, HiCheckCircle, HiRefresh } from 'react-icons/hi';

interface Notification {
  id: number;
  type: 'appointment' | 'billing' | 'lab' | 'update';
  title: string;
  description: string;
  time: string;
  isUnread: boolean;
  icon: any;
}

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsModal = ({ isOpen, onClose }: NotificationsModalProps) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'appointments' | 'billing' | 'updates'>('all');

  const notifications: Notification[] = [
    {
      id: 1,
      type: 'appointment',
      title: 'Appointment Reminder',
      description: 'Your appointment with Dr. Anya Sharma is in 24 hours.',
      time: '5 minutes ago',
      isUnread: true,
      icon: HiCalendar,
    },
    {
      id: 2,
      type: 'billing',
      title: 'New Invoice Available',
      description: 'Invoice #INV-2024-105 is ready.',
      time: '1 hour ago',
      isUnread: true,
      icon: HiDocumentText,
    },
    {
      id: 3,
      type: 'appointment',
      title: 'Lab Results Are In',
      description: 'Your recent blood test results are available.',
      time: '3 hours ago',
      isUnread: true,
      icon: HiBeaker,
    },
    {
      id: 4,
      type: 'appointment',
      title: 'Appointment Confirmed',
      description: 'Dr. Lee is confirmed for August 15th at 10:00 AM.',
      time: 'Yesterday',
      isUnread: false,
      icon: HiCheckCircle,
    },
    {
      id: 5,
      type: 'update',
      title: 'System Update',
      description: 'Our privacy policy has been updated.',
      time: '2 days ago',
      isUnread: false,
      icon: HiRefresh,
    },
  ];

  const filterNotifications = () => {
    if (activeFilter === 'all') return notifications;
    if (activeFilter === 'appointments') {
      return notifications.filter(n => n.type === 'appointment');
    }
    if (activeFilter === 'billing') {
      return notifications.filter(n => n.type === 'billing');
    }
    if (activeFilter === 'updates') {
      return notifications.filter(n => n.type === 'update');
    }
    return notifications;
  };

  const filteredNotifications = filterNotifications();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="transparent"
        zIndex={998}
        onClick={onClose}
      />

      {/* Modal */}
      <Box
        position="absolute"
        top={{ base: '60px', md: '70px' }}
        right={{ base: 4, sm: 6, lg: 8 }}
        zIndex={999}
        w="full"
        maxW="md"
      >
        <Flex
          direction="column"
          overflow="hidden"
          borderRadius="xl"
          bg="white"
          boxShadow="2xl"
          border="1px"
          borderColor="gray.200"
        >
          {/* Header */}
          <Flex
            justify="space-between"
            align="center"
            borderBottom="1px"
            borderColor="gray.200"
            p={4}
          >
            <Text fontSize="lg" fontWeight="800" color="gray.800">
              Notifications
            </Text>
            <Button
              size="sm"
              bg="gray.200"
              color="gray.800"
              fontSize="xs"
              fontWeight="700"
              px={3}
              h={8}
              _hover={{ bg: 'gray.300' }}
            >
              Mark all as read
            </Button>
          </Flex>

          {/* Content */}
          <Box p={4}>
            {/* Filter Tabs */}
            <Flex gap={2} pb={4} overflowX="auto">
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                bg={activeFilter === 'all' ? 'rgba(16, 185, 129, 0.2)' : 'gray.200'}
                color={activeFilter === 'all' ? '#10b981' : 'gray.800'}
                fontSize="xs"
                fontWeight="600"
                px={3}
                _hover={{
                  bg: activeFilter === 'all' ? 'rgba(16, 185, 129, 0.2)' : 'gray.300',
                }}
                onClick={() => setActiveFilter('all')}
              >
                All
              </Button>
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                bg={activeFilter === 'appointments' ? 'rgba(16, 185, 129, 0.2)' : 'gray.200'}
                color={activeFilter === 'appointments' ? '#10b981' : 'gray.800'}
                fontSize="xs"
                fontWeight="600"
                px={3}
                _hover={{
                  bg: activeFilter === 'appointments' ? 'rgba(16, 185, 129, 0.2)' : 'gray.300',
                }}
                onClick={() => setActiveFilter('appointments')}
              >
                Appointments
              </Button>
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                bg={activeFilter === 'billing' ? 'rgba(16, 185, 129, 0.2)' : 'gray.200'}
                color={activeFilter === 'billing' ? '#10b981' : 'gray.800'}
                fontSize="xs"
                fontWeight="600"
                px={3}
                _hover={{
                  bg: activeFilter === 'billing' ? 'rgba(16, 185, 129, 0.2)' : 'gray.300',
                }}
                onClick={() => setActiveFilter('billing')}
              >
                Billing
              </Button>
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                bg={activeFilter === 'updates' ? 'rgba(16, 185, 129, 0.2)' : 'gray.200'}
                color={activeFilter === 'updates' ? '#10b981' : 'gray.800'}
                fontSize="xs"
                fontWeight="600"
                px={3}
                _hover={{
                  bg: activeFilter === 'updates' ? 'rgba(16, 185, 129, 0.2)' : 'gray.300',
                }}
                onClick={() => setActiveFilter('updates')}
              >
                Updates
              </Button>
            </Flex>

            {/* Notifications List */}
            <Flex
              direction="column"
              gap={1}
              maxH="60vh"
              overflowY="auto"
              pr={2}
              mr={-2}
            >
              {filteredNotifications.map((notification) => (
                <Flex
                  key={notification.id}
                  gap={3}
                  p={3}
                  justify="space-between"
                  align="center"
                  cursor="pointer"
                  borderRadius="lg"
                  borderLeft="4px solid"
                  borderLeftColor={notification.isUnread ? '#10b981' : 'transparent'}
                  bg={notification.isUnread ? 'rgba(16, 185, 129, 0.05)' : 'transparent'}
                  transition="all 0.2s"
                  _hover={{ bg: notification.isUnread ? 'rgba(16, 185, 129, 0.1)' : 'gray.100' }}
                  role="group"
                >
                  <Flex align="start" gap={3} flex={1}>
                    <Flex
                      align="center"
                      justify="center"
                      borderRadius="lg"
                      bg={notification.isUnread ? 'rgba(16, 185, 129, 0.2)' : 'gray.200'}
                      color={notification.isUnread ? '#10b981' : 'gray.600'}
                      flexShrink={0}
                      w={10}
                      h={10}
                    >
                      <Icon as={notification.icon} w={5} h={5} />
                    </Flex>
                    <Flex direction="column" justify="center" gap={0.5} flex={1}>
                      <Text
                        fontSize="sm"
                        fontWeight="600"
                        color={notification.isUnread ? 'gray.900' : 'gray.600'}
                      >
                        {notification.title}
                      </Text>
                      <Text
                        fontSize="xs"
                        color={notification.isUnread ? 'gray.500' : 'gray.500'}
                      >
                        {notification.description}
                      </Text>
                      <Text
                        fontSize="xs"
                        color={notification.isUnread ? '#10b981' : 'gray.500'}
                        mt={1}
                      >
                        {notification.time}
                      </Text>
                    </Flex>
                  </Flex>
                  <Box
                    flexShrink={0}
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.2s"
                  >
                    <Box
                      as="button"
                      w={7}
                      h={7}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      color="gray.500"
                      _hover={{ bg: 'gray.200' }}
                    >
                      <Icon as={HiX} w={4} h={4} />
                    </Box>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NotificationsModal;

