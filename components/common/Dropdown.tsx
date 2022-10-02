import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ setDropDown, setSumGuests, setFinalTotal }: any) => {
  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const [totalGuests, setTotalGuests] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });

  useEffect(() => {
    setSumGuests(totalGuests.adult + totalGuests.children + totalGuests.infant);
    setFinalTotal(totalGuests);
  }, [totalGuests.adult, totalGuests.children, totalGuests.infant]);

  return (
    <div
      className="custom-dropDown dropdown-menu dropdown_passenger_info"
      aria-labelledby="dropdownMenuButton1"
      ref={wrapperRef}
    >
      <div className="traveller-calulate-persons">
        <div className="passengers">
          <h6>Passengers</h6>
          <div className="passengers-types">
            <div className="passengers-type">
              <div className="text">
                <span className="count">{totalGuests.adult}</span>
                <div className="type-label">
                  <p>Adult</p>
                  <span>12+ yrs</span>
                </div>
              </div>
              <div className="button-set">
                <button
                  type="button"
                  onClick={() =>
                    setTotalGuests({
                      ...totalGuests,
                      adult: totalGuests.adult + 1,
                    })
                  }
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    totalGuests.adult > 1 &&
                    setTotalGuests({
                      ...totalGuests,
                      adult: totalGuests.adult - 1,
                    })
                  }
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="passengers-type">
              <div className="text">
                <span className="count">{totalGuests.children}</span>
                <div className="type-label">
                  <p className="fz14 mb-xs-0">Children</p>
                  <span>2 - Less than 12 yrs</span>
                </div>
              </div>
              <div className="button-set">
                <button
                  type="button"
                  onClick={() =>
                    setTotalGuests({
                      ...totalGuests,
                      children: totalGuests.children + 1,
                    })
                  }
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    totalGuests.children > 0 &&
                    setTotalGuests({
                      ...totalGuests,
                      children: totalGuests.children - 1,
                    })
                  }
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="passengers-type">
              <div className="text">
                <span className="count">{totalGuests.infant}</span>
                <div className="type-label">
                  <p className="fz14 mb-xs-0">Infant</p>
                  <span>Less than 2 yrs</span>
                </div>
              </div>
              <div className="button-set">
                <button
                  type="button"
                  onClick={() =>
                    setTotalGuests({
                      ...totalGuests,
                      infant: totalGuests.infant + 1,
                    })
                  }
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    totalGuests.infant > 0 &&
                    setTotalGuests({
                      ...totalGuests,
                      infant: totalGuests.infant - 1,
                    })
                  }
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;