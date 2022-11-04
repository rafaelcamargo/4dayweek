import './blockquote.styl';

export const Blockquote = ({ caption, cite, children }) => {
  return (
    <figure className="fdw-blockquote-wrapper">
      <blockquote className="fdw-blockquote" {...buildCite(cite)}>
        {children}
      </blockquote>
      <figcaption className="fdw-blockquote-caption">{caption}</figcaption>
    </figure>
  );
};

function buildCite(cite){
  if(cite) return { cite };
}
