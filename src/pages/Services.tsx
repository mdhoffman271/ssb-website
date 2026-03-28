import { NavLink } from 'react-router-dom';

function Services() {
  return (
    <main className='column'>
      <h1>Services</h1>
      <h2>Counseling</h2>
      <h3>Individual Counseling &ndash; $130</h3>
      <p>This can range from traditional talk therapy to tailored therapies, including Cognitive Behavior Therapy, Dialectical Behavior Therapy, Internal Family Systems, Acceptance Commitment Therapy, and more!</p>
      <p>I offer sliding scale rates for those in need. <em>I am currently in the process of getting credentialed with various insurance companies.</em> Please <NavLink to='/contact'>contact me</NavLink> for more information!</p>
      <h2>Specialties</h2>
      <ul>
        <li>Eating disorders</li>
        <li>Body image concerns</li>
        <li>Depression</li>
        <li>Anxiety</li>
        <li>Life Transitions</li>
        <li>Self-Harming</li>
        <li>Self-esteem struggles</li>
      </ul>
    </main>

  );
}

export default Services;
