import React from 'react';
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
            <BtnPrimary href="mailto:contact@mobileautoservices.com">Email to Schedule</BtnPrimary>
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
              <Hours>Weekday Evenings & Weekends</Hours>
              <Phone>
                <span>Call or Text:</span>
                <a href="tel:2019930466">(201) 993-0466</a>
              </Phone>
              <ButtonGroup>
                <BtnPrimary href="tel:2019930466">Call to Schedule</BtnPrimary>
                <BtnPrimary href="mailto:yigiterenozgur@outlook.com">Email to Schedule</BtnPrimary>
              </ButtonGroup>
            </ContactInfo>
            <ContactForm>
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormInput type="text" placeholder="Your name" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput type="email" placeholder="your@email.com" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Car Info</FormLabel>
                <FormInput type="text" placeholder="Year, Make, Model (e.g. 2020 Honda Civic)" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Notes</FormLabel>
                <FormTextarea placeholder="Any additional details or questions..." />
              </FormGroup>
              <SubmitButton type="submit">Send Request</SubmitButton>
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
