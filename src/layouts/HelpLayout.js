import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">

    <h2>Website Help</h2>
    <p>Welcome to MManga Haven's Help Center! We're dedicated to providing you with exceptional support and guidance throughout your journey within our manga universe. This Help Center is your compass, designed to navigate you through any questions or concerns you may encounter while exploring our store.</p>

    <p>Whether you're seeking information about our diverse manga collection, assistance with orders, or clarifications about our policies, this hub is tailored to address your needs comprehensively. We've curated a compilation of frequently asked questions and detailed guides to ensure quick and effective solutions.</p>

    <p>Your time matters to us, so we've crafted this resource to empower you with the knowledge and tools needed to immerse yourself in the captivating world of MManga Haven seamlessly. If you can't find what you're looking for here, our dedicated customer support team is readily available to offer personalized assistance.</p>
    
    <p>Thank you for choosing MManga Haven. Let's embark on this adventure together and make your MManga Haven experience extraordinary!</p>
    
    <nav>
      <NavLink to="faq">View the FAQ</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
    </nav>

    <Outlet />
  </div>
  );
}

export default HelpLayout;