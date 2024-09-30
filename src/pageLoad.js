import tabManager from './tabs';
import menu from './menu';
import about from './about';
import homepage from './homepage';
import imgBox from './imgBox';
import footer from './footer';
export default function init() {
    tabManager();
    homepage();
    menu();
    imgBox();
    footer();
    about();

}
