# Service Detail Pages - Customization Guide

## Template: service-template.html

This is a reusable template that matches the design system from your main services section. Duplicate and customize for each service.

---

## How to Create a New Service Page

1. **Duplicate the template:**
   ```
   Copy: service-template.html
   Rename to: web-development.html (or cloud-solutions.html, etc.)
   ```

2. **Update the Hero Section:**
   - Line ~230: Change `<span class="service-category">` text
   - Line ~231: Update `<h1 class="hero-title">` with service name
   - Line ~232: Rewrite `<p class="hero-description">` intro paragraph
   - Line ~260-268: Replace illustration SVG (or keep as placeholder)

3. **Customize Features Grid:**
   - Lines ~280-320: Update 3 feature cards with relevant icons, titles, and descriptions
   - Use Remix Icons: https://remixicon.com/

4. **Update Bullet Point List:**
   - Lines ~330-345: Replace the 10 bullet points with specific features for that service
   - Keep the checkmark styling (it's automatic)

5. **Adjust CTA Section:**
   - Line ~355: Update CTA title if needed
   - Line ~356: Customize description

---

## Service-Specific Content Templates

### 1. Web Development Solutions (web-development.html)

**Hero:**
- Category: "WEB DEVELOPMENT"
- Title: "Web Development Solutions"
- Description: "Transform your digital presence with custom-built websites, powerful ecommerce platforms, and cutting-edge web applications."

**Features:**
- Responsive Design / Performance Optimization / Security First

**Bullet Points:**
- Custom website design and development
- Responsive and mobile-optimized layouts
- CMS integration (WordPress, Contentful, etc.)
- Ecommerce platforms (Shopify, WooCommerce)
- SEO optimization and performance tuning
- Progressive Web App development
- API development and integrations
- Website maintenance and support
- Analytics integration
- Accessibility compliance (WCAG)

---

### 2. Cloud Solutions (cloud-solutions.html)

**Hero:**
- Category: "CLOUD INFRASTRUCTURE"
- Title: "Cloud Solutions"
- Description: "Scale your infrastructure with enterprise-grade cloud services, automated deployments, and secure data management."

**Icon SVG:** (Replace illustration)
```svg
<svg class="illustration-icon" viewBox="0 0 24 24" fill="none">
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

**Features:**
- Cloud Migration / Auto-Scaling / Disaster Recovery

**Bullet Points:**
- Cloud infrastructure setup (AWS, Azure, GCP)
- Automated backup and disaster recovery systems
- CI/CD pipeline configuration
- Container orchestration (Docker, Kubernetes)
- Cloud storage and database management
- Load balancing and auto-scaling
- Cloud security and compliance
- Cloud cost optimization
- Serverless architecture implementation
- Monitoring and alerting systems

---

### 3. Affiliate Network Setup (affiliate-network.html)

**Hero:**
- Category: "AFFILIATE MARKETING"
- Title: "Affiliate Network Setup"
- Description: "Build and scale your affiliate program with advanced tracking, commission management, and real-time analytics."

**Icon SVG:**
```svg
<svg class="illustration-icon" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="5" cy="5" r="2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="19" cy="5" r="2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="5" cy="19" r="2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="19" cy="19" r="2" stroke="currentColor" stroke-width="1.5"/>
  <path d="M7 6L10 10M14 10L17 6M7 18L10 14M14 14L17 18" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

**Features:**
- Real-Time Tracking / Commission Management / Analytics Dashboard

**Bullet Points:**
- Custom affiliate tracking system development
- Multi-tier commission structure setup
- Real-time conversion tracking and attribution
- Affiliate portal and dashboard creation
- Payment automation and fraud detection
- API integrations with marketing platforms
- Coupon code and link generation systems
- Performance analytics and reporting tools
- Affiliate onboarding and management tools
- Mobile app integration for affiliates

---

### 4. Application Software & Systems (application-systems.html)

**Hero:**
- Category: "SOFTWARE SYSTEMS"
- Title: "Application Software & Systems"
- Description: "Streamline operations with custom business applications, inventory management, CRM, and enterprise software solutions."

**Icon SVG:**
```svg
<svg class="illustration-icon" viewBox="0 0 24 24" fill="none">
  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

**Features:**
- Custom Development / System Integration / Scalable Architecture

**Bullet Points:**
- Biometric authentication systems
- Inventory management software
- Point-of-sale (POS) system development
- Customer Relationship Management (CRM) solutions
- Enterprise Resource Planning (ERP) systems
- Workflow automation tools
- Document management systems
- Business intelligence and reporting tools
- Mobile app development (iOS/Android)
- Legacy system modernization

---

### 5. Hardware & OS Solutions (hardware-solutions.html)

**Hero:**
- Category: "HARDWARE & IT INFRASTRUCTURE"
- Title: "Hardware & OS Solutions"
- Description: "Complete IT infrastructure setup, hardware procurement, network configuration, and operating system management."

**Icon SVG:**
```svg
<svg class="illustration-icon" viewBox="0 0 24 24" fill="none">
  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
  <path d="M8 21H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M12 17V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

**Features:**
- Hardware Setup / Network Infrastructure / OS Configuration

**Bullet Points:**
- Hardware procurement and installation
- Server setup and configuration
- Network infrastructure design and implementation
- Operating system installation and optimization
- Peripheral device configuration
- Data center setup and management
- Network security implementation
- Virtualization and remote desktop solutions
- IT asset management
- Hardware maintenance and support contracts

---

## Design System Elements

### Colors
- Primary Gradient: `#667eea` → `#764ba2`
- Background: `#f5f7fa`
- Text Dark: `#1a1a2e`
- Text Light: `#64748b`

### Spacing
- Section padding: `80px 20px`
- Card padding: `32px - 48px`
- Gap between cards: `32px`

### Effects
- Card hover: `translateY(-4px)` + enhanced shadow
- Transitions: `0.3s ease`
- Border radius: `12px - 16px`

---

## File Naming Convention

- `web-development.html`
- `cloud-solutions.html`
- `affiliate-network.html`
- `application-systems.html`
- `hardware-solutions.html`

---

## Quick Edit Checklist

When creating a new service page from template:

- [ ] Update `<title>` tag
- [ ] Change service category badge
- [ ] Rewrite hero title and description
- [ ] Replace illustration SVG (optional)
- [ ] Update 3 feature cards
- [ ] Customize 10 bullet points
- [ ] Adjust CTA section text
- [ ] Test responsive layout
- [ ] Check all links work

---

## Preview Template

```bash
cd "c:\Users\prince\OneDrive\Attachments\Desktop\Studies\Work out\DPS_SITE_update\Developon-_site_Update\Developong Services"
python -m http.server 5500
```

Open: http://localhost:5500/service-template.html
