import { useState } from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import {
  ArrowRight, Menu, X, Users, Compass, Handshake, CalendarDays, MessageCircle,
  GraduationCap, ShieldCheck, Sparkles, Check, ChevronDown, Mail, MapPin, Phone,
  Linkedin, Instagram, Github, Star, Target, HeartHandshake, BriefcaseBusiness
} from 'lucide-react'
import { features, circles, faqs } from './data'

const iconMap = { users: Users, compass: Compass, handshake: Handshake, calendar: CalendarDays, messages: MessageCircle, graduation: GraduationCap }

function Logo() {
  return <Link to="/" className="brand" aria-label="MYCircle home"><span className="brand-mark">M</span><span>MY<span className="gold">Circle</span></span></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="header">
    <div className="container nav-wrap">
      <Logo />
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <a href="/#about" onClick={close}>About</a>
        <a href="/#features" onClick={close}>Features</a>
        <a href="/#circles" onClick={close}>Circles</a>
        <a href="/#how-it-works" onClick={close}>How it works</a>
        <a href="/#contact" onClick={close}>Contact</a>
        <div className="nav-actions"><Link className="login-link" to="/login" onClick={close}>Log in</Link><Link className="btn btn-small" to="/signup" onClick={close}>Join MYCircle <ArrowRight size={15}/></Link></div>
      </nav>
    </div>
  </header>
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Logo/><p className="footer-about">A place to find your people, exchange ideas and grow through meaningful professional connections.</p><div className="socials"><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={17}/></a><a href="https://github.com" aria-label="GitHub"><Github size={17}/></a></div></div>
      <div><h4>Explore</h4><a href="/#about">About MYCircle</a><a href="/#features">Features</a><a href="/#circles">Professional circles</a><a href="/#how-it-works">How it works</a></div>
      <div><h4>Get started</h4><Link to="/signup">Create an account</Link><Link to="/login">Log in</Link><a href="/#faq">FAQs</a><a href="/#contact">Contact</a></div>
      <div><h4>Our promise</h4><p className="footer-small">Real connections. Useful conversations. Shared growth.</p><span className="footer-note"><ShieldCheck size={15}/> Built around trust and respect</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} MYCircle. All rights reserved.</span><span>Find your people. Grow together.</span></div>
  </footer>
}

