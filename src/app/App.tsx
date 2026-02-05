import { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Users, 
  Clock,
  HardHat,
  Home,
  Warehouse,
  Hammer,
  Menu,
  X
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Building2 className="size-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">BuildPro</div>
                <div className="text-xs text-gray-600">Construction Excellence</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors py-2">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1664976706112-864d7a38e12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NzEyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Your Dreams Into Reality
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              With over 25 years of experience, we deliver exceptional construction services for residential, commercial, and industrial projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Get a Free Quote
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors font-medium border border-white/30"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-orange-100">Expert Team</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-600 font-semibold mb-2">ABOUT US</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Construction Company Since 1999
              </h2>
              <p className="text-gray-700 mb-6">
                BuildPro Construction has been at the forefront of the construction industry for over two decades. We specialize in creating exceptional structures that stand the test of time while maintaining the highest standards of quality and safety.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced professionals brings expertise in residential, commercial, and industrial construction. We pride ourselves on delivering projects on time, within budget, and exceeding expectations.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Licensed & Insured</div>
                    <div className="text-gray-600 text-sm">Fully certified with comprehensive insurance coverage</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Quality Guaranteed</div>
                    <div className="text-gray-600 text-sm">Using premium materials and proven construction methods</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Expert Team</div>
                    <div className="text-gray-600 text-sm">Skilled professionals with decades of combined experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680281724146-b11cba719eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk4MTM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction worker"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Award className="size-8 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Award Winner</div>
                    <div className="text-gray-600">Excellence in Construction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-orange-600 font-semibold mb-2">OUR SERVICES</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a full range of construction services tailored to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Home className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Construction</h3>
              <p className="text-gray-600 mb-4">
                Custom homes, renovations, and additions built to your exact specifications with attention to every detail.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Custom Home Building
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Home Renovations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Kitchen & Bathroom Remodeling
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Warehouse className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Construction</h3>
              <p className="text-gray-600 mb-4">
                Office buildings, retail spaces, and commercial facilities designed for functionality and aesthetics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Office Buildings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Retail Spaces
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Restaurant Construction
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Hammer className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Renovation & Remodeling</h3>
              <p className="text-gray-600 mb-4">
                Transform your existing space with our expert renovation and remodeling services for homes and businesses.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Interior Renovations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Exterior Upgrades
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-orange-600" />
                  Historic Restoration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-orange-600 font-semibold mb-2">OUR PORTFOLIO</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest completed projects showcasing our commitment to quality and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk4MTM1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern residential home"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">RESIDENTIAL</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Family Home</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A stunning 4,500 sq ft contemporary home featuring open floor plans and sustainable materials.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📍 Los Angeles, CA</span>
                  <span>📅 2025</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704297275778-8763889fa47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY5NzMzMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Commercial building"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">COMMERCIAL</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Downtown Office Complex</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A 12-story modern office building with state-of-the-art facilities and energy-efficient systems.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📍 San Francisco, CA</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1711296168555-ea2526321306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5ODEzNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Interior renovation"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">RENOVATION</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Historic Home Restoration</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete renovation of a 1920s Victorian home, preserving original character while adding modern amenities.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📍 Portland, OR</span>
                  <span>📅 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-orange-600 font-semibold mb-2">WHY CHOOSE US</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="size-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">
                Rigorous safety protocols on every job site ensuring worker and client safety
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="size-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600 text-sm">
                98% of our projects completed on or ahead of schedule
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="size-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Work</h3>
              <p className="text-gray-600 text-sm">
                Premium materials and craftsmanship backed by comprehensive warranties
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="size-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Licensed professionals with specialized expertise in all construction areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-orange-600 font-semibold mb-2">TESTIMONIALS</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6">
                "BuildPro exceeded our expectations in every way. They completed our home renovation on time and the quality of work was outstanding. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Davis</div>
                  <div className="text-sm text-gray-600">Homeowner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6">
                "Professional, reliable, and skilled. They built our office complex with minimal disruption to our business operations. A true partner in construction."
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Martinez</div>
                  <div className="text-sm text-gray-600">Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6">
                "From the initial consultation to final walkthrough, BuildPro demonstrated professionalism and expertise. Our dream home became a reality!"
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  RJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Robert Johnson</div>
                  <div className="text-sm text-gray-600">Homeowner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
              <p className="text-orange-100 mb-8">
                Ready to start your construction project? Get in touch with us today for a free consultation and quote.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="size-6" />
                  </div>
                  <div>
                    <div className="text-sm text-orange-200">Call Us</div>
                    <div className="font-semibold">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="size-6" />
                  </div>
                  <div>
                    <div className="text-sm text-orange-200">Email Us</div>
                    <div className="font-semibold">info@buildpro.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <div className="text-sm text-orange-200">Visit Us</div>
                    <div className="font-semibold">123 Construction Ave, Suite 100<br />San Francisco, CA 94102</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-sm text-orange-200 mb-2">Business Hours</div>
                <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                <div>Saturday: 8:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900">
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Renovation & Remodeling</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Building2 className="size-5 text-white" />
                </div>
                <div className="font-bold text-xl text-white">BuildPro</div>
              </div>
              <p className="text-sm">
                Building excellence since 1999. Your trusted partner in construction.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-600 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-600 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-orange-600 transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-600 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Residential Construction</li>
                <li>Commercial Buildings</li>
                <li>Renovation Services</li>
                <li>Project Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li>(555) 123-4567</li>
                <li>info@buildpro.com</li>
                <li>123 Construction Ave<br />San Francisco, CA 94102</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 BuildPro Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
