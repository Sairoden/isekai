import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import mainCover from "../../assets/main-cover.jpg";
import accessories from "../../assets/sailor-moon-cat-airpod-cases.jpg";
import teeshirt from "../../assets/naruto-kakashi-hatake-shirt.jpg";
import hoodie from "../../assets/attack-on-titan-logo-hoodie.jpg";
import ledlight from "../../assets/hunter-x-hunter-killua-led-lamp.jpg";
import pillow from "../../assets/kawaii-baby-panda-body-pillow.jpg";
import onePiece from "../../assets/one-piece.jpg";
import model1 from "../../assets/model1.jpg";
import model2 from "../../assets/model2.jpg";
import cartoon from "../../assets/cartoon.jpg";
import clothes from "../../assets/clothes.jpg";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  types: {
    email: "Please enter a valid email.",
  },
};
const intialState = false;
const Home = () => {
  const [subscribed, setSubscribed] = useState(intialState);

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
                <img src={teeshirt} alt="kakashi_hoodie" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">tee shirts</h3>
                </div>
              </div>
            </Link>
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={accessories} alt="sailor_moon_case" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">accessories</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="merch_grid second-row">
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={hoodie} alt="attack_on_titan_hoodie" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">hoodies</h3>
                </div>
              </div>
            </Link>
            <Link to="/" className="grid_item overlay">
              <div>
                <img src={ledlight} alt="hunter_x_hunter_led_light" />
                <div className="collection_grid_text-wrapper">
                  <h3 className="collection_grid-title">led lights</h3>
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

      {/* <div className="subscribe">
        <p>Subscribe To Our Newsletter</p>
        <p>
          We promise to only send you cool stuff. And a coupon for 15% off your
          first order!
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
      </div>

      <Footer /> */}
    </>
  );
};
export default Home;
