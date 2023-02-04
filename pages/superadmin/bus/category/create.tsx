import { addBusCategory } from "@/api/superadmin/bus";
import SuperadminLayout from "@/components/layout/superadmin";
import { responseErrorHandler } from "@/services/helper";
import { Button, Input, Select } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = () => {
  const router = useRouter();
  const [seatName, setSeatName] = useState<any>([]);
  const [seatColumn, setSeatColumn] = useState<any>(12);
  const [layout, setLayout] = useState<any>();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      seats: [],
      total_seats: "",
    },
  });

  function createSeatLayout(column: any, rowNumber: any) {
    const seatLayout: any = [];
    for (let row = 0; row < rowNumber?.length; row++) {
      for (let col = 0; col < column; col++) {
        seatLayout.push({
          row_name: rowNumber[row],
          column_name: rowNumber[row] + (col + 1),
        });
      }
    }
    return seatLayout;
  }

  function groupBy(list: any, keyGetter: any) {
    const map = new Map();
    list?.forEach((item: any) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  function mergeValues(groupedMap: Map<any, any[]>) {
    let merged: any = [];
    groupedMap?.forEach((value) => {
      merged = merged?.concat(value);
    });
    return merged;
  }

  const removeSeats = (seat: any) => {
    const afterRemove = addItems(layout.get(seat.row_name), seat);
    layout.set(seat.row_name, afterRemove);
    setLayout(layout);
    router.push(router.asPath);
  };

  function addItems(array: any, seat: any) {
    let emptyValue = 0;
    let finalValue = array.map((item: any, index: any) => {
      if (item.column_name == seat.column_name || item.column_name == "") {
        emptyValue = emptyValue + 1;
        return {
          row_name: item.row_name,
          column_name: "",
        };
      } else {
        return {
          row_name: item.row_name,
          column_name: item.row_name + (index - emptyValue + 1),
        };
      }
    });
    return finalValue;
  }

  const handleChange = (value: string) => {
    let totalSeatsAvailable = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    setSeatName(totalSeatsAvailable.slice(0, parseInt(value)));
  };

  const handleColumnChange = (value: string) => {
    setSeatColumn(parseInt(value));
  };

  useEffect(() => {
    setLayout(
      groupBy(
        createSeatLayout(seatColumn, seatName),
        (item: any) => item.row_name
      )
    );
    if (seatName.length == 0) {
      setSeatName(["A", "B", "C", "D", "E"]);
    }
  }, [seatName, seatColumn]);

  console.log(mergeValues(layout));

  const submitCategory = (data: any) => {
    setLoading(true);
    let finalLayout = mergeValues(layout);
    let totalSeats = finalLayout.filter((item: any) => {
      return item.column_name != "";
    }).length;

    let finalMergedValue = {
      ...data,
      seats: finalLayout,
      total_seats: totalSeats,
    };
    addBusCategory(finalMergedValue)
      .then((res: any) => {
        toast.success(res.message);
        router.push("/superadmin/bus/category/list");
      })
      .catch(responseErrorHandler)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SuperadminLayout title="Create Seat Layout">
      <div className="details-container overflow-hidden">
        <form onSubmit={handleSubmit(submitCategory)}>
          <div className="seat_container">
            <div className="price_container">
              <label className="form-label">Bus Category Name</label>
              <Controller
                control={control}
                name="title"
                rules={{
                  required: "Category Name is required!",
                }}
                render={({ field: { onChange, value } }: any) => (
                  <>
                    <Input
                      placeholder="Bus Category"
                      size="large"
                      aria-label="Category"
                      onChange={onChange}
                      aria-invalid={!!errors?.title?.message}
                      value={value}
                    />
                    {errors?.title?.message && (
                      <div className="text-danger">
                        {errors?.title?.message + ""}
                      </div>
                    )}
                  </>
                )}
              />
              <div className="d-flex flex-column">
                <label className="form-label mt-3">Number Of Rows</label>
                <Select
                  defaultValue="5"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={Array.from(Array(26).keys()).map(
                    (item: any, index: any) => {
                      return { value: item + 1, label: item + 1 };
                    }
                  )}
                />
              </div>
              <div className="d-flex flex-column">
                <label className="form-label mt-3">Number Of Column</label>
                <Select
                  defaultValue="12"
                  style={{ width: 120 }}
                  onChange={handleColumnChange}
                  options={Array.from(Array(12).keys()).map(
                    (item: any, index: any) => {
                      return { value: item + 1, label: item + 1 };
                    }
                  )}
                />
              </div>
            </div>

            <div className="all_seat_wrapper">
              <div className="driver">FRONT</div>
              <>
                {!!layout &&
                  Array.from(layout)
                    .reverse()
                    .map((item: any, index: any) => {
                      return (
                        <div key={index} className="d-flex seat-wrapper">
                          {item[1].map((item1: any, index: any) => {
                            return (
                              <div key={index}>
                                {item1.column_name == "" ? (
                                  <div className="empty-seat">
                                    {item1?.column_name}
                                  </div>
                                ) : (
                                  <>
                                    {
                                      <div
                                        className={`custom-seat available_seats`}
                                        onClick={() => removeSeats(item1)}
                                      >
                                        {item1?.column_name}
                                      </div>
                                    }
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
              </>
            </div>
          </div>
          <Button
            loading={loading}
            htmlType="submit"
            className="btn btn-admin-primary mt-5 float-right"
          >
            Create
          </Button>
        </form>
      </div>
    </SuperadminLayout>
  );
};

export default Create;
