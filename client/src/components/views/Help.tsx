import React from 'react';
import { Link } from 'react-router-dom';

//Import components
import CreditsFooter from '../partials/CreditsFooter';
import VersionMark from '../partials/VersionMark';
import ExportOption from '../partials/creatorPanel/ExportOption';
import FullScreenOption from '../partials/creatorPanel/FullScreenOption';
import NetOption from '../partials/creatorPanel/NetOption';
import SelectOption from '../partials/creatorPanel/SelectOption';
import AddFileOption from '../partials/creatorPanel/AddFileOption';
import ClearSelectedOption from '../partials/creatorPanel/ClearSelectedOption';
import BlockOption from '../partials/creatorPanel/BlockOption';
import LayersOption from '../partials/creatorPanel/LayersOption';
import PassageOption from '../partials/creatorPanel/passage/PassageOption';
import LinkButton from '../partials/creatorPanel/LinkButton';
import VertexWeightOption from '../partials/creatorPanel/vertexWeight/VertexWeightOption';
import SaveOption from '../partials/creatorPanel/SaveOption';
import DeleteBgOption from '../partials/creatorPanel/DeleteBgOption';


const Help: React.FC = () => {
  return (
    <div className="textView">
      <article className="textView__content">
        <nav className="g-sectionNav">
          <div className="g-sectionNav__elem">
            <Link to='/creator' className="t-paragraph2Normal textView__content--comeBack">
              Come back to Creator
            </Link>
          </div>
          <div className="g-sectionNav__elem g-sectionNav__elem--page t-paragraph6Normal">
            <Link to='/features'>go to features</Link>
          </div>
        </nav>
        <h1 className="g-sectionTitle">Help</h1>
        <section>
          Okey! If you are here it means that you chose your map size. You needed to type size in “field” unit. Each field contains a four square units. It’s really good show by the net option. Fields are marked by solid gray line, squares are marked by cropped gray line. You can manipulate the nets view by Net Option <div className="iconWrapper">
            <NetOption viewTypeQuantity={3} />
          </div> (more info about it at the Creator Panel features). 
        </section>

        <section>
          Another important thing to know about creating maps is a Select Option. You can choose different select type, by field, by square, or by mouse movement. You want to make field/square impossible to move by any chars? Just block it. Use Block Option 
          <div className="iconWrapper iconWrapper--down">
            <BlockOption />
          </div>. You can unblock by select fields/squares, press ctrl button and then click on Block Option.
        </section>

        <section>
          To set background image, you need to click on <div className="iconWrapper iconWrapper--down"> 
            <AddFileOption />
          </div>. 
        </section>

        <section>
          You need to know that important things to build maps are images. You can find them in Files Panel (FS). FS has bookmarks which contains needed images. Remember that bookmarks are a groups of images. Each group is above or below other.
        </section>

        <section>
          You can import your own image by Import Option image here>. Your imported images will be only exists on your Poyters account. If you export complete map to Angotia game and it will be accepted then your images appear for all Map Creators as a base images.
        </section>

        <section>
          Do you want to create different level of difficulty for subsoils? For instance, you want to define sand subsoil and a lane. That cause different character behaviors. More weight of vertex means more difficulties. So proper behavior is set lane's weight at 1, sand at 3, chills at 5 etc.
        </section>

        <section>
          If you know all that stuff you can create maps, yet! Yeah, that’s so easy. Now you can select needed fields/squares and do some actions on them, like - block squares, set images etc. So, enjoy, the new AMC User!
        </section>
      </article>
      <CreditsFooter />
      <VersionMark />
    </div>
  );
};

export default Help;