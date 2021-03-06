import NextLink from 'next/link';
import {
	Text,
	Button,
	Box,
	VStack,
} from '@chakra-ui/react';
import "@fontsource/dejavu-mono"

const NotFound = (): JSX.Element => {
	return (
		<Box>
			<VStack>
				<Text
					fontSize='10em'
					fontWeight='extrabold'
					letterSpacing='10px'
					mt='50' mb='0'
					pb='0'
				>
					404
				</Text>
				<Text
					fontSize='2em'
					fontWeight='bold'
					pt='0' mt='0' pb='100px'
				>
					Page was not found.
				</Text>
				<NextLink href='/' >
					<Button 
						aria-label='Go to home page'
						m='2em'
						border='2px' borderRadius='1px'
						backgroundColor='white'
						textColor='gray.700' fontFamily='DejaVu Mono' letterSpacing='0.09em' fontWeight='semibold'
						_hover={{cursor:'pointer'}}
					>
						HOMEPAGE
					</Button>
				</NextLink>
			</VStack>
		</Box>
	);
}

export default NotFound;
