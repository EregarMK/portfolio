import { Project } from '../../assets/data';
import './itembox.css';

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  if (!href) return <div className="itembox-content-wrapper">{children}</div>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="itembox-content-wrapper"
    >
      {children}
    </a>
  );
};

const Itembox = ({
  description,
  imageName,
  link,
  project,
  stack,
  tasks,
}: Project) => {
  const isDesktop = window.innerWidth > 1201;
  const showOverlay = isDesktop && link;

  return (
    <div className="itembox-wrapper">
      <Link href={link}>
        <img
          className="itembox-image"
          src={
            new URL(
              `../../assets/images/${imageName}-mockup.jpg`,
              import.meta.url,
            ).href
          }
          alt={project}
        />
        <h2 className="itembox-title">{project}</h2>
        <p className="itembox-content">
          {description}
          {tasks && (
            <ul>
              {tasks.map((task, index) => (
                <li key={`${project}-${index}`}>{task}</li>
              ))}
            </ul>
          )}
          <span className="itembox-footer">
            <b>Stack:</b> {stack}
          </span>
        </p>
        {showOverlay && <div className="itembox-overlay">demo</div>}
      </Link>
    </div>
  );
};

export default Itembox;
