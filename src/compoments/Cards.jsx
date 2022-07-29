import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TbAssest from "./TbAssest";
import EbAsset from "./EbAsset";
import "./cards.css";

const Cards = ({ asset }) => {
  const [show, setShow] = useState(false);

  return asset.asset_type === "input_asset" &&
    asset.asset_content === "article" ? (
    ""
  ) : (
    <Card
      key={asset.asset_id}
      style={{
        width: "25rem",
        border: "none",
        marginTop: "40px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Card.Header
        style={{ background: "#000", color: "white" }}
        className="mb-2"
      >
        {asset.asset_title}
      </Card.Header>

      <Card.Body>
        {/* display section */}

        {asset.display_asset_reflection ? (
          <p>{asset.display_asset_reflection}</p>
        ) : (
          ""
        )}
        {asset.display_asset_image ? (
          <img
            src={asset.display_asset_image}
            style={{ width: "370px", margin: "auto" }}
            alt=""
          />
        ) : null}
        {asset.display_asset_url ? (
          <iframe
            src={asset.display_asset_url}
            width="370"
            height="100"
            title="audio"
          ></iframe>
        ) : (
          ""
        )}
        {asset.display_asset_docs ? (
          <iframe
            src={asset.display_asset_docs}
            width="370"
            height="400"
            title="pdf"
          ></iframe>
        ) : (
          ""
        )}

        {asset.display_asset_video ? (
          <div className="video-responsive">
            <iframe
              width="370"
              height="200"
              src={asset.display_asset_video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        ) : (
          ""
        )}

        {/* input section */}
        {asset.asset_content === "tb" ? (
          // for tb asset
          <TbAssest />
        ) : (
          ""
        )}

        {asset.asset_content === "reflection" &&
        asset.asset_type === "input_asset" ? (
          <div className="reflection">
            <form>
              <textarea
                id="reflection_textarea"
                cols={30}
                rows={15}
                placeholder="Reflect as per given guidelines"
              />
            </form>
          </div>
        ) : (
          ""
        )}

        {asset.asset_content === "eb" && asset.asset_type === "input_asset" ? (
          <EbAsset />
        ) : (
          ""
        )}
        {/* end input section */}
      </Card.Body>
      <button
        key={asset.asset_id}
        onClick={() => setShow(!show)}
        className="ms-auto btn_card"
        variant="light"
        align="end"
      >
        {show === true ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </button>
      {show === true ? (
        <Card.Body>
          <p>{asset.asset_description}</p>{" "}
        </Card.Body>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Cards;
