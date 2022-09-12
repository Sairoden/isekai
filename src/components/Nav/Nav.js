import { useState } from "react";
import {
  apparelNav,
  homegoodsNav,
  lifestyleNav,
  techAccessoriesNav,
  byAnimeNav,
  AboutUsNav,
} from "./Dropdown";
import "./Nav.css";
import { Link, Outlet } from "react-router-dom";
import { Dropdown, Drawer, Input, Menu } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  HeartFilled,
  createFromIconfontCN,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { SearchInput } from "./Style";
// import { apparel, homegoods, techAccessories } from "../../data.js";
import { useNavigate } from "react-router-dom";

// const combineProduct = apparel.concat(homegoods).concat(techAccessories);

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", //icon-shoppingcart
  ],
});

const { Search } = Input;
const { SubMenu } = Menu;
const Nav = () => {
  const history = useNavigate();
  const [searchActive, SetSearchActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const onSearch = e => {
    // const filtered = combineProduct.filter(item =>
    //   item.name.toLowerCase().includes(e.toLowerCase())
    // );
    history.push(`/search?q=${e}`);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const search = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className="nav_container" id="product">
        <MenuOutlined className="nav_drawer" onClick={showDrawer} />
        <Drawer placement="left" onClose={onClose} visible={visible}>
          <div className="drawerSearch">
            <Search
              placeholder="Search"
              allowClear
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </div>
          <Menu style={{ width: 220 }} mode="inline">
            <SubMenu key="sub1" title="Shop">
              <Menu.Item key="1">
                <Link to="/">Best Selling</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">Tee Shirts</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">Hoodies</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/">Socks</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Accessories">
              <Menu.Item key="1">
                <Link to="/">Phone Cases</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">AirPod Cases</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="Home Goods">
              <Menu.Item key="1">
                <Link to="/">All Homegoods</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">3D LED Lights</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">Pillows</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Collections">
              <Menu.Item key="1">
                <Link to="/">Sad Aesthetic</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">Vaporwave</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">NSFW</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/">Kawaii</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/">Senpai</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/">Waifu</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">NSFW</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/">Cosplay</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="Official Merch">
              <Menu.Item key="1">
                <Link to="/">Best Selling</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">Attack On Titan</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/">Darling In The Franxx</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/">Demon Slayer</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/">Dragon Ball Z</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/">Hunter X Hunter</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/">My Hero Academia</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/">My Neighbor Totoro</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/">Naruto</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/">One Piece</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/">Sailor Moon</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>

        <Link to="/" className="logo">
          Isekai
        </Link>

        <nav className="nav_links">
          <Dropdown overlay={apparelNav} className="nav_link">
            <Link to="/collections/anime-clothing-apparel">
              Shop <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={homegoodsNav} className="nav_link">
            <Link to="/collections/anime-homegoods">
              Homegoods <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={byAnimeNav} className="nav_link">
            <Link to="/collections/all-anime-merch">
              Brands <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={lifestyleNav} className="nav_link">
            <Link to="/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch">
              Collections <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={techAccessoriesNav} className="nav_link">
            <Link to="/collections/anime-tech-accessories">
              Tech Accessories <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
          <Dropdown overlay={AboutUsNav} className="nav_link">
            <Link to="/help/about-us">
              About Us <DownOutlined className="arrow" />
            </Link>
          </Dropdown>
        </nav>
        <div className="search">
          <SearchOutlined
            className="search_icon"
            onClick={() => SetSearchActive(searchActive => !searchActive)}
          />
          <SearchInput
            className="searchInput"
            // value={query}
            // onChange={({target}) => SetSearchActive(target.value)}
            placeholder="Search"
            active={searchActive}
            onSubmit={search}
          />
        </div>
        <div className="nav_icons">
          <Link to="/login" className="nav_icon stay">
            <UserOutlined />
          </Link>
          <Link to="/favorite" className="nav_icon heart">
            <HeartFilled />
          </Link>

          <button className="nav_icon stay cart">
            <IconFont type="icon-shoppingcart" />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
