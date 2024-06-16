'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import Container from "../Container";

const Footer = () => {
    return (
        <Box p="4">
          <Flex justifyContent="center" alignItems="center">
            <Text>thinesjs.com</Text>
          </Flex>
        </Box>
    )
}

export default Footer;