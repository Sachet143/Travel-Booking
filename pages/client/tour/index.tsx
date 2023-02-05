import React from "react";
import LogoWhite from "@/public/client/assets/img/YS-White.svg";

function Tour() {
  return (
    <div className="invoice_wrap">
      <div className="invoice-container">
        <div className="invoice-content-wrap" id="download_section">
          <header
            className="invoice-header content-min-width bus-header"
            id="invo_header"
          >
            <div className="invoice-logo-content">
              <div className="logo-wrapper">
                <div className="logo">
                  <a href="_target">
                    <img src={LogoWhite.src} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="bus-img">
                <svg
                  width="363"
                  height="140"
                  viewBox="0 0 363 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.49475 100.352H3.58074C2.15544 100.352 1 101.507 1 102.932V111.947C1 113.372 2.15544 114.528 3.58074 114.528H4.49475C5.92006 114.528 7.0755 113.372 7.0755 111.947V102.932C7.0755 101.507 5.92006 100.352 4.49475 100.352Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M288.43 121.813C288.43 122.171 288.564 122.664 288.063 122.664H284.908C284.77 122.657 284.634 122.623 284.509 122.563C284.384 122.504 284.272 122.42 284.179 122.316C284.087 122.213 284.015 122.092 283.97 121.961C283.924 121.83 283.905 121.692 283.914 121.553C283.946 118.376 283.645 115.205 283.018 112.09C280.688 102.681 273.161 95.1453 262.408 95.1453C258.805 95.1675 255.255 96.0087 252.026 97.6052C248.796 99.2018 245.972 101.512 243.768 104.361C241.563 107.21 240.035 110.523 239.299 114.049C238.563 117.576 238.639 121.223 239.521 124.716C239.683 125.388 239.835 126.679 238.903 126.679C131.623 126.679 108.585 127.575 109.284 124.887C110.192 121.391 110.292 117.735 109.576 114.195C108.859 110.656 107.346 107.326 105.15 104.459C102.954 101.592 100.134 99.2628 96.903 97.649C93.6723 96.0352 90.1162 95.179 86.505 95.1453C75.6533 95.1453 63.0633 103.076 62.9826 120.048C62.9923 120.888 62.6702 121.698 62.0864 122.301C61.5025 122.905 60.704 123.255 59.8642 123.274H13.0793C9.02899 123.274 6.49305 116.105 6.49305 116.105C3.70621 109.151 5.29229 82.9495 11.1348 50.6902C12.3983 43.7186 19.2623 22.6515 39.1824 12.2479C56.7727 3.05403 71.4417 1.42314 81.7736 1.42314H338.056C338.952 1.42699 339.823 1.72302 340.536 2.26634C341.249 2.80967 341.766 3.57067 342.007 4.43401C352.017 40.0088 358.917 72.4115 358.917 76.7217V113.99C358.918 114.888 358.626 115.761 358.083 116.476C357.541 117.192 356.779 117.71 355.915 117.951C340.825 122.127 335.932 124.304 335.941 120.98C335.985 118.092 335.718 115.208 335.143 112.377C332.805 102.968 322.598 95.5844 311.899 95.5844C308.589 95.6022 305.32 96.3121 302.3 97.6683C299.281 99.0244 296.579 100.997 294.367 103.459C292.156 105.922 290.483 108.819 289.458 111.966C288.432 115.113 288.076 118.44 288.412 121.732C288.466 121.822 288.43 121.813 288.43 121.813Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M49.5148 16.6029C50.2267 16.2461 51.0181 16.0777 51.8136 16.1137C52.609 16.1497 53.382 16.389 54.0587 16.8087C54.7354 17.2284 55.2932 17.8145 55.679 18.511C56.0648 19.2076 56.2657 19.9914 56.2624 20.7877V109.904C56.26 110.813 55.8977 111.685 55.2546 112.328C54.6115 112.971 53.7399 113.334 52.8304 113.336H25.4638C24.5543 113.334 23.6827 112.971 23.0396 112.328C22.3964 111.685 22.0341 110.813 22.0317 109.904V74.9564C22.0317 35.8151 39.5414 21.5493 49.5148 16.6029Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M50.5542 21.1371C50.3343 21.1387 50.1173 21.1876 49.918 21.2805C41.1004 25.6624 26.3149 38.1001 26.3149 72.1695V81.4888C26.3149 81.8744 26.391 82.2562 26.5388 82.6123C26.6867 82.9684 26.9033 83.2918 27.1763 83.564C27.4494 83.8362 27.7735 84.0519 28.13 84.1986C28.4866 84.3453 28.8686 84.4203 29.2541 84.4191H49.0398C49.4249 84.4203 49.8065 84.3453 50.1625 84.1984C50.5186 84.0516 50.8421 83.8358 51.1144 83.5635C51.3867 83.2911 51.6025 82.9676 51.7494 82.6116C51.8962 82.2556 51.9712 81.874 51.97 81.4888V22.5619C51.9736 22.3201 51.9143 22.0816 51.7981 21.8696C51.6819 21.6575 51.5126 21.4793 51.3069 21.3522C51.0808 21.2121 50.8202 21.1376 50.5542 21.1371V21.1371Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M345.869 37.222C345.962 37.5807 345.972 37.9559 345.897 38.3189C345.823 38.6819 345.667 39.0231 345.44 39.3163C345.213 39.6095 344.923 39.847 344.59 40.0105C344.258 40.174 343.892 40.2593 343.521 40.2597H127.313C118.15 40.2586 109.157 42.7221 101.274 47.3919C93.3908 52.0617 86.9092 58.7659 82.5081 66.8019L67.4448 94.3119C67.2103 94.4862 66.9321 94.5919 66.6411 94.6173C66.35 94.6427 66.0577 94.5868 65.7966 94.4558C65.5355 94.3248 65.3159 94.1238 65.1623 93.8753C65.0087 93.6268 64.9272 93.3406 64.9268 93.0484V13.4039C64.9256 12.9917 65.0059 12.5833 65.1631 12.2023C65.3203 11.8212 65.5513 11.475 65.8427 11.1835C66.1342 10.892 66.4804 10.6611 66.8615 10.5039C67.2425 10.3467 67.6509 10.2664 68.0631 10.2675H335.77C336.669 10.2668 337.542 10.5649 338.252 11.1148C338.963 11.6648 339.47 12.4353 339.695 13.3053L345.869 37.222Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M361.049 107.153C361.049 107.985 360.719 108.782 360.131 109.371C359.543 109.959 358.745 110.289 357.913 110.289H357.196V99.5362H357.913C358.745 99.5362 359.543 99.8666 360.131 100.455C360.719 101.043 361.049 101.841 361.049 102.672V107.153Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M226.582 120.299H197.172C196.193 120.296 195.256 119.906 194.564 119.215C193.872 118.523 193.482 117.585 193.48 116.607V49.588C193.48 49.1032 193.575 48.6231 193.761 48.1752C193.947 47.7273 194.218 47.3203 194.561 46.9775C194.904 46.6346 195.311 46.3627 195.759 46.1772C196.207 45.9916 196.687 45.8961 197.172 45.8961H226.582C227.561 45.8961 228.5 46.2851 229.192 46.9775C229.884 47.6698 230.273 48.6089 230.273 49.588V116.607C230.271 117.585 229.881 118.523 229.19 119.215C228.498 119.906 227.56 120.296 226.582 120.299V120.299Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M105.825 119.644C105.825 123.473 104.69 127.215 102.563 130.398C100.436 133.581 97.4132 136.062 93.8764 137.527C90.3396 138.992 86.4479 139.375 82.6933 138.628C78.9386 137.881 75.4898 136.038 72.7829 133.331C70.076 130.624 68.2325 127.175 67.4857 123.421C66.7389 119.666 67.1222 115.774 68.5871 112.237C70.0521 108.701 72.533 105.678 75.716 103.551C78.899 101.424 82.6412 100.289 86.4693 100.289C91.6028 100.289 96.5259 102.328 100.156 105.958C103.786 109.588 105.825 114.511 105.825 119.644V119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M97.0432 119.644C97.0432 121.736 96.4231 123.78 95.2612 125.519C94.0994 127.258 92.4479 128.613 90.5158 129.413C88.5837 130.214 86.4576 130.423 84.4065 130.015C82.3554 129.607 80.4713 128.6 78.9925 127.121C77.5137 125.642 76.5067 123.758 76.0987 121.707C75.6907 119.656 75.9001 117.53 76.7004 115.598C77.5007 113.666 78.856 112.014 80.5948 110.853C82.3337 109.691 84.3781 109.071 86.4694 109.071C89.2738 109.071 91.9633 110.185 93.9462 112.168C95.9292 114.151 97.0432 116.84 97.0432 119.644V119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M92.5806 119.644C92.5806 120.853 92.2222 122.035 91.5506 123.04C90.8791 124.045 89.9247 124.828 88.808 125.291C87.6913 125.753 86.4625 125.874 85.277 125.638C84.0915 125.403 83.0026 124.82 82.1479 123.966C81.2932 123.111 80.7111 122.022 80.4753 120.837C80.2395 119.651 80.3606 118.422 80.8231 117.306C81.2857 116.189 82.069 115.235 83.074 114.563C84.079 113.892 85.2606 113.533 86.4693 113.533C88.0901 113.533 89.6445 114.177 90.7906 115.323C91.9367 116.469 92.5806 118.024 92.5806 119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M280.706 119.644C280.706 123.473 279.57 127.216 277.443 130.399C275.316 133.582 272.292 136.063 268.755 137.527C265.218 138.992 261.326 139.375 257.571 138.627C253.816 137.88 250.367 136.036 247.661 133.328C244.954 130.62 243.111 127.17 242.365 123.415C241.62 119.66 242.004 115.768 243.471 112.231C244.937 108.695 247.419 105.672 250.603 103.547C253.788 101.421 257.531 100.287 261.359 100.289C266.491 100.291 271.412 102.332 275.04 105.961C278.668 109.591 280.706 114.513 280.706 119.644V119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M271.925 119.644C271.925 121.736 271.304 123.781 270.142 125.52C268.98 127.259 267.328 128.614 265.395 129.414C263.462 130.214 261.336 130.423 259.285 130.014C257.233 129.606 255.349 128.598 253.871 127.118C252.392 125.638 251.386 123.753 250.979 121.702C250.572 119.65 250.783 117.524 251.584 115.592C252.386 113.66 253.743 112.009 255.483 110.848C257.223 109.687 259.268 109.069 261.36 109.071C262.748 109.071 264.122 109.344 265.405 109.876C266.687 110.407 267.852 111.186 268.833 112.168C269.815 113.15 270.593 114.316 271.123 115.599C271.653 116.881 271.926 118.256 271.925 119.644V119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M267.515 119.644C267.515 120.853 267.157 122.035 266.485 123.04C265.814 124.045 264.859 124.828 263.743 125.291C262.626 125.753 261.397 125.874 260.212 125.638C259.026 125.403 257.937 124.82 257.082 123.966C256.228 123.111 255.646 122.022 255.41 120.837C255.174 119.651 255.295 118.422 255.758 117.306C256.22 116.189 257.004 115.235 258.009 114.563C259.014 113.892 260.195 113.533 261.404 113.533C263.025 113.533 264.579 114.177 265.725 115.323C266.871 116.469 267.515 118.024 267.515 119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M331.532 119.644C331.532 123.473 330.397 127.216 328.27 130.399C326.143 133.582 323.119 136.063 319.582 137.527C316.045 138.992 312.152 139.375 308.397 138.627C304.643 137.88 301.194 136.036 298.487 133.328C295.781 130.62 293.938 127.17 293.192 123.415C292.446 119.66 292.831 115.768 294.297 112.231C295.764 108.695 298.246 105.672 301.43 103.547C304.614 101.421 308.357 100.287 312.186 100.289C317.318 100.291 322.239 102.332 325.866 105.961C329.494 109.591 331.532 114.513 331.532 119.644V119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M322.75 119.644C322.75 121.736 322.13 123.781 320.968 125.52C319.805 127.259 318.153 128.614 316.221 129.414C314.288 130.214 312.162 130.423 310.11 130.014C308.059 129.606 306.175 128.598 304.696 127.118C303.218 125.638 302.212 123.753 301.805 121.702C301.398 119.65 301.608 117.524 302.41 115.592C303.212 113.66 304.568 112.009 306.308 110.848C308.048 109.687 310.094 109.069 312.185 109.071C313.574 109.071 314.948 109.344 316.23 109.876C317.513 110.407 318.678 111.186 319.659 112.168C320.64 113.15 321.418 114.316 321.949 115.599C322.479 116.881 322.751 118.256 322.75 119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M318.297 119.644C318.297 120.853 317.938 122.035 317.267 123.04C316.595 124.045 315.641 124.828 314.524 125.291C313.408 125.753 312.179 125.874 310.993 125.638C309.808 125.403 308.719 124.82 307.864 123.966C307.01 123.111 306.427 122.022 306.192 120.837C305.956 119.651 306.077 118.422 306.539 117.306C307.002 116.189 307.785 115.235 308.79 114.563C309.795 113.892 310.977 113.533 312.186 113.533C313.806 113.533 315.361 114.177 316.507 115.323C317.653 116.469 318.297 118.024 318.297 119.644Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M51.8888 6.71904C51.8888 6.71904 27.1746 13.6996 13.4017 32.1232C6.80649 40.9497 4.06445 51.6669 4.06445 63.4864V87.8601C4.06682 88.7268 4.41217 89.5573 5.02504 90.1702C5.63791 90.7831 6.46846 91.1284 7.33519 91.1308H9.56645C9.99859 91.1308 10.4264 91.045 10.8251 90.8783C11.2238 90.7116 11.5854 90.4673 11.8889 90.1597C12.1923 89.852 12.4317 89.4871 12.5929 89.0862C12.7542 88.6853 12.8342 88.2563 12.8282 87.8242C12.7745 83.4692 12.6938 75.4044 12.6938 67.2141C12.6938 52.9394 12.1113 47.5001 19.6744 33.2433C27.7392 17.9829 51.8888 6.71904 51.8888 6.71904Z"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M242.9 62.2767H332.366"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M251.054 71.0225H340.519"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M261.395 79.7773H350.86"
                    stroke="#21242B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
            </div>
          </header>

          <section className="bus-booking-content" id="bus_booking">
            <div className="container">
              <div className="invoice-owner-conte-wrap">
                <div className="invo-to-wrap">
                  <div className="invoice-to-content">
                    <p className="invo-to inter-700 medium-font mtb-0">
                      Passenger Info:
                    </p>
                    <h1 className="invo-to-owner inter-700 md-lg-font">
                      Jordon Smith
                    </h1>
                    <p className="invo-owner-address medium-font inter-400 mtb-0">
                      Phone: +1 562 563 8899 <br /> Email: jordon123@mail.com
                    </p>
                  </div>
                </div>
                <div className="invo-pay-to-wrap">
                  <div className="invoice-pay-content">
                    <p className="invo-to inter-700 medium-font mtb-0">
                      Agency Info:
                    </p>
                    <h2 className="invo-to-owner inter-700 md-lg-font">
                      Digital Invoico Busline
                    </h2>
                    <p className="invo-owner-address medium-font inter-400 mtb-0">
                      4510 E Dolphine St, IN 3526
                      <br /> Hills Road, New York, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="invoice-timing-wrap">
                <div className="invo-time-col">
                  <div className="booking-info column-one">
                    <p className="second-color sm-md-text">
                      <b className="b-text circle">From: </b>24 Avon street, 4th
                      Parkon, New York
                    </p>
                    <p className="second-color sm-md-text">
                      <b className="b-text circle">To: </b>outhgate LRT Bus Stop
                      2217, New York
                    </p>
                  </div>
                </div>
                <div className="invo-time-col">
                  <div className="booking-info">
                    <p className="second-color sm-md-text">
                      <b className="b-text circle">Department Time: </b>10:00 AM
                    </p>
                    <p className="second-color sm-md-text">
                      <b className="b-text circle">Arrive Time: </b>1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bus-detail-wrap">
                <div className="bus-detail-col border-bottom">
                  <div className="bus-type b-text inter-700 medium-font">
                    Bus Type:
                  </div>
                  <div className="bus-tname second-color inter-400 medium-font">
                    Volvo AC
                  </div>
                </div>
                <div className="bus-detail-col border-bottom">
                  <div className="bus-type b-text inter-700 medium-font">
                    Bus Number:
                  </div>
                  <div className="bus-tname second-color inter-400 medium-font">
                    10DIB
                  </div>
                </div>
                <div className="bus-detail-col seat-col">
                  <div className="bus-type b-text inter-700 medium-font">
                    Seat No:
                  </div>
                  <div className="bus-tname second-color inter-400 medium-font">
                    A1, A2
                  </div>
                </div>
                <div className="bus-detail-col ticket-col">
                  <div className="bus-type b-text inter-700">Ticket Pnr:</div>
                  <div className="bus-tname second-color inter-400 medium-font">
                    23156-89512
                  </div>
                </div>
              </div>

              <div className="table-wrapper">
                <table className="invoice-table bus-detail-table">
                  <thead>
                    <tr className="invo-tb-header">
                      <th className="invo-table-title sno-wid inter-700 medium-font">
                        Details
                      </th>
                      <th className="invo-table-title re-price-wid rate-title inter-700 medium-font">
                        Price
                      </th>
                      <th className="invo-table-title re-qty-wid rate-title inter-700 medium-font">
                        Qty
                      </th>
                      <th className="invo-table-title tota-wid inter-700 medium-font total-head">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="invo-tb-body">
                    <tr className="invo-tb-row">
                      <td className="invo-tb-data">
                        Delux Business Seat - 10:00 AM Sat
                      </td>
                      <td className="invo-tb-data rate-data">$120</td>
                      <td className="invo-tb-data rate-data">2</td>
                      <td className="invo-tb-data total-data">$240.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="invo-addition-wrap">
                <div className="invo-add-info-content bus-term-cond-content">
                  <h3 className="addi-info-title inter-700 medium-font">
                    Terms & Condition:
                  </h3>
                  <div className="term-condi-list">
                    <ul className="term-con-list">
                      <li className="term-cond-item inter-400 sm-md-text second-color">
                        Please go through our privacy policy{" "}
                        <a href="_target">here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="invo-bill-total bus-invo-total">
                  <table className="invo-total-table">
                    <tbody>
                      <tr>
                        <td className="inter-700 medium-font b-text hotel-sub">
                          Sub Total:
                        </td>
                        <td className="invo-total-data inter-400 medium-font second-color">
                          $240.00
                        </td>
                      </tr>
                      <tr className="tax-row bottom-border">
                        <td className="inter-700 medium-font b-text hotel-sub">
                          Tax{" "}
                          <span className="invo-total-data inter-700 medium-font second-color">
                            (18%)
                          </span>
                        </td>
                        <td className="invo-total-data inter-400 medium-font second-color">
                          $43.20
                        </td>
                      </tr>
                      <tr className="invo-grand-total">
                        <td className="inter-700 sm-text primary-color hotel-sub">
                          Grand Total:
                        </td>
                        <td className="sm-text b-text invo-total-price">
                          $283.20
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bus-conta-mail-wrap">
                <div className="bus-invo-num bus-contact">
                  <span className="bus-conatct-img">
                    <img
                      src="https://up2client.com/envato/digital-invoice/main-file/assets/images/bus/call.svg"
                      alt="this is call image"
                    />
                  </span>
                  <a
                    className="bus-invo-contact inter-400 sm-text b-text"
                    href="tel:+12345678899"
                  >
                    +1 234 567 8899
                  </a>
                </div>
                <div className="bus-invo-date bus-mail">
                  <span className="bus-mail-img">
                    <img
                      src="https://up2client.com/envato/digital-invoice/main-file/assets/images/bus/mail.svg"
                      alt="this is mail image"
                    />
                  </span>
                  <a
                    className="bus-invo-mail inter-400 sm-text b-text"
                    href="mailto:contact@invoice.com"
                  >
                    contact@invoice.com
                  </a>
                </div>
              </div>

              <p className="mtb-0 thank-you-content inter-400 b-text">
                Thank you for choosing to 🚌 travelling 🚌 with us. See you soon
                🙂
              </p>
            </div>
          </section>
        </div>
      </div>
      <button />
    </div>
  );
}

export default Tour;
