import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import mainCover from "../../assets/main-cover.webp";
import tShirt from "../../assets/ghost-fighter.webp";
import accessories from "../../assets/accessories.webp";
import hoodie from "../../assets/hoodie.jpg";
import ledlight from "../../assets/led-light.jpg";
import pillow from "../../assets/pillow.jpg";
import onePiece from "../../assets/one-piece.jpg";
import model1 from "../../assets/model1.jpg";
import model2 from "../../assets/model2.jpg";
import cartoon from "../../assets/cartoon.jpg";
import clothes from "../../assets/clothes.jpg";

import Carousel from "./Carousel/Carousel";
import Footer from "./Footer/Footer";

import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Form, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  types: {
    email: "Please enter a valid email.",
  },
};

const initialState = false;

const Home = () => {
  const [subscribed, setSubscribed] = useState(initialState);

  const onChange = () => {
    setSubscribed(!subscribed);
  };

  return (
    <>
      <div className="hero_container">
        <div className="hero_container_title">
          <p>Stay Sugoi ツ</p>
          <p>Only the best anime merch and inspiration</p>
          <Link to="/" className="btn">
            Treat Yourself{" "}
          </Link>
        </div>
        <img
          src={mainCover}
          style={{ backgroundPosition: "center", backgroundSize: "center" }}
          alt="hero_img_girl"
        />
      </div>

      <div className="main_container">
        <div className="merch_container">
          <p>Isekai Merchandise</p>
          <div className="merch_grid first-row">
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={tShirt} alt="Ghost Fighter shirt" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">T-Shirts</h3>
                </div>
              </div>
            </Link>
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={accessories} alt="sailor_moon_case" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">Accessories</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="merch_grid second-row">
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={hoodie} alt="attack_on_titan_hoodie" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">Hoodies</h3>
                </div>
              </div>
            </Link>
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={ledlight} alt="hunter_x_hunter_led_light" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">Led Lights</h3>
                </div>
              </div>
            </Link>
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={pillow} alt="panda_pillow" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">
                    pillows, plushies, and blankets
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="break"></div>
          <div id="slider">
            <figure>
              <img src={model1} alt="Model" />
              <img src={onePiece} alt="One Piece" />
              <img src={model2} alt="Model" />
              <img src={clothes} alt="Clothes" />
              <img src={cartoon} alt="cartoon" />
            </figure>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <p>GET FEATURED </p>
        <p>
          Send us your photos <strong>☜(ﾟヮﾟ☜)</strong>
        </p>
        {subscribed ? (
          <div className="subscribed">
            <MailOutlined /> Thanks for subscribing
          </div>
        ) : (
          <Form
            {...layout}
            onFinish={onChange}
            validateMessages={validateMessages}
          >
            <Form.Item
              className="subscribeform"
              name="email"
              rules={[{ type: "email" }]}
            >
              <Input placeholder="your email" />
            </Form.Item>
            <Button type="primary">
              <MailOutlined />
            </Button>
          </Form>
        )}
        <br />
      </div>

      <Carousel />
      <Footer />
    </>
  );
};
export default Home;
