import './link.styl';

export const Link = ({ children, external, ...rest }) => {
  return (
    <a
      className="fwd-link"
      {...buildRelAttr(external)}
      {...rest}
    >
      {children}
    </a>
  );
};

function buildRelAttr(external){
  if(external) return { rel: 'noopener noreferrer nofollow', target: '_blank' };
}
