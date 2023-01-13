import './collaborators-view.styl';
import { Link } from '@src/base/components/link/link';
import { View } from '@src/base/components/view/view';

export const CollaboratorsView = () => {
  const description = 'Here are all the people who have been collaborating with this project.';
  return (
    <div className="fdw-collaborators-view">
      <View
        heading="Collaborators"
        description={description}
        keywords="four-day week, collaborators"
      >
        <p>
          {description}
        </p>
        <ul className="fdw-collaborators-view-list">
          {
            getCollaborators().map(({ name, link }, index) => (
              <li key={index}>
                <span>{name}</span>
                {handleCollboratorLink(link)}
              </li>
            ))
          }
        </ul>
      </View>
    </div>
  );
};

function getCollaborators(){
  return [
    { name: 'Andre Pereira' },
    { name: 'André Piske' },
    { name: 'Chaman Sharma', link: 'https://www.linkedin.com/in/ux4web' },
    { name: 'Lucas Cunha', link: 'https://thegamingpub.com/' },
    { name: 'Sabrina Freifeld', link: 'https://www.linkedin.com/in/sabrinafreifeld/' }
  ];
}

function handleCollboratorLink(link){
  return link && <Link href={link} external>Learn more →</Link>;
}
