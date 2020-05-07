import React from "react";
import { Box, Avatar, Flex, Stack, Heading, Badge } from "@chakra-ui/core";

export const Card = ({ name, avatar, username, email, ...props }) => {
  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      rounded="md"
      width="2xs"
      {...props}
    >
      <Flex justifyContent="center" paddingY="2">
        <Avatar size="xl" name={name} src={avatar} />
      </Flex>
      <Stack>
        <Heading size="md" fontWeight="semibold">
          {name}
        </Heading>
        <Badge>{username}</Badge>
        <Badge textTransform="lowercase">{email}</Badge>
      </Stack>
    </Box>
  );
};
