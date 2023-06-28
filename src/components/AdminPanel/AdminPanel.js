import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import FetchJewelery from '../FetchJewelery';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminPanel = () => {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource name="jewelery" list={FetchJewelery} />
    </Admin>
  );
};

export default AdminPanel;
