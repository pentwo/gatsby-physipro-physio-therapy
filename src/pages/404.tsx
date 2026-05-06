import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Title, Text, Stack, Button } from "@mantine/core";
import { Link } from "gatsby";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Stack gap="md" py="xl" align="center">
        <Title order={1}>Page Not Found</Title>
        <Text size="lg">Sorry, we couldn't find the page you're looking for.</Text>
        <Button component={Link} to="/">
          Go Home
        </Button>
      </Stack>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="404 - Not Found" />;
