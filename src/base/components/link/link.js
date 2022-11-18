import './link.styl';
import { Link as RouterLink } from 'react-router-dom';

export const Link = ({ children, to, external, ...rest }) => {
  const Component = to ? RouterLink : Anchor;
  return (
    <Component {...buildProps({ to, external, ...rest })}>
      {children}
    </Component>
  );
};

function Anchor({ children, ...rest }){
  return <a {...rest}>{children}</a>;
}

function buildProps({ to, external, ...rest }){
  const baseProps = { className: 'fwd-link', ...rest };
  return to ? { ...baseProps, to } : { ...baseProps, ...buildRelAttr(external) };
}

function buildRelAttr(external){
  if(external) return { rel: 'noopener noreferrer nofollow', target: '_blank' };
}
