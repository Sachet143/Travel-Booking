import { DatePicker, Popover } from "antd";
import clsx from "clsx";
import { ReactElement } from "react";
const { RangePicker } = DatePicker;

interface IProps {
  data: number | string;
  title: string;
  icon?: ReactElement;
  color:
    | "l-bg-blue-dark"
    | "l-bg-green-dark"
    | "l-bg-orange-dark"
    | "l-bg-cherry";
  filterName?: string;
  onChangeDate?: (name: string, val: Array<any> | null) => void;
}

function HotelDashboardCard({
  data,
  title,
  icon,
  color,
  filterName,
  onChangeDate,
}: IProps) {
  return (
    <div className="col-sm-3">
      <div className={clsx("d-card", color)}>
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large">{icon}</div>
          <div className="mb-4 d-flex justify-content-between">
            <h3 style={{ fontWeight: 700 }} className="mb-0 text-white">
              {title}
            </h3>
            {filterName ? (
              <Popover
                trigger="click"
                title="Choose a Date"
                content={
                  <RangePicker
                    onChange={(val) =>
                      onChangeDate && onChangeDate(filterName, val)
                    }
                  />
                }
              >
                <i
                  className="fa fa-ellipsis-v cursor-pointer"
                  style={{ zIndex: 100 }}
                />
              </Popover>
            ) : null}
          </div>
          <div className="row align-items-center mb-2 d-flex">
            <div className="col-8">
              <h2 className="d-flex align-items-center mb-0 text-white">
                {data}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDashboardCard;
