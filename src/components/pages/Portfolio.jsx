import React, { useState } from "react";
import { portfolio } from "../data/dummydata";
import { Heading } from "../common/Heading";
import { Modal } from "../common/Modal";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);
  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);
    if (category === "all") {
      setList(portfolio);
    }
  };

  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (imgSrc, imgSrc1, imgSrc2, title, desc) => {
    let tempData = [imgSrc, title, desc, imgSrc1, imgSrc2];
    setTempdata((items) => [1, ...tempData]);
    return setModel(true);
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />

          {/*     <div className="catButton btn-group content grid3" role="group" aria-label="Basic example">
            
            {category.map((category) => (
              <button
                type="button" 
                className="primaryBtn btn btn-secondary"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div> */}
          <div className=" catButton">
            {category.map((category) => (
              <button
                type="button"
                className="primaryBtn btn btn-secondary"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="content grid3">
            {list.map((items) => (
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={items.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{items.title}</h3>
                  <span>{items.name}</span>
                
                  <button
                    className=" btn btn-secondary"
                    onClick={() =>
                      getData(
                        items.imgSrc,
                        items.imgSrc1,
                        items.imgSrc2,
                        items.title,
                        items.desc
                      )
                    }
                  >
                    ver mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      {model === true ? (
        <Modal
          imgSrc={tempdata[1]}
          title={tempdata[2]}
          desc={tempdata[3]}
          imgSrc1={tempdata[4]}
          imgSrc2={tempdata[5]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};
