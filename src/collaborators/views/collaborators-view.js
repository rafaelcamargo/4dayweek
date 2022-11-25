import './collaborators-view.styl';
import { Col, Row } from '@glorious/taslonic/react';
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
        <Row>
          <Col>
            <p>
              {description}
            </p>
          </Col>
        </Row>
        <Row offsetXs="4">
          <Col>
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
          </Col>
        </Row>
      </View>
    </div>
  );
};

function getCollaborators(){
  return [
    { name: 'André Pereira' },
    { name: 'Lucas Cunha', link: 'https://thegamingpub.com/' }
  ];
}

function handleCollboratorLink(link){
  return link && <Link href={link} external>Learn more →</Link>;
}
