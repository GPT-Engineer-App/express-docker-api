import { useState } from "react";
import { Box, Heading, Text, Button, Image, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaCalendarAlt, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  const [isManager, setIsManager] = useState(false);

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to the Booking Management System
        </Heading>

        <HStack justify="center">
          <Button colorScheme="blue" onClick={() => setIsManager(false)}>
            Customer View
          </Button>
          <Button colorScheme="green" onClick={() => setIsManager(true)}>
            Manager View
          </Button>
        </HStack>

        {isManager ? (
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Manager Dashboard
            </Heading>
            <Text fontSize="xl" mb={8}>
              Manage bookings, process payments, and view analytics.
            </Text>
            <Image src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMzA5NDYzM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Manager dashboard" mb={8} />
            <Button colorScheme="green" size="lg">
              Go to Dashboard
            </Button>
          </Box>
        ) : (
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Book an Appointment
            </Heading>
            <HStack spacing={12} mb={12}>
              <VStack>
                <FaCalendarAlt size={48} />
                <Text>Easy Online Booking</Text>
              </VStack>
              <VStack>
                <FaDollarSign size={48} />
                <Text>Secure Payments</Text>
              </VStack>
              <VStack>
                <FaShieldAlt size={48} />
                <Text>Privacy Protected</Text>
              </VStack>
            </HStack>

            <Divider mb={8} />

            <VStack spacing={4} align="stretch">
              <Text fontSize="lg">Select a service:</Text>
              <HStack>
                <Button colorScheme="blue">Service 1</Button>
                <Button colorScheme="blue">Service 2</Button>
                <Button colorScheme="blue">Service 3</Button>
              </HStack>

              <Button colorScheme="green" size="lg">
                Book Now
              </Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
