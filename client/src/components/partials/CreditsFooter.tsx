import React, { useContext } from 'react';

//Import configs
import appConfig from '../../assets/configs/appConfig.json';

//Import contexts
import { ContentContext } from '../../Template';

const CreditsFooter: React.FC = () => {
  const { global } = useContext(ContentContext);
  const currentYear: number = (new Date()).getFullYear();

  return (
    <footer className="t-paragraph2Light creditsFooter">
      <div className="creditsFooter__box">
        <a href={appConfig.author.link}>
          {`${global.footer.created} ${appConfig.author.name} @${appConfig.author.startedYear}-${currentYear}`}
        </a>
      </div>
    </footer>
  );
};

export default CreditsFooter;