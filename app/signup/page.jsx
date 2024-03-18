"use client"
import { useState } from 'react';

import { useRouter } from 'next/navigation'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const Form1 = ({ onNext, formData, setFormData }) => {
  const { firstName, identityCard, phoneNumber, gender, walletAddress } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Vérification si le champ accepte uniquement des chiffres
    if (name === "identityCard" || name === "phoneNumber") {
      const regex = /^[0-9]*$/; // Expression régulière pour vérifier les chiffres seulement
      if (!regex.test(value)) {
        // Si la valeur ne contient pas que des chiffres, ne pas mettre à jour le state
        return;
      }
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isForm1Filled = () => {
    return firstName !== '' && identityCard !== '' && phoneNumber !== '' && gender !== '' && walletAddress !== '';
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Patient Registration
      </Heading>
      
      <FormControl mr="5%" isRequired>
        <FormLabel htmlFor="first-name" fontWeight={'normal'}>
          First name
        </FormLabel>
        <Input id="first-name" name="firstName" placeholder="First name" required value={firstName} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="identity-card" fontWeight={'normal'} mt="2%">
          Identity card
        </FormLabel>
        <Input id="identity-card" name="identityCard" placeholder="Identity card" value={identityCard} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="phone-number" fontWeight={'normal'} mt="2%">
          Phone number
        </FormLabel>
        <Input id="phone-number" name="phoneNumber" placeholder="Phone number" type="tel" value={phoneNumber} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="wallet-address" fontWeight={'normal'} mt="2%">
          Wallet Address
        </FormLabel>
        <Input id="wallet-address" name="walletAddress" placeholder="Wallet Address" value={walletAddress} onChange={handleChange} />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
        <FormLabel htmlFor="gender" fontSize="sm" fontWeight="md" color="gray.700" mt="2%">
          Gender
        </FormLabel>
        <Select
          id="gender"
          name="gender"
          autoComplete="gender"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={gender}
          onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
        </Select>
      </FormControl>

      <Button onClick={onNext} isDisabled={!isForm1Filled()} colorScheme="teal" variant="outline" mt="2%">
        Next
      </Button>
    </>
  );
};

const Form2 = ({ onBack, onSubmit, formData, setFormData }) => {
  const { dob, streetAddress, bloodGroup, height, weight } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Vérification si le champ accepte uniquement des chiffres
    if (name === "height" || name === "weight") {
      const regex = /^[0-9]*\.?[0-9]*$/; // Expression régulière pour vérifier les chiffres et un point facultatif pour les décimaux
      if (!regex.test(value)) {
        // Si la valeur ne contient pas que des chiffres, ne pas mettre à jour le state
        return;
      }
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isForm2Filled = () => {
    return dob !== '' && streetAddress !== '' && bloodGroup !== '' && height !== '' && weight !== '';
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Patient Details
      </Heading>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel htmlFor="date-of-birth" fontSize="sm" fontWeight="md" color="gray.700" mt="2%">
          Date of birth
        </FormLabel>
        <Input
          type="date"
          id="date-of-birth"
          name="dob"
          autoComplete="date-of-birth"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={dob}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel htmlFor="street-address" fontSize="sm" fontWeight="md" color="gray.700" mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          id="street-address"
          name="streetAddress"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={streetAddress}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
        <FormLabel htmlFor="blood-group" fontSize="sm" fontWeight="md" color="gray.700" mt="2%">
          Blood Group
        </FormLabel>
        <Select
          id="blood-group"
          name="bloodGroup"
          autoComplete="blood-group"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={bloodGroup}
          onChange={handleChange}>
          <option>A</option>
          <option>B</option>
          <option>AB</option>
          <option>O</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel htmlFor="height" fontSize="sm" fontWeight="md" color="gray.700" mt="2%">
          Height
        </FormLabel>
        <Input
          type="text"
          id="height"
          name="height"
          placeholder="Height in cm ex: 1.80"
          autoComplete="height"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={height}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel htmlFor="weight" fontSize="sm" fontWeight="md" color="gray.700" mt="2%">
          Weight
        </FormLabel>
        <Input
          type="text"
          id="weight"
          name="weight"
          placeholder="Weight in kg"
          autoComplete="weight"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={weight}
          onChange={handleChange}
        />
      </FormControl>

      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Button onClick={onBack} colorScheme="teal" variant="solid" w="7rem">
            Back
          </Button>
          <Button onClick={onSubmit} isDisabled={!isForm2Filled()} colorScheme="red" variant="solid" w="7rem">
            Submit
          </Button>
        </Flex>
      </ButtonGroup>
    </>
  );
};


function SignUp() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const [formData, setFormData] = useState({
    firstName: '',
    identityCard: '',
    phoneNumber: '',
    gender: '',
    walletAddress: '',
    dob: '',
    streetAddress: '',
    bloodGroup: '',
    height: '',
    weight: '',
  });

  const handleNext = () => {
    setStep(step + 1);
    setProgress(progress + 50);
  };

  const handleBack = () => {
    setStep(step - 1);
    setProgress(progress - 50);
  };
  const router = useRouter();

  const handleSubmit = () => {
    
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
      
    });
    router.push('/')
    // Réinitialiser les champs du formulaire
    setFormData({
      firstName: '',
      identityCard: '',
      phoneNumber: '',
      gender: '',
      walletAddress: '',
      dob: '',
      streetAddress: '',
      bloodGroup: '',
      height: '',
      weight: '',
    });
  };

  
 

  return (
    <>
      <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? (
          <Form1 onNext={handleNext} formData={formData} setFormData={setFormData} />
        ) : (
          <Form2 onBack={handleBack} onSubmit={handleSubmit} formData={formData} setFormData={setFormData}  />
        )}
        
      </Box>
    </>
  );
}

export default SignUp;
