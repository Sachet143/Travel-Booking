import HotelListDetail from "@/components/client/hotels/Hotel";
import HotelListingFilter from "@/components/client/hotels/Listing/Filter";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { capitalizeFirstLetter, cleanUrlParams } from "@/services/helper";
import { Pagination, Select, Skeleton } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import useSWR from "swr";
const { Option } = Select;

const HotelListing = () => {
  const router = useRouter();

  const { data: hotels, error } = useSWR(
    cleanUrlParams(`/hotels`, router.query)
  );
  const hotelLoading = !hotels && !error;

  const formHooks = useForm<any>({
    defaultValues: {
      search: null,
      price: [500, 50000],
      country: "Nepal",
      state: null,
      city: null,
      hotelFeatures: [],
      categories: [],
      roomFeatures: [],
      hotelActivities: [],
      order: null,
    },
  });
  const { getValues, control, reset, handleSubmit } = formHooks;

  const { dirtyFields } = useFormState({
    control,
  });

  const clearFilter = (value: any) => {
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        [value]: null,
      })
    );
  };

  useEffect(() => {
    const hasPrice = router.query.min_price && router.query.max_price;
    const order =
      router.query.orderBy && router.query.order
        ? router.query.orderBy + "-" + router.query.order
        : null;

    reset({
      ...router.query,
      order,
      price: hasPrice
        ? [Number(router.query.min_price), Number(router.query.max_price)]
        : [500, 500000],
      categories: router.query.categories
        ? router.query.categories.toString().split(",").map(Number)
        : [],
      hotelFeatures: router.query.hotelFeatures
        ? router.query.hotelFeatures.toString().split(",").map(Number)
        : [],
      roomFeatures: router.query.roomFeatures
        ? router.query.roomFeatures.toString().split(",").map(Number)
        : [],
      hotelActivities: router.query.hotelActivities
        ? router.query.hotelActivities.toString().split(",").map(Number)
        : [],
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const customFilter = (value: any) => {
    // PRICE to MIN and MAX
    const { price, order, ...restFilters } = value;
    const hasPriceApplied = dirtyFields.price;
    const priceFilter = hasPriceApplied
      ? { min_price: value.price[0], max_price: value.price[1] }
      : {};

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        ...restFilters,
        ...priceFilter,
        page: 1,
      })
    );
  };

  function handleOrder() {
    const order = getValues("order");
    // ORDER
    const orderBy = order ? order.split("-")[0] : null;
    const orderPosition = order ? order.split("-")[1] : null;

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        orderBy,
        order: orderPosition,
        page: 1,
      })
    );
  }

  return (
    <ClientLayout>
      <>
        <section id="explore_area" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section_heading_center">
                  {hotelLoading ? (
                    <div className="w-25 mx-auto">
                      <Skeleton active paragraph={false} />
                    </div>
                  ) : (
                    <h2 className="number_heading">
                      {router.query.state
                        ? `${capitalizeFirstLetter(router.query.state)}- `
                        : null}
                      {hotels?.total} Properties found
                    </h2>
                  )}
                </div>
              </div>
            </div>
            <div className="border-radius-20 d-flex justify-content-end">
              <Controller
                name="order"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <Select
                      allowClear
                      placeholder="Sort Filter"
                      className="rounded mb-3"
                      size="large"
                      style={{
                        width: "220px",
                        marginLeft: "-10px",
                      }}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        handleOrder();
                      }}
                    >
                      <Option value="rating_count-DESC">Top Reviewed</Option>
                      <Option value="price-ASC">
                        Price (lowest to highest)
                      </Option>
                      <Option value="price-DESC">
                        Price (highest to lowest)
                      </Option>
                      <Option value="stars-ASC">
                        Stars (lowest to highest)
                      </Option>
                      <Option value="stars-DESC">
                        Stars (highest to lowest)
                      </Option>
                    </Select>
                  );
                }}
              />
            </div>
            <div className="row">
              {/* filter section */}
              <HotelListingFilter
                clearFilter={clearFilter}
                onSubmit={handleSubmit(customFilter)}
                formHooks={formHooks}
              />
              {/* hotels */}
              <div className="col-lg-9">
                <div className="row">
                  {hotelLoading ? (
                    <Skeleton active />
                  ) : (
                    hotels?.data?.map((hotel: any) => (
                      <HotelListDetail key={hotel.id} hotel={hotel} />
                    ))
                  )}

                  <div className="pagination_area">
                    <Pagination
                      style={{
                        visibility:
                          hotels?.last_page > 1 ? "visible" : "hidden",
                      }}
                      onChange={(page) =>
                        router.push(
                          cleanUrlParams("/hotels", { ...router.query, page })
                        )
                      }
                      className="pagination"
                      current={hotels?.current_page}
                      pageSize={hotels?.per_page || 1}
                      total={hotels?.total}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </ClientLayout>
  );
};

export default HotelListing;
