import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Image,
  Container,
} from '@chakra-ui/react';
import { HiBell, HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import godocLogo from '../../assets/godoc-logo.png';
import NotificationsModal from '../../components/NotificationsModal';

const DoctorNavbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/doctor/home', label: 'Home' },
    { path: '/doctor/schedule', label: 'Schedule' },
    { path: '/doctor/patients', label: 'Patients' },
    { path: '/doctor/messages', label: 'Messages' },
  ];

  return (
    <>
      <Box bg="white" borderBottom="1px" borderColor="gray.200" py={4} position="relative">
        <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }}>
          <Flex align="center" justify="space-between">
            {/* Left Side - Mobile Menu + Logo */}
            <Flex gap={4} align="center">
              {/* Mobile Menu Button */}
              <Box
                as="button"
                display={{ base: 'block', lg: 'none' }}
                cursor="pointer"
                onClick={() => setIsMobileMenuOpen(true)}
                _hover={{ opacity: 0.8 }}
              >
                <Icon as={HiMenu} w={7} h={7} color="gray.600" />
              </Box>

              {/* Logo */}
              <Link to="/doctor/home">
                <Flex gap={3} align="center" cursor="pointer" _hover={{ opacity: 0.8 }}>
                  <Image src={godocLogo} alt="GoDoc" h={10} />
                  <Heading size="md" color="gray.800" fontWeight="800">
                    GoDoc
                  </Heading>
                </Flex>
              </Link>

              {/* Desktop Navigation */}
              <Flex gap={8} align="center" display={{ base: 'none', lg: 'flex' }} ml={8}>
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path}>
                    <Text
                      color={isActive(link.path) ? '#10b981' : 'gray.600'}
                      fontWeight={isActive(link.path) ? '700' : '600'}
                      cursor="pointer"
                      _hover={{ color: '#10b981' }}
                    >
                      {link.label}
                    </Text>
                  </Link>
                ))}
              </Flex>
            </Flex>

            {/* Right Side - Notifications and Profile */}
            <Flex gap={4} align="center">
              {/* Notification Icon */}
              <Box
                as="button"
                position="relative"
                cursor="pointer"
                w={10}
                h={10}
                borderRadius="full"
                bg="rgba(16, 185, 129, 0.2)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ bg: 'rgba(16, 185, 129, 0.3)' }}
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              >
                <Icon as={HiBell} w={5} h={5} color="#10b981" />
                <Box
                  position="absolute"
                  top="6px"
                  right="6px"
                  w={4}
                  h={4}
                  borderRadius="full"
                  bg="red.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="700"
                  color="white"
                >
                  4
                </Box>
              </Box>

              {/* Profile Picture */}
              <Box
                as="button"
                w={10}
                h={10}
                borderRadius="full"
                overflow="hidden"
                bg="gray.200"
                cursor="pointer"
                _hover={{ opacity: 0.9 }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb71DnBNtYjSn4uHLfHcKS9D0Il2S044o_J7MIhN9qw395yIBiuUgiNMXAVzhg0iStZaMh8vabS-y1SbvL9MAEqf9YXX1k6xQmBRARmk-u8EN76h2DTBBt2q-rwnKIzklDmJrpmbzuyVb8ldyPgOENp3YhgSez8ibYpkcESWk5WGemsnseQxbLCmi2QjbBs9Jxuw-GaVrhx4PfHL3173bh4Njhuk-Q2lBgpp5GMSnpYZAX_V4d_OAcJo6z1pwxqIxIb-cgFPTdSMeu"
                  alt="Profile"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            </Flex>
          </Flex>
        </Container>

        {/* Notifications Modal */}
        <NotificationsModal
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
        />
      </Box>

      {/* Mobile Drawer Menu */}
      <Box
        position="fixed"
        top={0}
        left={0}
        w="280px"
        h="100vh"
        bg="white"
        boxShadow="xl"
        transform={isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'}
        transition="transform 0.3s ease"
        zIndex={1000}
      >
        {/* Drawer Header */}
        <Flex
          justify="space-between"
          align="center"
          borderBottom="1px"
          borderColor="gray.200"
          p={4}
        >
          <Flex gap={3} align="center">
            <Image src={godocLogo} alt="GoDoc" h={8} />
            <Heading size="sm" color="gray.800" fontWeight="800">
              GoDoc
            </Heading>
          </Flex>
          <Box
            as="button"
            cursor="pointer"
            onClick={() => setIsMobileMenuOpen(false)}
            _hover={{ opacity: 0.7 }}
          >
            <Icon as={HiX} w={6} h={6} color="gray.600" />
          </Box>
        </Flex>

        {/* Drawer Body */}
        <Flex direction="column" gap={6} p={6}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Text
                color={isActive(link.path) ? '#10b981' : 'gray.600'}
                fontWeight={isActive(link.path) ? '700' : '600'}
                fontSize="lg"
                cursor="pointer"
                _hover={{ color: '#10b981' }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </Flex>
      </Box>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={999}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default DoctorNavbar;

