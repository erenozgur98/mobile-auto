import React, { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import {
  GlobalStyles,
  Root,
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  Hero,
  HeroContent,
  ButtonGroup,
  BtnPrimary,
  Container,
  ServicesSection,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  ServiceCardHeader,
  ServiceCardContent,
  ExpandButton,
  Pricing,
  WhyUsSection,
  BenefitsGrid,
  Benefit,
  HowItWorksSection,
  Steps,
  Step,
  StepNumber,
  ContactSection,
  ContactContent,
  ContactInfo,
  ServiceArea,
  Phone,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  Footer,
  ServiceCheckboxGroup,
  ServiceCheckboxLabel,
  ServiceCheckbox,
  ErrorText,
  SuccessText,
} from './styles'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carInfo: '',
    notes: '',
    services: [] as string[],
  })
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [serviceError, setServiceError] = useState(false)
  const [expandedOil, setExpandedOil] = useState(false)
  const [expandedDetail, setExpandedDetail] = useState(false)

  const toggleService = (service: string) => {
    setServiceError(false)
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (formData.services.length === 0) {
      setServiceError(true)
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        'service_tbacej5',
        'template_nez4yhe',
        {
          title: `Service Request - ${formData.services.join(' & ')}`,
          name: formData.name,
          email: formData.email,
          message: `Services: ${formData.services.join(', ')}\nCar: ${formData.carInfo}\n\n${formData.notes || 'No additional notes'}`,
        },
        'GHYpKQWsbmKq2il51',
      )
      setStatus('success')
      setFormData({ name: '', email: '', carInfo: '', notes: '', services: [] })
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
    }
  }

  return (
    <Root>
      <GlobalStyles />

      <Nav>
        <NavContainer>
          <Logo>CLT Mobile Car Care</Logo>
          <NavLinks>
            <a href='#services'>Services</a>
            <a href='#why-us'>Why Us</a>
            <a href='#contact'>Contact</a>
          </NavLinks>
        </NavContainer>
      </Nav>

      <Hero>
        <HeroContent>
          <h1>CLT Mobile Car Care</h1>
          <p>
            Oil changes and auto detailing — we come to you. At home, at work,
            wherever you are.
          </p>
          <ButtonGroup>
            <BtnPrimary href='tel:2019930466'>Call to Schedule</BtnPrimary>
            <BtnPrimary href='mailto:cltmobilecarcare@gmail.com'>
              Email to Schedule
            </BtnPrimary>
          </ButtonGroup>
        </HeroContent>
      </Hero>

      <ServicesSection id='services'>
        <Container>
          <SectionTitle>What We Offer</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceCardHeader onClick={() => setExpandedOil(!expandedOil)}>
                <h3>Mobile Oil Change</h3>
                <ExpandButton $expanded={expandedOil}>+</ExpandButton>
              </ServiceCardHeader>
              <ServiceCardContent $expanded={expandedOil}>
                <ul>
                  <li>Full Synthetic Oil</li>
                  <li>New Oil Filter</li>
                  <li>Visual inspection</li>
                  <li>Mess Free</li>
                </ul>
                <Pricing>Call for Quote</Pricing>
              </ServiceCardContent>
            </ServiceCard>
            <ServiceCard>
              <ServiceCardHeader
                onClick={() => setExpandedDetail(!expandedDetail)}
              >
                <h3>Mobile Auto Detailing</h3>
                <ExpandButton $expanded={expandedDetail}>+</ExpandButton>
              </ServiceCardHeader>
              <ServiceCardContent $expanded={expandedDetail}>
                <ul>
                  <li>Exterior Wash</li>
                  <li>Vacuuming & Wipe Down</li>
                  <li>Steam Cleaning</li>
                  <li>Carpet Shampooing</li>
                  <li>Seat Extraction</li>
                  <li>Detail packages available</li>
                </ul>
                <Pricing>Call for Quote</Pricing>
              </ServiceCardContent>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <WhyUsSection id='why-us'>
        <Container>
          <SectionTitle>Why Choose Us</SectionTitle>
          <BenefitsGrid>
            <Benefit>
              <h3>Save Time</h3>
              <p>
                No waiting rooms. Keep doing what you're doing while we take
                care of your car.
              </p>
            </Benefit>
            <Benefit>
              <h3>We Come to You</h3>
              <p>Home, office, gym — wherever is convenient for you.</p>
            </Benefit>
            <Benefit>
              <h3>Quality Service</h3>
              <p>Professional service with quality products.</p>
            </Benefit>
            <Benefit>
              <h3>Simple & Easy</h3>
              <p>Just call or text to schedule. No hassle.</p>
            </Benefit>
          </BenefitsGrid>
        </Container>
      </WhyUsSection>

      <HowItWorksSection>
        <Container>
          <SectionTitle>How It Works</SectionTitle>
          <Steps>
            <Step>
              <StepNumber>1</StepNumber>
              <h3>Schedule</h3>
              <p>Call or text to book</p>
            </Step>
            <Step>
              <StepNumber>2</StepNumber>
              <h3>We Arrive</h3>
              <p>At your location</p>
            </Step>
            <Step>
              <StepNumber>3</StepNumber>
              <h3>We Work</h3>
              <p>You relax</p>
            </Step>
            <Step>
              <StepNumber>4</StepNumber>
              <h3>Done</h3>
              <p>Back on the road</p>
            </Step>
          </Steps>
        </Container>
      </HowItWorksSection>

      <ContactSection id='contact'>
        <Container>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactContent>
            <ContactInfo>
              <ServiceArea>Serving the Greater Charlotte Area</ServiceArea>
              <Phone>
                <span>Call or Text:</span>
                <a href='tel:2019930466'>(201) 993-0466</a>
              </Phone>
              <ButtonGroup>
                <BtnPrimary href='tel:2019930466'>Call to Schedule</BtnPrimary>
                <BtnPrimary href='mailto:cltmobilecarcare@gmail.com'>
                  Email to Schedule
                </BtnPrimary>
              </ButtonGroup>
            </ContactInfo>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Service(s) Needed *</FormLabel>
                <ServiceCheckboxGroup>
                  <ServiceCheckboxLabel
                    $selected={formData.services.includes('Oil Change')}
                  >
                    <ServiceCheckbox
                      type='checkbox'
                      checked={formData.services.includes('Oil Change')}
                      onChange={() => toggleService('Oil Change')}
                    />
                    Oil Change
                  </ServiceCheckboxLabel>
                  <ServiceCheckboxLabel
                    $selected={formData.services.includes('Car Detailing')}
                  >
                    <ServiceCheckbox
                      type='checkbox'
                      checked={formData.services.includes('Car Detailing')}
                      onChange={() => toggleService('Car Detailing')}
                    />
                    Detailing
                  </ServiceCheckboxLabel>
                </ServiceCheckboxGroup>
                {serviceError && (
                  <ErrorText>Please select at least one service</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormInput
                  type='text'
                  placeholder='Your name'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput
                  type='email'
                  placeholder='your@email.com'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Car Info</FormLabel>
                <FormInput
                  type='text'
                  placeholder='Year, Make, Model (e.g. 2020 Honda Civic)'
                  value={formData.carInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, carInfo: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Notes</FormLabel>
                <FormTextarea
                  placeholder='Any additional details or questions...'
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </FormGroup>
              <SubmitButton type='submit' disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Request'}
              </SubmitButton>
              {status === 'success' && (
                <SuccessText>Message sent successfully!</SuccessText>
              )}
              {status === 'error' && (
                <ErrorText>Failed to send. Please try again.</ErrorText>
              )}
            </ContactForm>
          </ContactContent>
        </Container>
      </ContactSection>

      <Footer>
        {/* <Container>
          <p>© {new Date().getFullYear()} Mobile Auto Services. All rights reserved.</p>
        </Container> */}
      </Footer>
    </Root>
  )
}

export default App
