import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { MenuProps } from 'rc-menu';

const items: MenuProps['items'] = [
  {
    label: 'Account/profile',
    key: 'profile',
    // @ts-ignore
    icon: <i className="fas fa-user-circle" />
  },
  {
    label: 'Dashboard',
    key: 'dashboard',
    // @ts-ignore
    icon: <i className="fas fa-tachometer-alt" />,
  },
  {
    label: 'Booking History',
    key: 'booking',
    // @ts-ignore
    icon: <AppstoreOutlined />
  },
  {
    label: 'Rewards',
    key: 'rewards',
  },
  {
    label: 'Coupons & credits',
    key: 'coupons',
  },
  {
    label: 'Privacy & security',
    key: 'privacy',
  },
];


function ClientNavbar({ tab, setTab }: any) {

  const onClick: MenuProps['onClick'] = (e) => {
    setTab(e.key);
  };

  return (
    <Menu color='#4A5EF5' className='mb-4' onClick={onClick} selectedKeys={[tab]} mode="horizontal" items={items} />
  )
}

export default ClientNavbar