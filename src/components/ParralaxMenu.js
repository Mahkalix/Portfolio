import React, { useEffect } from "react";

const ParallaxMenu = () => {
  useEffect(() => {
    const $menu = document.querySelector(".Menu-list");
    const $item = document.querySelectorAll(".Menu-list-item");
    const w = window.innerWidth;
    const h = window.innerHeight;

    window.addEventListener("mousemove", (e) => {
      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;
      const dy = e.pageY - h / 2;
      const dx = e.pageX - w / 2;
      const theta = Math.atan2(dy, dx);
      let angle = (theta * 180) / Math.PI - 90;

      if (angle < 0) {
        angle += 360;
      }

      const offsetPoster = $menu.getAttribute("data-offset");
      const transformPoster = `translate3d(0, ${
        -offsetX * offsetPoster
      }px, 0) rotateX(${-offsetY * offsetPoster}deg) rotateY(${
        offsetX * (offsetPoster * 2)
      }deg)`;
      $menu.style.transform = transformPoster;

      $item.forEach(($this) => {
        const offsetLayer = $this.getAttribute("data-offset") || 0;
        const transformLayer = `translate3d(${offsetX * offsetLayer}px, ${
          offsetY * offsetLayer
        }px, 20px)`;
        $this.style.transform = transformLayer;
      });
    });

    return () => {
      window.removeEventListener("mousemove");
    };
  }, []);

  return (
    <div className="Menu">
      <ul className="Menu-list" data-offset="10">
        <li className="Menu-list-item" data-offset="20" onClick={() => {}}>
          Home
          <span className="Mask">
            <span>Home</span>
          </span>
          <span className="Mask">
            <span>Home</span>
          </span>
        </li>
        <li className="Menu-list-item" data-offset="16" onClick={() => {}}>
          About
          <span className="Mask">
            <span>About</span>
          </span>
          <span className="Mask">
            <span>About</span>
          </span>
        </li>
        <li className="Menu-list-item" data-offset="12" onClick={() => {}}>
          Work
          <span className="Mask">
            <span>Work</span>
          </span>
          <span className="Mask">
            <span>Work</span>
          </span>
        </li>
        <li className="Menu-list-item" data-offset="8" onClick={() => {}}>
          Contact
          <span className="Mask">
            <span>Contact</span>
          </span>
          <span className="Mask">
            <span>Contact</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ParallaxMenu;
