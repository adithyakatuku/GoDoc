import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Icon,
  Image,
  Container,
} from '@chakra-ui/react';
import { HiSearch, HiBell } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import godocLogo from '../../assets/godoc-logo.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Box bg="white" borderBottom="1px" borderColor="gray.200" py={4}>
      <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }}>
        <Flex align="center" justify="space-between">
          {/* Logo and Navigation */}
          <Flex gap={12} align="center">
            <Flex gap={3} align="center">
              <Image src={godocLogo} alt="GoDoc" h={10} />
              <Heading size="md" color="gray.800" fontWeight="800">
                GoDoc
              </Heading>
            </Flex>
            <Flex gap={8} align="center">
              <Link to="/patient/home">
                <Text
                  color={isActive('/patient/home') ? 'green.500' : 'gray.600'}
                  fontWeight={isActive('/patient/home') ? '700' : '600'}
                  cursor="pointer"
                  _hover={{ color: 'green.600' }}
                >
                  Home
                </Text>
              </Link>
              <Link to="/patient/appointments">
                <Text
                  color={isActive('/patient/appointments') ? 'green.500' : 'gray.600'}
                  fontWeight={isActive('/patient/appointments') ? '700' : '600'}
                  cursor="pointer"
                  _hover={{ color: 'gray.800' }}
                >
                  Appointments
                </Text>
              </Link>
              <Link to="/patient/messages">
                <Text
                  color={isActive('/patient/messages') ? 'green.500' : 'gray.600'}
                  fontWeight={isActive('/patient/messages') ? '700' : '600'}
                  cursor="pointer"
                  _hover={{ color: 'gray.800' }}
                >
                  Messages
                </Text>
              </Link>
            </Flex>
          </Flex>

          {/* Search, Notifications, and Profile */}
          <Flex gap={6} align="center">
            <Box position="relative" w="250px">
              <Icon
                as={HiSearch}
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                zIndex={1}
                pointerEvents="none"
                w={5}
                h={5}
              />
              <Input
                placeholder="Search"
                bg="gray.50"
                border="none"
                borderRadius="md"
                pl={10}
              />
            </Box>
            <Box
              as="button"
              position="relative"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            >
              <Icon
                as={HiBell}
                w={6}
                h={6}
                color="gray.600"
              />
            </Box>
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Profile"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

