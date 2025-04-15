import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  name: string;
  phone: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  name,
  phone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4 shadow-md">
              <Heading className="leading-tight">
                New Contact Form Submission
              </Heading>
              <Hr />
              <Text><strong>Name:</strong> {name}</Text>
              <Text><strong>Email:</strong> {senderEmail}</Text>
              <Text><strong>Phone:</strong> {phone}</Text>
              <Hr />
              <Heading as="h3" className="text-lg font-medium">Message:</Heading>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}