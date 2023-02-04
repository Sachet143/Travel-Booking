import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({
  setDropDown,
  setSumGuests,
  setFinalTotal,
  childrenCount,
  adultCount,
  roomCount,
  setRoomCount,
  maxPeople = 5,
}: any) => {
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
    adult: adultCount,
    children: childrenCount,
    room: roomCount,
  });

  useEffect(() => {
    setSumGuests(totalGuests.adult + totalGuests.children);
    setFinalTotal(totalGuests);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalGuests.adult, totalGuests.children]);

  return (
    <div
      className="custom-dropDown dropdown-menu dropdown_passenger_info"
      aria-labelledby="dropdownMenuButton1"
      ref={wrapperRef}
    >
      <div className="traveller-calulate-persons">
        <div className="passengers">
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
                  onClick={() => {
                    totalGuests.adult + totalGuests.children !== maxPeople &&
                      setTotalGuests({
                        ...totalGuests,
                        adult: totalGuests.adult + 1,
                      });
                  }}
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
                    totalGuests.adult + totalGuests.children !== maxPeople &&
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
                <span className="count">{roomCount}</span>
                <div className="type-label">
                  <p className="fz14 mb-xs-0">Rooms</p>
                  <span>Number of rooms</span>
                </div>
              </div>
              <div className="button-set">
                <button
                  type="button"
                  onClick={() => {
                    setRoomCount(roomCount + 1);
                  }}
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  type="button"
                  onClick={() => roomCount > 1 && setRoomCount(roomCount - 1)}
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
            {/* <div className="passengers-type">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
