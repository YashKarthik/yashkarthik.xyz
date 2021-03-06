import Image from 'next/image';
import NextLink from 'next/link';
import {
	Text,
	Heading,
	Code,
    Box,
    Link as ChakraLink
} from '@chakra-ui/react';

const Blockquote = (props:any) => (
<>
  <blockquote style={{borderLeft: '2px solid #2c5282', padding:'0', margin:'20px 0 20px 40px'}}>
    <Text variant='blockquote' {...props} />
  </blockquote>
</>
)

interface Image {
    alt: string,
    src: string,
    title: string
}

export const OptimizedImage = (props:Image) => (
    <Box my='10' align='center'>
        <Image alt={props.alt} quality={100} src={props.src}/>
        <Text as='i' variant='secondary' fontSize='0.85em'>{props.title}</Text>
    </Box>
)

function getAnchor(text:string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

const AnchorLink = ({text}:{text:string}) => {
  return (
      <NextLink href={'#' + getAnchor(text).toString()} passHref>
          <a role="group">
              {text}
              <ChakraLink fontFamily="monospace" fontSize='inherit' fontWeight='light' ml="2" opacity='0'
                          _groupHover={{
                              color:'blue.600',
                              opacity:'.5'
                          }}>
                  {'#'}
              </ChakraLink>
          </a>
      </NextLink>
  );
}

const MDXComponents: any = {
    blockquote: (props: {children:string}) => <Blockquote {...props} />,
    inlineCode: (props: {children:string}) => <Code colorScheme='blue' {...props} />,
    ul: (props: {children:string}) => <ul style={{margin:'20px 0 20px 20px'}} {...props} />,
    ol: (props: {children:string}) => <ol style={{margin:'20px 0 20px 20px'}} {...props} />,
    h3: (props: { children: string }) => <Heading id={getAnchor(props.children)} as="h4" size='md' m='2.25rem 0 0 0'><AnchorLink text={props.children} /></Heading>,
    h2: (props: { children: string }) => <Heading id={getAnchor(props.children)} as="h3" size='lg' m='2.25rem 0 .6rem 0'><AnchorLink text={props.children} /></Heading>,
    h1: (props: { children: string }) => <Heading id={getAnchor(props.children)} as="h2" size='xl' m='2.25rem 0 .7rem 0'><AnchorLink text={props.children} /></Heading>,
    a: (props: {children:string}) => <ChakraLink isExternal variant='secondary' textDecoration='underline' {...props}/>,
    code: (props: {children:string}) => <Code variant='outline' display='block' whiteSpace='pre' p='10px' mb='20px' colorScheme='blue' {...props} />,
    p: (props: {children:string}) => <Text fontSize={{ base: '0.95em', sm: '1em', md: '1.05em', lg: '1.05em', xl: '1em' }} m='1rem 0 2rem 0' mx='0' {...props} />,
}

export default MDXComponents;
