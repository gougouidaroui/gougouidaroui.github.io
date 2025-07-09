import { useState, useEffect } from 'react';
import './App.css';

function App() {
    interface FormData {
        name: string;
        email: string;
        subject: string;
        message: string;
    }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
    function handleField(field:string) {
        if (field === "name"){
        return formData.name
        }
        else if (field === "email"){
        return formData.email}
        else if (field === "subject"){
        return formData.subject}
        else if (field === "message"){
        return formData.message}
        else {
            console.log("Form wrong");
        }

    }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! (Add your form handling logic here)');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const scrollToSection = (sectionId:any) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">DEV</span>
          <div className="logo-glitch"></div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
        </ul>
        <div
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div
          className="hero-background"
          style={{ transform: `translateY(${scrollY * -0.5}px)` }}
        >
          <div className="hero-grid"></div>
          <div className="hero-particles">
            {[0.5, 0.8, 1.2, 0.3, 0.9, 0.6, 0.7, 1.1, 0.4].map((speed, index) => (
              <div
                key={index}
                className="particle"
                data-speed={speed}
                style={{ '--speed': speed }}
              ></div>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Full Stack</span>
              <span className="title-line">Developer</span>
            </h1>
            <p className="hero-subtitle">
              <span className="subtitle-word">Creating</span>
              <span className="subtitle-word">Digital</span>
              <span className="subtitle-word">Experiences</span>
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Passion</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <div className="window-title">portfolio.js</div>
              </div>
              <div className="code-content">
                <pre className="code-block">
<span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
  <span className="code-property">name</span>: <span className="code-string">'Mohammed Boukharta'</span>,
  <span className="code-property">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'MongoDB'</span>],
  <span className="code-property">passion</span>: <span className="code-string">'Building the future'</span>,
  <span className="code-property">status</span>: <span className="code-string">'Available for hire'</span>
{'}'};
                </pre>
              </div>
            </div>
            <div className="floating-elements">
              {[
                { symbol: '{ }', float: 1 },
                { symbol: '</ >', float: 2 },
                { symbol: '( )', float: 3 },
                { symbol: '[ ]', float: 4 },
                { symbol: '=>', float: 5 },
                { symbol: '&&', float: 6 }
              ].map((item, index) => (
                <div
                  key={index}
                  className="float-item"
                  data-float={item.float}
                  style={{ '--float': item.float }}
                >
                  {item.symbol}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <p className="lead-text">I'm a passionate full-stack developer who loves creating innovative digital solutions.</p>
              <p>With expertise in both frontend and backend technologies, I build scalable applications that deliver exceptional user experiences. My journey in web development started with curiosity and has evolved into a deep passion for crafting clean, efficient code.</p>
              <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
            </div>
            <div className="about-highlights">
              {[
                { icon: '🚀', text: 'Performance Optimization' },
                { icon: '🎨', text: 'UI/UX Design' },
                { icon: '⚡', text: 'Modern Frameworks' },
                { icon: '🔧', text: 'DevOps & Deployment' }
              ].map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-icon">{highlight.icon}</span>
                  <span className="highlight-text">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="profile-card">
              <div className="card-glow"></div>
              <div className="profile-image">
                <img src="https://via.placeholder.com/300x300/6366f1/ffffff?text=Your+Photo" alt="Profile Picture" />
                <div className="image-overlay"></div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">Mohammed Boukharta</h3>
                <p className="profile-title">Full Stack Developer</p>
                <div className="profile-location">
                  <span className="location-icon">📍</span>
                  <span>Rabat, Morroco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {[
            {
              category: 'Frontend',
              skills: [
                { name: 'React', icon: '⚛️', level: 95 },
                { name: 'JavaScript', icon: '🟨', level: 90 },
                { name: 'CSS3', icon: '🎨', level: 85 },
                { name: 'TypeScript', icon: '🔷', level: 80 }
              ]
            },
            {
              category: 'Backend',
              skills: [
                { name: 'Node.js', icon: '🟢', level: 88 },
                { name: 'Python', icon: '🐍', level: 85 },
                { name: 'Express.js', icon: '🚀', level: 82 },
                { name: 'Firebase', icon: '🔥', level: 78 }
              ]
            },
            {
              category: 'Database',
              skills: [
                { name: 'MongoDB', icon: '🍃', level: 90 },
                { name: 'PostgreSQL', icon: '🐘', level: 85 },
                { name: 'MySQL', icon: '🗄️', level: 80 }
              ]
            },
            {
              category: 'Tools',
              skills: [
                { name: 'Git', icon: '🐙', level: 92 },
                { name: 'Docker', icon: '🐳', level: 88 },
                { name: 'AWS', icon: '☁️', level: 85 }
              ]
            }
          ].map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    data-level={skill.level}
                    style={{ '--level': skill.level }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          data-width={skill.level}
                          style={{ '--width': `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {[
            {
              id: 1,
              title: 'E-Commerce Platform',
              description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.',
              image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Project+1',
              tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
              demo: '#',
              github: '#'
            },
            {
              id: 2,
              title: 'Task Management App',
              description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
              image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Project+2',
              tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
              demo: '#',
              github: '#'
            },
            {
              id: 3,
              title: 'Weather Dashboard',
              description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with modern web technologies.',
              image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Project+3',
              tech: ['Vue.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
              demo: '#',
              github: '#'
            }
          ].map((project) => (
            <div key={project.id} className="project-card" data-project={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demo} className="project-link">Live Demo</a>
                    <a href={project.github} className="project-link">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Let's work together</h3>
            <p className="contact-text">I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>
            <div className="contact-items">
              {[
                { icon: '📧', label: 'Email', value: 'bbabrehamza@gmail.com', href: 'mailto:bbabrehamza@gmail.com' },
                { icon: '📱', label: 'Phone', value: '+212605265768', href: 'tel:+212605265768' },
                { icon: '📍', label: 'Location', value: 'Rabat, Morroco', href: null }
              ].map((contact, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}</span>
                    {contact.href ? (
                      <a href={contact.href} className="contact-value">{contact.value}</a>
                    ) : (
                      <span className="contact-value">{contact.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              {['GitHub', 'LinkedIn', 'Twitter', 'Portfolio'].map((social, index) => (
                <a key={index} href="#" className="social-link">{social}</a>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <div className="form-container">
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' }
              ].map((field, index) => (
                <div key={index} className="form-group">
                  <label htmlFor={field.name} className="form-label">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="form-input"
                    value={handleField(field.name)}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="input-highlight"></div>
                </div>
              ))}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <div className="input-highlight"></div>
              </div>
              <button type="button" className="submit-button" onClick={handleSubmit}>
                <span className="button-text">Send Message</span>
                <div className="button-effect"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 Mohammed Boukharta. Crafted with passion and code.</p>
          </div>
          <div className="footer-links">
            {['Privacy', 'Terms', 'Resume'].map((link, index) => (
              <a key={index} href="#" className="footer-link">{link}</a>
            ))}
          </div>
        </div>
        <div className="footer-decoration"></div>
      </footer>
    </div>
  );
}

export default App;
