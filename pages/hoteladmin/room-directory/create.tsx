import { createHotelRoomDirectory } from "@/api/hoteladmin/room-directory";
import RoomDirectoryForm from "@/components/hoteladmin/forms/RoomDirectory";
import HoteladminLayout from "@/components/layout/hoteladmin";
import { responseErrorHandler, useMatchMutate } from "@/services/helper";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function HotelRoomCreate() {
  const [loading, setLoading] = useState(false);
  const matchMutate = useMatchMutate();
  const formMethods = useForm<any>({
    defaultValues: {
      name: "",
      status: true,
      hotel_room_id: null,
    },
  });

  const { setError } = formMethods;

  function createHotelRoomHandler(data: any) {
    setLoading(true);

    createHotelRoomDirectory(data)
      .then((res: any) => {
        matchMutate("/hotel/rooms");
        toast.success(res.message);
        Router.push("/hoteladmin/room-directory");
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  }

  return (
    <HoteladminLayout title="Create Hotel Directory">
      <div className="row justify-content-center">
        <div className="col-lg-8 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Create Hotel Directory</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Create a new directory for your room
              </h6>
              <RoomDirectoryForm
                submitHandler={createHotelRoomHandler}
                loading={loading}
                formMethods={formMethods}
              />
            </div>
          </div>
        </div>
      </div>
    </HoteladminLayout>
  );
}

export default HotelRoomCreate;
