import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Badge,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { badgeStyles, buttonStyles, buttonStylesSecondary, cardStyles, tabStyles, theme } from '../styles/theme';

const StyleGuide = () => {
  return (
    <Box minH="100vh" bg={theme.colors.background.tertiary} py={12}>
      <Container maxW="container.xl" px={6}>
        <Heading size="2xl" fontWeight="800" color={theme.colors.text.primary} mb={8} textAlign="center">
          GoDoc Style Guide
        </Heading>

        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8}>
          {/* Buttons Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Buttons
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Primary Button
                  </Text>
                  <Button {...buttonStyles.primary} w="100%">
                    Register as a Patient
                  </Button>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Secondary Button (Outlined)
                  </Text>
                  <Button {...buttonStyles.secondary} w="100%">
                    Register as a Hospital
                  </Button>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Tertiary Button (Ghost)
                  </Text>
                  <Button {...buttonStyles.tertiary} w="100%">
                    Cancel
                  </Button>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Success Button
                  </Text>
                  <Button {...buttonStyles.success} w="100%">
                    Confirm
                  </Button>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Danger Button
                  </Text>
                  <Button {...buttonStyles.danger} w="100%">
                    Delete
                  </Button>
                </Box>

                <Box borderTop="1px solid" borderColor={theme.colors.border.light} my={2} />

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Button Sizes
                  </Text>
                  <VStack gap={2} align="stretch">
                    <Button {...buttonStyles.primary} h="36px" fontSize="14px" lineHeight="20px" px={2.5}>
                      Small Button
                    </Button>
                    <Button {...buttonStyles.primary}>
                      Default Button (48px)
                    </Button>
                    <Button {...buttonStyles.primary} h="56px" fontSize="20px" lineHeight="32px" px={4}>
                      Large Button
                    </Button>
                    <Button {...buttonStyles.primary} h="64px" fontSize="20px" lineHeight="36px" px={5}>
                      Extra Large Button
                    </Button>
                  </VStack>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Disabled States
                  </Text>
                  <VStack gap={2} align="stretch">
                    <Button {...buttonStyles.primary} disabled>
                      Disabled Primary
                    </Button>
                    <Button {...buttonStyles.secondary} disabled>
                      Disabled Secondary
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Cards Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Cards
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Default Card
                  </Text>
                  <Box {...cardStyles.default}>
                    <Text>This is a default card with standard padding and shadow.</Text>
                  </Box>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Large Card
                  </Text>
                  <Box {...cardStyles.large}>
                    <Text>This is a large card with more padding and enhanced shadow.</Text>
                  </Box>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Elevated Card
                  </Text>
                  <Box {...cardStyles.elevated}>
                    <Text>This is an elevated card with a larger shadow for emphasis.</Text>
                  </Box>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Flat Card
                  </Text>
                  <Box {...cardStyles.flat}>
                    <Text>This is a flat card with no shadow, only a border.</Text>
                  </Box>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Interactive Card (Hover to see lift effect)
                  </Text>
                  <Box {...cardStyles.interactive}>
                    <Text>This card lifts up on hover - perfect for clickable cards!</Text>
                  </Box>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Static Card (No hover effect)
                  </Text>
                  <Box {...cardStyles.static}>
                    <Text>This card has no hover effect - use for non-interactive content.</Text>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Inputs Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Inputs
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Default Input
                  </Text>
                  <Input placeholder="Enter your name" />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Input with Value
                  </Text>
                  <Input value="john.doe@example.com" />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Disabled Input
                  </Text>
                  <Input placeholder="Disabled input" disabled />
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Error Input
                  </Text>
                  <Input placeholder="Error state" borderColor={theme.colors.status.error} />
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Badges Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Badges
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Status Badges (Using badgeStyles)
                  </Text>
                  <HStack gap={2} flexWrap="wrap">
                    <Badge {...badgeStyles.success}>Success</Badge>
                    <Badge {...badgeStyles.warning}>Warning</Badge>
                    <Badge {...badgeStyles.error}>Error</Badge>
                    <Badge {...badgeStyles.info}>Info</Badge>
                  </HStack>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Appointment Status Badges
                  </Text>
                  <HStack gap={2} flexWrap="wrap">
                    <Badge {...badgeStyles.success}>Confirmed</Badge>
                    <Badge {...badgeStyles.warning}>Pending</Badge>
                    <Badge {...badgeStyles.error}>Cancelled</Badge>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Tabs Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Tabs
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Tab Buttons (Using tabStyles)
                  </Text>
                  <Flex gap={2} flexWrap="wrap">
                    <Button {...tabStyles.default} {...tabStyles.active}>
                      Active Tab
                    </Button>
                    <Button {...tabStyles.default} {...tabStyles.inactive}>
                      Inactive Tab
                    </Button>
                    <Button {...tabStyles.default} {...tabStyles.inactive}>
                      Another Tab
                    </Button>
                  </Flex>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Underline Tabs (For Appointments page)
                  </Text>
                  <Flex borderBottom="3px solid" borderColor={theme.colors.border.light} mb={4}>
                    <Button
                      variant="ghost"
                      borderRadius="none"
                      fontWeight={theme.typography.fontWeight.bold}
                      color={theme.colors.primary[600]}
                      borderBottom="3px solid"
                      borderBottomColor={theme.colors.primary[600]}
                      mb="-3px"
                      px={6}
                      _hover={{ bg: 'transparent', color: theme.colors.primary[600] }}
                    >
                      Active
                    </Button>
                    <Button
                      variant="ghost"
                      borderRadius="none"
                      fontWeight={theme.typography.fontWeight.bold}
                      color={theme.colors.text.secondary}
                      borderBottom="3px solid"
                      borderBottomColor="transparent"
                      mb="-3px"
                      px={6}
                      _hover={{ bg: 'transparent', color: theme.colors.primary[600] }}
                    >
                      Inactive
                    </Button>
                  </Flex>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Secondary Buttons Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Secondary Buttons
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Light Green Button (Medical Records style)
                  </Text>
                  <Button {...buttonStylesSecondary.lightGreen} w="100%">
                    Medical Records
                  </Button>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Colors Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Colors
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Primary Colors
                  </Text>
                  <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                    <Box bg={theme.colors.primary[500]} h={16} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                      <Text color="white" fontSize="xs" fontWeight="600">Primary</Text>
                    </Box>
                    <Box bg={theme.colors.primaryAlt[500]} h={16} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                      <Text color="white" fontSize="xs" fontWeight="600">Alt</Text>
                    </Box>
                    <Box bg={theme.colors.primary[600]} h={16} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                      <Text color="white" fontSize="xs" fontWeight="600">Dark</Text>
                    </Box>
                  </Grid>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Background Colors
                  </Text>
                  <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                    <Box bg={theme.colors.background.primary} h={16} borderRadius="md" border="1px solid" borderColor={theme.colors.border.light} display="flex" alignItems="center" justifyContent="center">
                      <Text fontSize="xs" fontWeight="600">Primary</Text>
                    </Box>
                    <Box bg={theme.colors.background.secondary} h={16} borderRadius="md" border="1px solid" borderColor={theme.colors.border.light} display="flex" alignItems="center" justifyContent="center">
                      <Text fontSize="xs" fontWeight="600">Secondary</Text>
                    </Box>
                    <Box bg={theme.colors.background.tertiary} h={16} borderRadius="md" border="1px solid" borderColor={theme.colors.border.light} display="flex" alignItems="center" justifyContent="center">
                      <Text fontSize="xs" fontWeight="600">Tertiary</Text>
                    </Box>
                  </Grid>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Status Colors
                  </Text>
                  <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                    <Box bg={theme.colors.status.success} h={16} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                      <Text color="white" fontSize="xs" fontWeight="600">Success</Text>
                    </Box>
                    <Box bg={theme.colors.status.warning} h={16} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                      <Text color="white" fontSize="xs" fontWeight="600">Warning</Text>
                    </Box>
                    <Box bg={theme.colors.status.error} h={16} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                      <Text color="white" fontSize="xs" fontWeight="600">Error</Text>
                    </Box>
                    <Box bg={theme.colors.status.info} h={16} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                      <Text color="white" fontSize="xs" fontWeight="600">Info</Text>
                    </Box>
                  </Grid>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Typography Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Typography
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Font Sizes
                  </Text>
                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs">Extra Small (12px) - Lorem ipsum dolor sit amet</Text>
                    <Text fontSize="sm">Small (14px) - Lorem ipsum dolor sit amet</Text>
                    <Text fontSize="base">Base (16px) - Lorem ipsum dolor sit amet</Text>
                    <Text fontSize="lg">Large (18px) - Lorem ipsum dolor sit amet</Text>
                    <Text fontSize="xl">Extra Large (20px) - Lorem ipsum dolor sit amet</Text>
                    <Text fontSize="2xl">2XL (24px) - Lorem ipsum dolor sit amet</Text>
                    <Text fontSize="3xl">3XL (30px) - Lorem ipsum dolor sit amet</Text>
                  </VStack>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Font Weights
                  </Text>
                  <VStack align="stretch" gap={2}>
                    <Text fontWeight="400">Normal (400) - Regular text</Text>
                    <Text fontWeight="500">Medium (500) - Medium text</Text>
                    <Text fontWeight="600">Semibold (600) - Semibold text</Text>
                    <Text fontWeight="700">Bold (700) - Bold text</Text>
                    <Text fontWeight="800">Extrabold (800) - Extrabold text</Text>
                  </VStack>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Text Colors
                  </Text>
                  <VStack align="stretch" gap={2}>
                    <Text color={theme.colors.text.primary}>Primary Text - Main content</Text>
                    <Text color={theme.colors.text.secondary}>Secondary Text - Supporting content</Text>
                    <Text color={theme.colors.text.tertiary}>Tertiary Text - Muted content</Text>
                    <Text color={theme.colors.text.disabled}>Disabled Text - Inactive content</Text>
                    <Text color={theme.colors.primary[600]}>Primary Color Text - Accent</Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          {/* Spacing & Border Radius Section */}
          <GridItem>
            <Box {...cardStyles.default} mb={6}>
              <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
                Spacing & Border Radius
              </Heading>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Border Radius
                  </Text>
                  <VStack gap={2}>
                    <Box bg={theme.colors.primary[100]} p={4} borderRadius={theme.borderRadius.sm}>
                      <Text fontSize="xs">Small (6px)</Text>
                    </Box>
                    <Box bg={theme.colors.primary[100]} p={4} borderRadius={theme.borderRadius.md}>
                      <Text fontSize="xs">Medium (8px)</Text>
                    </Box>
                    <Box bg={theme.colors.primary[100]} p={4} borderRadius={theme.borderRadius.lg}>
                      <Text fontSize="xs">Large (12px)</Text>
                    </Box>
                    <Box bg={theme.colors.primary[100]} p={4} borderRadius={theme.borderRadius.xl}>
                      <Text fontSize="xs">XL (16px)</Text>
                    </Box>
                    <Box bg={theme.colors.primary[100]} p={4} borderRadius={theme.borderRadius['2xl']}>
                      <Text fontSize="xs">2XL (24px)</Text>
                    </Box>
                    <Box bg={theme.colors.primary[100]} p={4} borderRadius={theme.borderRadius.full}>
                      <Text fontSize="xs">Full (Circle)</Text>
                    </Box>
                  </VStack>
                </Box>

                <Box>
                  <Text fontSize="sm" fontWeight="600" color={theme.colors.text.secondary} mb={2}>
                    Spacing Scale
                  </Text>
                  <VStack align="stretch" gap={2}>
                    <Flex align="center" gap={2}>
                      <Box bg={theme.colors.primary[500]} w="4px" h="4px" borderRadius="full" />
                      <Text fontSize="xs">XS: 4px</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Box bg={theme.colors.primary[500]} w="8px" h="8px" borderRadius="full" />
                      <Text fontSize="xs">SM: 8px</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Box bg={theme.colors.primary[500]} w="16px" h="16px" borderRadius="full" />
                      <Text fontSize="xs">MD: 16px</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Box bg={theme.colors.primary[500]} w="24px" h="24px" borderRadius="full" />
                      <Text fontSize="xs">LG: 24px</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Box bg={theme.colors.primary[500]} w="32px" h="32px" borderRadius="full" />
                      <Text fontSize="xs">XL: 32px</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Box bg={theme.colors.primary[500]} w="48px" h="48px" borderRadius="full" />
                      <Text fontSize="xs">2XL: 48px</Text>
                    </Flex>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        {/* Shadows Section */}
        <Box {...cardStyles.default} mt={8}>
          <Heading size="lg" fontWeight="800" color={theme.colors.text.primary} mb={6}>
            Shadows
          </Heading>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }} gap={4}>
            <Box bg="white" p={6} borderRadius="md" boxShadow={theme.shadows.sm}>
              <Text fontSize="sm" fontWeight="600" mb={2}>Small</Text>
              <Text fontSize="xs" color={theme.colors.text.tertiary}>Subtle elevation</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow={theme.shadows.md}>
              <Text fontSize="sm" fontWeight="600" mb={2}>Medium</Text>
              <Text fontSize="xs" color={theme.colors.text.tertiary}>Standard elevation</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow={theme.shadows.lg}>
              <Text fontSize="sm" fontWeight="600" mb={2}>Large</Text>
              <Text fontSize="xs" color={theme.colors.text.tertiary}>Prominent elevation</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow={theme.shadows.xl}>
              <Text fontSize="sm" fontWeight="600" mb={2}>XL</Text>
              <Text fontSize="xs" color={theme.colors.text.tertiary}>High elevation</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow={theme.shadows['2xl']}>
              <Text fontSize="sm" fontWeight="600" mb={2}>2XL</Text>
              <Text fontSize="xs" color={theme.colors.text.tertiary}>Maximum elevation</Text>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default StyleGuide;

