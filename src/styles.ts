import { styled } from '@mui/material/styles';

export const GlobalStyles = styled('style')`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body, #root {
    scroll-behavior: smooth;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Root = styled('div')({
  fontFamily: "'Inter', -apple-system, sans-serif",
  background: 'linear-gradient(180deg, #f3e8ff 0%, #faf5ff 50%, #ffffff 100%)',
  color: '#1f2937',
  minHeight: '100vh',
  width: '100%',
  overflowX: 'hidden',
});

export const Nav = styled('nav')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  zIndex: 100,
});

export const NavContainer = styled('div')({
  maxWidth: 1100,
  margin: '0 auto',
  padding: '1rem 1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Logo = styled('div')({
  fontWeight: 700,
  fontSize: '1.125rem',
  color: '#6b21a8',
});

export const NavLinks = styled('div')({
  display: 'flex',
  gap: '2rem',
  '& a': {
    color: '#4b5563',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
    '&:hover': {
      color: '#6b21a8',
    },
  },
  '@media (max-width: 480px)': {
    gap: '1rem',
    '& a': {
      fontSize: '0.85rem',
    },
  },
});

export const Hero = styled('section')({
  padding: '8rem 1.5rem 5rem',
  textAlign: 'center',
});

export const HeroContent = styled('div')({
  maxWidth: 600,
  margin: '0 auto',
  '& h1': {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: '1rem',
  },
  '& p': {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '2rem',
  },
});

export const ButtonGroup = styled('div')({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const BtnPrimary = styled('a')({
  display: 'inline-block',
  padding: '0.875rem 2rem',
  background: '#6b21a8',
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 600,
  borderRadius: 8,
  '&:hover': {
    background: '#581c87',
  },
});

export const BtnSecondary = styled('a')({
  display: 'inline-block',
  padding: '0.875rem 2rem',
  background: 'transparent',
  color: '#6b21a8',
  textDecoration: 'none',
  fontWeight: 600,
  borderRadius: 8,
  border: '2px solid #6b21a8',
  '&:hover': {
    background: '#f3e8ff',
  },
});

export const Container = styled('div')({
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 1.5rem',
});

export const ServicesSection = styled('section')({
});

export const SectionTitle = styled('h2')({
  textAlign: 'center',
  fontSize: '1.75rem',
  fontWeight: 700,
  marginBottom: '2.5rem',
  color: '#1f2937',
});

export const ServicesGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  alignItems: 'start',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

export const ServiceCard = styled('div')({
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: 12,
  border: '1px solid #e5e7eb',
  overflow: 'hidden',
  height: 'fit-content',
});

export const ServiceCardHeader = styled('button')({
  width: '100%',
  padding: '1.5rem 2rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  '& h3': {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#1f2937',
    margin: 0,
  },
  '&:hover': {
    background: '#f3f4f6',
  },
});

export const ExpandButton = styled('span')<{ $expanded: boolean }>(({ $expanded }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
  borderRadius: '50%',
  background: '#6b21a8',
  color: '#ffffff',
  fontSize: '1.25rem',
  fontWeight: 500,
  transition: 'transform 0.2s ease',
  transform: $expanded ? 'rotate(45deg)' : 'rotate(0deg)',
}));

export const ServiceCardContent = styled('div')<{ $expanded: boolean }>(({ $expanded }) => ({
  padding: $expanded ? '0 2rem 2rem' : '0 2rem',
  maxHeight: $expanded ? 500 : 0,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  opacity: $expanded ? 1 : 0,
  '& ul': {
    listStyle: 'none',
    marginBottom: '1.5rem',
  },
  '& li': {
    padding: '0.5rem 0',
    paddingLeft: '1.5rem',
    position: 'relative',
    color: '#4b5563',
    '&::before': {
      content: '"✓"',
      position: 'absolute',
      left: 0,
      color: '#0d9488',
      fontWeight: 600,
    },
  },
}));

export const Pricing = styled('p')({
  fontWeight: 600,
  color: '#6b21a8',
  fontSize: '1.1rem',
});

export const WhyUsSection = styled('section')({
  padding: '5rem 0',
});

export const BenefitsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
});

export const Benefit = styled('div')({
  padding: '1.5rem',
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: 10,
  border: '1px solid #e5e7eb',
  '& h3': {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#1f2937',
  },
  '& p': {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
});

export const HowItWorksSection = styled('section')({
  padding: '5rem 0',
});

export const Steps = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.5rem',
});

export const Step = styled('div')({
  textAlign: 'center',
  '& h3': {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
    color: '#1f2937',
  },
  '& p': {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
});

export const StepNumber = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  background: '#6b21a8',
  color: '#ffffff',
  borderRadius: '50%',
  fontWeight: 700,
  fontSize: '1.125rem',
  marginBottom: '1rem',
});

export const ContactSection = styled('section')({
  padding: '5rem 0',
});

export const ContactContent = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '3rem',
  alignItems: 'start',
  maxWidth: 900,
  margin: '0 auto',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

export const ContactInfo = styled('div')({
  textAlign: 'center',
});

export const ServiceArea = styled('p')({
  fontWeight: 600,
  color: '#1f2937',
  marginBottom: '0.25rem',
});

export const Hours = styled('p')({
  color: '#6b7280',
  marginBottom: '1.5rem',
});

export const Phone = styled('div')({
  marginBottom: '1.5rem',
  '& span': {
    display: 'block',
    color: '#6b7280',
    fontSize: '0.9rem',
    marginBottom: '0.25rem',
  },
  '& a': {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#6b21a8',
    textDecoration: 'none',
  },
});

export const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2rem',
  borderRadius: 12,
  border: '1px solid #e5e7eb',
});

export const FormGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const FormLabel = styled('label')({
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#374151',
});

export const FormInput = styled('input')({
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  border: '1px solid #d1d5db',
  borderRadius: 8,
  outline: 'none',
  transition: 'border-color 0.2s',
  '&:focus': {
    borderColor: '#6b21a8',
  },
});

export const FormTextarea = styled('textarea')({
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  border: '1px solid #d1d5db',
  borderRadius: 8,
  outline: 'none',
  resize: 'vertical',
  minHeight: 100,
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
  '&:focus': {
    borderColor: '#6b21a8',
  },
});

export const SubmitButton = styled('button')({
  padding: '0.875rem 2rem',
  background: '#6b21a8',
  color: '#ffffff',
  border: 'none',
  fontWeight: 600,
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background 0.2s',
  '&:hover': {
    background: '#581c87',
  },
});

export const Footer = styled('footer')({
  padding: '2rem 1.5rem',
  textAlign: 'center',
  borderTop: '1px solid #e5e7eb',
  '& p': {
    color: '#9ca3af',
    fontSize: '0.875rem',
  },
});

export const ServiceCheckboxGroup = styled('div')({
  display: 'flex',
  gap: '0.5rem'
});

export const ServiceCheckboxLabel = styled('label')<{ $selected: boolean }>(({ $selected }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.5rem 0.75rem',
  border: $selected ? '2px solid #6b21a8' : '1px solid #d1d5db',
  borderRadius: 8,
  cursor: 'pointer',
  background: $selected ? '#f3e8ff' : '#fff',
  fontSize: '0.875rem',
}));

export const ServiceCheckbox = styled('input')({
  width: 16,
  height: 16,
  accentColor: '#6b21a8',
});

export const ErrorText = styled('p')({
  color: '#dc2626',
  marginTop: '0.5rem',
  fontSize: '0.875rem',
});

export const SuccessText = styled('p')({
  color: '#0d9488',
  marginTop: '0.5rem',
});
