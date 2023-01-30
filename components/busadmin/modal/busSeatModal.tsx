import { Modal, Skeleton } from 'antd';
import { Controller } from 'react-hook-form';
import useSWR from 'swr';
import SeatCategory from './SeatCategory';

function BusSeatModal({ showSeatModal, setShowSeatModal, formMethods }: any) {

  const { data, error } = useSWR('/bus/bus-category');
  const loading = !data && !error;

  return (
    <Modal title="Select Seat Type" width={'80%'} visible={showSeatModal}
      onOk={() => setShowSeatModal(false)}
      onCancel={() => setShowSeatModal(false)}>
      {
        loading
          ? <Skeleton active />
          :
          data?.data?.map((seat: any) => (
            <div key={seat.id}>
              <Controller
                control={formMethods.control}
                name="bus_category_id"
                rules={{ required: "Please select bus seat type" }}
                render={({ field: { value, onChange } }) =>
                  <div className='d-flex cursor-pointer' onClick={() => onChange(seat.id)} style={{ justifyContent: "space-between" }}>
                    {
                      value === seat.id ? "selected" : <div />
                    }
                    <div style={{ pointerEvents: "none" }}>
                      <SeatCategory data={seat.bus_seats_category} />
                    </div>
                  </div>
                }
              />
              <hr />
            </div>
          ))
      }
    </Modal>
  )
}

export default BusSeatModal