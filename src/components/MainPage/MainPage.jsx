import React, { useEffect, createContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import Features from "../Feature/Feature";
import setAccentColor from "../../ColorProvider";
import setTitle from "../../TitleSetter";

export const AccentColor = createContext();
const MainPage = () => {
  const [color, setColor] = useState("");
  const crtRef = useRef();
  const joinRef = useRef();
  useEffect(() => {
    setColor(setAccentColor());
    console.log(setAccentColor());
    setEvent();
  }, []);

  useEffect(() => {
    setTitle();
  });

  const setEvent = () => {
    [crtRef, joinRef].forEach((el) => {
      el.current.onmouseenter = () => {
        el.current.style.color = color;
        el.current.style.backgroundColor = "white";
      };
      el.current.onmouseleave = () => {
        el.current.style.color = "white";
        el.current.style.backgroundColor = color;
      };
    });
  };
  return (
    <AccentColor.Provider value={[color, setColor]}>
      <div className={styles.page}>
        <center>
          <div className={styles.icon__Wrapper}>
            <i class="fas fa-comments"></i>
          </div>
          <br />
          <h2 className={styles.logo}>One-Chat</h2>
          <p className={styles.content}>
            Best place for <strong>One-Time</strong> chat with anyone in the
            world.
          </p>
          <Link to="/create">
            <button
              className={styles.btn}
              ref={crtRef}
              style={{
                color: "white",
                backgroundColor: color,
              }}
            >
              Create A Room
            </button>
          </Link>
          <Link to="/join">
            <button
              className={styles.btn}
              ref={joinRef}
              style={{
                color: "white",
                backgroundColor: color,
              }}
            >
              Join A Room
            </button>
          </Link>
        </center>
        <div className={styles.features}>
          <h4 className={styles.features__header}>Features</h4>
        </div>
        <Features />
      </div>
    </AccentColor.Provider>
  );
};

export default MainPage;
