
import { ChakraProvider } from '@chakra-ui/react'


export const metadata = {
  title: "Hoobank",
  description: "The Next Generation Banking",
};

export default function SignUpLayout({
  children,
}) {
  return (
      <ChakraProvider>

      <main> {children}</main>
      </ChakraProvider>
 
 
  );
}
