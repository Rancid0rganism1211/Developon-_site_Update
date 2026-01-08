import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Development Solutions",
    desc: "Custom websites, ecommerce, CMS, and optimization."
  },
  {
    title: "Cloud Solutions",
    desc: "Cloud setup, backups, deployments, and migrations."
  },
  {
    title: "Affiliate Network Setup",
    desc: "Tracking systems, commissions, analytics, and API integrations."
  },
  {
    title: "Application Software & Systems",
    desc: "Biometric systems, inventory tools, CRM, POS systems."
  },
  {
    title: "Hardware & OS Solutions",
    desc: "Hardware setup, networking, OS configuration, and peripherals."
  }
];

const ServicesSection = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Card animation variants (fade-up effect)
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom easing curve
      }
    }
  };

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <motion.div
          style={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h1 style={styles.title}>Our Services</h1>
          <p style={styles.tagline}>
            Comprehensive technology solutions tailored to elevate your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                transition: { duration: 0.3 }
              }}
            >
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDesc}>{service.desc}</p>
              <motion.a
                href="#"
                style={styles.link}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Inline styles matching modern agency design
const styles = {
  section: {
    padding: '100px 24px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: '16px',
    letterSpacing: '-0.5px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  tagline: {
    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
    gap: '32px'
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '40px 32px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease'
  },
  serviceTitle: {
    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '16px',
    lineHeight: '1.3',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  serviceDesc: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  link: {
    display: 'inline-block',
    color: '#ED4447FF',
    fontWeight: '500',
    fontSize: '0.9375rem',
    textDecoration: 'none',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    cursor: 'pointer'
  }
};

export default ServicesSection;
