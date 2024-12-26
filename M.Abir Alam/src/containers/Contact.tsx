import { Button, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { contactSection } from '../utils/portfolio';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;

  return (
    <Wrapper
      id="contact"
      className="max-w-2xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      {/* Subtitle */}
      <p className="text-accent text-sm uppercase mb-3 font-mono tracking-wide">
        {subtitle}
      </p>

      {/* Title */}
      <h2 className="heading-secondary text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        {title}
      </h2>

      {/* Paragraphs */}
      <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <Button
        type="link"
        size="lg"
        href={link}
        center
        className="mt-10 px-8 py-4 bg-accent text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:ring-2 focus:ring-accent focus:ring-opacity-50"
      >
        Let's Connect
      </Button>
    </Wrapper>
  );
};

export default Contact;
