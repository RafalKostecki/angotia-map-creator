import React from 'react';

//Import other components
import FullScreenOption from '../options/FullScreenOption';
import LinkButton from '../LinkButton';

//Import contexts
import { ContentContext } from '../../../Template';


const CharPanel: React.FC = () => {
  return (
    <ContentContext.Consumer>
      {({ char, routes }) => (
         <nav className="optionsPanel">
          <header className="optionsPanel__title">
            <span> AMC </span>
          </header>
          <ul className="optionsPanel__options">
            <li>
              <LinkButton link='/' buttonText={char.panel.comeBack} />
            </li>
            <li>
              <LinkButton link={routes.help} buttonText={char.panel.help} />
            </li>
            <li>
              <LinkButton link={routes.license} buttonText={char.panel.license} />
            </li>
            <li>
              <FullScreenOption />
            </li>
          </ul>
        </nav>
      )}
    </ContentContext.Consumer>
  );
};


export default CharPanel;