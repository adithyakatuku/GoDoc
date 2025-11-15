import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { HiX, HiCalendar, HiDocumentText, HiBeaker, HiCheckCircle, HiRefresh } from 'react-icons/hi';
import { tabStyles, theme } from '../styles/theme';

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
        left={{ base: 4, sm: 'auto' }}
        zIndex={999}
        w={{ base: 'calc(100% - 32px)', sm: 'full' }}
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
            borderColor={theme.colors.border.light}
            p={4}
            flexWrap="wrap"
            gap={2}
          >
            <Text fontSize={{ base: 'xl', sm: 'lg' }} fontWeight={theme.typography.fontWeight.extrabold} color={theme.colors.text.primary}>
              Notifications
            </Text>
            <Button
              size="sm"
              bg={theme.colors.background.secondary}
              color={theme.colors.text.primary}
              fontSize="xs"
              fontWeight={theme.typography.fontWeight.bold}
              px={3}
              h={8}
              borderRadius={theme.borderRadius.md}
              _hover={{ bg: '#e5e7eb' }}
            >
              Mark all as read
            </Button>
          </Flex>

          {/* Content */}
          <Box p={{ base: 3, sm: 4 }}>
            {/* Filter Tabs */}
            <Flex 
              gap={2} 
              pb={4} 
              overflowX="auto"
              css={{
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
              }}
            >
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                {...tabStyles.default}
                {...(activeFilter === 'all' ? tabStyles.active : tabStyles.inactive)}
                fontSize="xs"
                px={3}
              >
                All
              </Button>
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                {...tabStyles.default}
                {...(activeFilter === 'appointments' ? tabStyles.active : tabStyles.inactive)}
                fontSize="xs"
                px={3}
                onClick={() => setActiveFilter('appointments')}
              >
                Appointments
              </Button>
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                {...tabStyles.default}
                {...(activeFilter === 'billing' ? tabStyles.active : tabStyles.inactive)}
                fontSize="xs"
                px={3}
                onClick={() => setActiveFilter('billing')}
              >
                Billing
              </Button>
              <Button
                size="sm"
                h={8}
                flexShrink={0}
                {...tabStyles.default}
                {...(activeFilter === 'updates' ? tabStyles.active : tabStyles.inactive)}
                fontSize="xs"
                px={3}
                onClick={() => setActiveFilter('updates')}
              >
                Updates
              </Button>
            </Flex>

            {/* Notifications List */}
            <Flex
              direction="column"
              gap={1}
              maxH={{ base: 'calc(100vh - 280px)', sm: '60vh' }}
              overflowY="auto"
              pr={2}
              mr={-2}
              css={{
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': { bg: '#cbd5e0', borderRadius: 'full' },
              }}
            >
              {filteredNotifications.map((notification) => (
                <Flex
                  key={notification.id}
                  gap={3}
                  p={{ base: 2.5, sm: 3 }}
                  justify="space-between"
                  align="flex-start"
                  cursor="pointer"
                  borderRadius={theme.borderRadius.lg}
                  borderLeft="4px solid"
                  borderLeftColor={notification.isUnread ? theme.colors.primary[600] : 'transparent'}
                  bg={notification.isUnread ? theme.colors.primary[50] : 'transparent'}
                  transition="all 0.2s"
                  _hover={{ bg: notification.isUnread ? theme.colors.primary[100] : theme.colors.background.secondary }}
                  role="group"
                  w="100%"
                >
                  <Flex align="start" gap={3} flex={1} minW={0}>
                    <Flex
                      align="center"
                      justify="center"
                      borderRadius={theme.borderRadius.lg}
                      bg={notification.isUnread ? theme.colors.primary[200] : theme.colors.background.secondary}
                      color={notification.isUnread ? theme.colors.primary[600] : theme.colors.text.secondary}
                      flexShrink={0}
                      w={{ base: 9, sm: 10 }}
                      h={{ base: 9, sm: 10 }}
                    >
                      <Icon as={notification.icon} w={{ base: 4, sm: 5 }} h={{ base: 4, sm: 5 }} />
                    </Flex>
                    <Flex direction="column" justify="center" gap={0.5} flex={1} minW={0}>
                      <Text
                        fontSize={{ base: 'xs', sm: 'sm' }}
                        fontWeight={theme.typography.fontWeight.semibold}
                        color={notification.isUnread ? theme.colors.text.primary : theme.colors.text.secondary}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        {notification.title}
                      </Text>
                      <Text
                        fontSize="xs"
                        color={theme.colors.text.tertiary}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        display="-webkit-box"
                        css={{
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {notification.description}
                      </Text>
                      <Text
                        fontSize="xs"
                        color={notification.isUnread ? theme.colors.primary[600] : theme.colors.text.tertiary}
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
                    display={{ base: 'none', sm: 'block' }}
                  >
                    <Box
                      as="button"
                      w={7}
                      h={7}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      color={theme.colors.text.tertiary}
                      _hover={{ bg: theme.colors.background.secondary }}
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

