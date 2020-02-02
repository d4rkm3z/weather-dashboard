import { faCloudSun, faEnvelope, faLayerGroup, faTh } from '@fortawesome/free-solid-svg-icons';
import { IMenu } from 'utils/types';

const menuList: IMenu = {
  title: 'Navigation',
  content: [
    {
      icon: faTh,
      text: 'Dashboards',
    },
    {
      icon: faLayerGroup,
      text: 'Layouts',
    },
    {
      icon: faEnvelope,
      text: 'Mailbox',
    },
    {
      icon: faCloudSun,
      'text': 'Weather',
    },
  ],
};

export default menuList;