import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <p>
          <span className="specialText">
            &copy;{new Date().getFullYear()} GoldenCoin
          </span>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
