import { Modal, Skeleton } from 'antd'
import React from 'react'
import useSWR from 'swr'

function BusSeatModal({ showSeatModal, setShowSeatModal }: any) {

  const { data, error } = useSWR('');
  const loading = !data && !error;

  return (
    <Modal title="Bus Seats" width={'80%'} visible={showSeatModal} onCancel={() => setShowSeatModal(false)}>
      {
        loading
          ? <Skeleton active />
          :
          <Seat />
      }
    </Modal>
  )
}

export default BusSeatModal