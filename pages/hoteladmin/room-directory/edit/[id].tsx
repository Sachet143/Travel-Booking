import { updateHotelRoomDirectory } from "@/api/hoteladmin/room-directory";
import RoomDirectoryForm from "@/components/hoteladmin/forms/RoomDirectory";
import HoteladminLayout from "@/components/layout/hoteladmin";
import { responseErrorHandler } from "@/services/helper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR from "swr";

function HotelRoomEdit() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const formMethods = useForm();
  const { reset, setError } = formMethods;

  const { data, error, mutate } = useSWR(`/hotel/room-directory/${id}`);

  function editHotelRoomDirectoryHandler(data: any) {
    setLoading(true);
    updateHotelRoomDirectory(id, data)
      .then((res: any) => {
        mutate();
        toast.success(res.message);
        router.push("/hoteladmin/room-directory");
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (data) {
      reset(data.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <HoteladminLayout title="Update Hotel">
      <div className="row justify-content-center">
        <div className="col-lg-8 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Edit Hotel Room</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">Edit room for your hotel</h6>
              <RoomDirectoryForm
                submitHandler={editHotelRoomDirectoryHandler}
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

export default HotelRoomEdit;