function SectionHeading({eyebrow, title, text, center=true}) {
  return <div className={`section-heading ${center ? 'center' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function Home() {
  const [activeFaq, setActiveFaq] = useState(0)
  return <>
    <section className="hero">
      <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill"><Sparkles size={14}/> A new way to grow together</div>
          <h1>Your people.<br/><span>Your circle.</span><br/>Your next chapter.</h1>
          <p className="hero-lead">Find like-minded professionals, build meaningful connections and learn from people who understand your journey.</p>
          <div className="hero-actions"><Link to="/signup" className="btn">Find your circle <ArrowRight size={17}/></Link><a className="text-link" href="#how-it-works">See how it works <ArrowRight size={16}/></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>R</span><span>A</span><span>S</span><span>+</span></div><div><strong>Better connections start with shared goals.</strong><small>Designed for people who want to keep growing.</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
          <div className="visual-center"><div className="visual-logo">M</div><strong>MYCircle</strong><small>Grow together</small></div>
          <div className="float-card card-top"><span className="float-icon purple"><BriefcaseBusiness size={18}/></span><div><b>Founders Circle</b><small>Ideas become stronger together</small></div><span className="online-dot"></span></div>
          <div className="float-card card-left"><span className="float-icon gold-bg"><GraduationCap size={18}/></span><div><b>Mentorship</b><small>Learn from experience</small></div></div>
          <div className="float-card card-right"><span className="float-icon blue"><Users size={18}/></span><div><b>Like-minded people</b><small>Find your community</small></div></div>
          <div className="visual-caption"><Sparkles size={15}/> Connections with purpose</div>
        </div>
      </div>
      <div className="container hero-bottom"><span>FOR EVERY STAGE OF YOUR JOURNEY</span><div><b>Students</b><i>·</i><b>Professionals</b><i>·</i><b>Founders</b><i>·</i><b>Business owners</b><i>·</i><b>Mentors</b></div></div>
    </section>

    <section className="section about-section" id="about"><div className="container about-grid">
      <div className="about-art"><div className="about-card"><div className="mini-label">THE MYCIRCLE IDEA</div><div className="big-quote">“Growth feels different when you don't have to do it alone.”</div><div className="quote-line"></div><div className="quote-foot"><span className="quote-avatar">M</span><span><b>One circle can change your perspective.</b><small>Connect • Share • Grow</small></span></div></div><div className="sparkle s1">✦</div><div className="sparkle s2">✧</div></div>
      <div className="about-copy"><span className="eyebrow">WHY MYCIRCLE EXISTS</span><h2>Good people are everywhere. Finding your people shouldn't be hard.</h2><p>Sometimes you need someone in the same profession. Sometimes you need a mentor, a peer who understands your challenge, or a community that pushes you forward.</p><p>MYCircle is being built to make those connections easier to discover — around your profession, interests, current stage and goals.</p><div className="check-list"><span><Check/> Connect beyond your existing network</span><span><Check/> Learn through real experiences</span><span><Check/> Find conversations that move you forward</span></div><Link to="/signup" className="text-link">Become part of the idea <ArrowRight size={16}/></Link></div>
    </div></section>

    <section className="section features-section" id="features"><div className="container"><SectionHeading eyebrow="WHAT MYCIRCLE CAN OFFER" title="More than a connection request." text="A focused set of tools to help you discover, connect and grow with the right people."/><div className="feature-grid">{features.map((f,i)=>{const Icon=iconMap[f.icon];return <article className="feature-card" key={f.title}><div className={`feature-icon tone-${i%3}`}><Icon size={22}/></div><h3>{f.title}</h3><p>{f.text}</p><span className="feature-number">0{i+1}</span></article>})}</div></div></section>

    <section className="section circles-section" id="circles"><div className="container"><div className="split-heading"><SectionHeading center={false} eyebrow="FIND YOUR COMMUNITY" title="A circle for every kind of ambition." text="Explore communities around the work you do, the interests you share and the goals you are pursuing."/><Link to="/signup" className="text-link desktop-link">Explore circles <ArrowRight size={16}/></Link></div><div className="circle-grid">{circles.map((c,i)=><article className="circle-card" key={c.name}><div className="circle-top"><span className="circle-emoji">{c.emoji}</span><span className="tag">{c.tag}</span></div><h3>{c.name}</h3><p>{c.members}</p><Link to="/signup" aria-label={`Join ${c.name}`} className="circle-arrow"><ArrowRight size={17}/></Link></article>)}</div></div></section>

    <section className="section how-section" id="how-it-works"><div className="container"><SectionHeading eyebrow="SIMPLE BY DESIGN" title="Your next connection starts here." text="A simple journey from telling us about yourself to finding people worth learning from."/><div className="steps-grid"><div className="step"><span className="step-no">01</span><div className="step-icon"><Target/></div><h3>Tell us about you</h3><p>Share your profession, interests, current stage and what kind of connections you need.</p></div><div className="step-connector"></div><div className="step"><span className="step-no">02</span><div className="step-icon"><Compass/></div><h3>Discover your circle</h3><p>Explore relevant professional circles, peers, mentors and learning opportunities.</p></div><div className="step-connector"></div><div className="step"><span className="step-no">03</span><div className="step-icon"><HeartHandshake/></div><h3>Connect & grow</h3><p>Start conversations, schedule meaningful meetings and share what you learn.</p></div></div></div></section>

    <section className="section mentorship-section"><div className="container mentor-panel"><div className="mentor-copy"><span className="eyebrow">LEARN FROM EXPERIENCE</span><h2>Sometimes one conversation can give you a new direction.</h2><p>Discover experienced people who can share practical knowledge, offer a fresh perspective and help you think through your next step.</p><ul><li><Check/> One-to-one guidance conversations</li><li><Check/> Workshops and group learning</li><li><Check/> Clear details before any paid session</li></ul><Link to="/signup" className="btn btn-light">Discover mentorship <ArrowRight size={16}/></Link></div><div className="mentor-art"><div className="mentor-orb"><div className="mentor-person">✦</div></div><div className="mentor-note note-one"><Star size={15} fill="currentColor"/> Experience shared</div><div className="mentor-note note-two"><MessageCircle size={15}/> Ideas exchanged</div><div className="mentor-note note-three"><GraduationCap size={16}/> Keep learning</div></div></div></section>

    <section className="section values-section"><div className="container values-grid"><div><span className="eyebrow">OUR PRINCIPLES</span><h2>Useful connections.<br/><span className="gold">Respectful community.</span></h2><p>MYCircle is being shaped around quality of interaction, not just the number of connections.</p></div><div className="value-list"><div><ShieldCheck/><span><b>Trust & transparency</b><small>Clear profiles, respectful conduct and honest expectations.</small></span></div><div><Users/><span><b>Relevant communities</b><small>Help people find circles that match their goals and interests.</small></span></div><div><HeartHandshake/><span><b>Mutual growth</b><small>Make room for learning, sharing and helping one another.</small></span></div></div></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div><span className="eyebrow">GOOD QUESTIONS</span><h2>Things you may want to know.</h2><p>Still curious? Send us a message and tell us what you would like MYCircle to help you with.</p><a href="#contact" className="text-link">Talk to us <ArrowRight size={16}/></a></div><div className="faq-list">{faqs.map((f,i)=><div className={`faq-item ${activeFaq===i?'active':''}`} key={f.q}><button onClick={()=>setActiveFaq(activeFaq===i?-1:i)}><span>{f.q}</span><ChevronDown size={18}/></button>{activeFaq===i&&<p>{f.a}</p>}</div>)}</div></div></section>

    <section className="contact-section" id="contact"><div className="container contact-panel"><div><span className="eyebrow">LET'S BUILD BETTER CONNECTIONS</span><h2>Your next circle could start with a hello.</h2><p>Have a question, an idea or want to be part of the early community? We'd love to hear from you.</p></div><div className="contact-details"><a href="mailto:hello@mycircle.example"><Mail/> hello@mycircle.example</a><span><MapPin/> India</span><Link to="/signup" className="btn">Join the community <ArrowRight size={16}/></Link></div></div></section>
    <Footer/>
  </>
}

function AuthPage({mode}) {
  const isSignup = mode === 'signup'
  const [form,setForm] = useState({name:'',email:'',password:'',profession:'',goal:''})
  const [notice,setNotice] = useState('')
  const navigate = useNavigate()
  const update = (e)=>setForm({...form,[e.target.name]:e.target.value})
  const submit = (e)=>{e.preventDefault(); if(isSignup && (!form.name.trim()||!form.profession||!form.goal)){setNotice('Please complete all required fields.');return} setNotice('Demo only: your form is ready to connect to the MYCircle backend. No account has been created.')}
  return <div className="auth-page"><div className="auth-side"><Link to="/" className="auth-back">← Back to MYCircle</Link><div className="auth-side-content"><div className="auth-mark">M</div><span className="eyebrow">FIND YOUR PEOPLE</span><h1>{isSignup?'Your circle starts with you.':'Welcome back to your circle.'}</h1><p>{isSignup?'Tell us a little about yourself. Your next meaningful connection could be closer than you think.':'Continue discovering people, ideas and opportunities that help you grow.'}</p><div className="auth-side-quote">“Alone we can do so little; together we can do so much.”<small>— A reminder of what community makes possible</small></div></div><span className="auth-copyright">© {new Date().getFullYear()} MYCircle</span></div>
    <div className="auth-main"><div className="auth-form-wrap"><Logo/><div className="auth-heading"><span className="eyebrow">{isSignup?'CREATE YOUR ACCOUNT':'MEMBER ACCESS'}</span><h2>{isSignup?'Join MYCircle':'Log in'}</h2><p>{isSignup?'Start building your professional circle.':'Good to see you again. Enter your details.'}</p></div>
      <form onSubmit={submit} className="auth-form">
        {isSignup&&<label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your full name" required/></label>}
        <label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label>
        <label>Password<input type="password" name="password" value={form.password} onChange={update} placeholder="At least 8 characters" minLength="8" required/></label>
        {isSignup&&<><label>What best describes you?<select name="profession" value={form.profession} onChange={update} required><option value="">Select your current stage</option><option>Student</option><option>Working professional</option><option>Business owner</option><option>Founder / Entrepreneur</option><option>Freelancer</option><option>Mentor / Expert</option><option>Other</option></select></label><label>What connections are you looking for?<select name="goal" value={form.goal} onChange={update} required><option value="">Choose your main goal</option><option>Like-minded peers</option><option>A mentor or expert</option><option>Business connections</option><option>Career guidance</option><option>Learning circles and workshops</option><option>Share my experience and help others</option></select></label></>}
        <button className="btn auth-submit" type="submit">{isSignup?'Create demo account':'Continue'} <ArrowRight size={17}/></button>
        {notice&&<div className="form-notice" role="status">{notice}</div>}
      </form>
      <p className="auth-switch">{isSignup?'Already have an account?':'New to MYCircle?'} <Link to={isSignup?'/login':'/signup'}>{isSignup?'Log in':'Create an account'}</Link></p>
      <p className="auth-legal">By continuing, you agree to use MYCircle respectfully. Terms and privacy details will be added before public launch.</p>
    </div></div></div>
}

function NotFound(){return <div className="not-found"><Logo/><h1>Page not found</h1><p>That page doesn't exist.</p><Link className="btn" to="/">Back home</Link></div>}

export default function App() {
  return <Routes><Route path="/" element={<><Header/><Home/></>}/><Route path="/signup" element={<AuthPage mode="signup"/>}/><Route path="/login" element={<AuthPage mode="login"/>}/><Route path="*" element={<NotFound/>}/></Routes>
}
