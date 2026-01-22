import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
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
  Hours,
  Phone,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  Footer,
} from './styles';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carInfo: '',
    notes: '',
    services: [] as string[],
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serviceError, setServiceError] = useState(false);

  const toggleService = (service: string) => {
    setServiceError(false);
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      setServiceError(true);
      return;
    }

    setStatus('sending');

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
        'GHYpKQWsbmKq2il51' 
      );
      setStatus('success');
      setFormData({ name: '', email: '', carInfo: '', notes: '', services: [] });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <Root>
      <GlobalStyles />

      <Nav>
        <NavContainer>
          <Logo>Mobile Auto Services</Logo>
          <NavLinks>
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </NavLinks>
        </NavContainer>
      </Nav>

      <Hero>
        <HeroContent>
          <h1>Mobile Auto Services</h1>
          <p>Oil changes and auto detailing — we come to you. At home, at work, wherever you are.</p>
          <ButtonGroup>
            <BtnPrimary href="tel:2019930466">Call to Schedule</BtnPrimary>
            <BtnPrimary href="mailto:cltmobilecarcare@gmail.com">Email to Schedule</BtnPrimary>
          </ButtonGroup>
        </HeroContent>
      </Hero>

      <ServicesSection id="services">
        <Container>
          <SectionTitle>What We Offer</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <h3>Mobile Oil Change</h3>
              <ul>
                <li>Conventional or synthetic oil</li>
                <li>New oil filter</li>
                <li>Fluid level check & top-off</li>
                <li>Tire pressure check</li>
                <li>Visual inspection</li>
              </ul>
              <Pricing>Call for Quote</Pricing>
            </ServiceCard>
            <ServiceCard>
              <h3>Mobile Auto Detailing</h3>
              <ul>
                <li>Exterior wash & wax</li>
                <li>Interior vacuuming & wipe down</li>
                <li>Dashboard & console cleaning</li>
                <li>Window cleaning inside & out</li>
                <li>Full detail packages available</li>
              </ul>
              <Pricing>Call for Quote</Pricing>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <WhyUsSection id="why-us">
        <Container>
          <SectionTitle>Why Choose Us</SectionTitle>
          <BenefitsGrid>
            <Benefit>
              <h3>Save Time</h3>
              <p>No waiting rooms. Keep doing what you're doing while we take care of your car.</p>
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

      <ContactSection id="contact">
        <Container>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactContent>
            <ContactInfo>
              <ServiceArea>Serving the Greater Charlotte Area</ServiceArea>
              <Phone>
                <span>Call or Text:</span>
                <a href="tel:2019930466">(201) 993-0466</a>
              </Phone>
              <ButtonGroup>
                <BtnPrimary href="tel:2019930466">Call to Schedule</BtnPrimary>
                <BtnPrimary href="mailto:cltmobilecarcare@gmail.com">Email to Schedule</BtnPrimary>
              </ButtonGroup>
            </ContactInfo>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Service(s) Needed *</FormLabel>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    border: formData.services.includes('Oil Change') ? '2px solid #6b21a8' : '1px solid #d1d5db',
                    borderRadius: 8,
                    cursor: 'pointer',
                    background: formData.services.includes('Oil Change') ? '#f3e8ff' : '#fff',
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.services.includes('Oil Change')}
                      onChange={() => toggleService('Oil Change')}
                      style={{ width: 18, height: 18, accentColor: '#6b21a8' }}
                    />
                    Oil Change
                  </label>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    border: formData.services.includes('Car Detailing') ? '2px solid #6b21a8' : '1px solid #d1d5db',
                    borderRadius: 8,
                    cursor: 'pointer',
                    background: formData.services.includes('Car Detailing') ? '#f3e8ff' : '#fff',
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.services.includes('Car Detailing')}
                      onChange={() => toggleService('Car Detailing')}
                      style={{ width: 18, height: 18, accentColor: '#6b21a8' }}
                    />
                    Car Detailing
                  </label>
                </div>
                {serviceError && <p style={{ color: '#dc2626', marginTop: '0.5rem', fontSize: '0.875rem' }}>Please select at least one service</p>}
              </FormGroup>
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Car Info</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Year, Make, Model (e.g. 2020 Honda Civic)"
                  value={formData.carInfo}
                  onChange={(e) => setFormData({ ...formData, carInfo: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Notes</FormLabel>
                <FormTextarea
                  placeholder="Any additional details or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </FormGroup>
              <SubmitButton type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Request'}
              </SubmitButton>
              {status === 'success' && <p style={{ color: '#0d9488', marginTop: '0.5rem' }}>Message sent successfully!</p>}
              {status === 'error' && <p style={{ color: '#dc2626', marginTop: '0.5rem' }}>Failed to send. Please try again.</p>}
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
  );
};

export default App;
