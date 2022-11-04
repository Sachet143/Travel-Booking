import { deleteServerFile } from '@/api/hoteladmin/files';
import HotelGalleryComponent from '@/components/hoteladmin/forms/gallery'
import HoteladminLayout from '@/components/layout/hoteladmin'
import { imageFullPath, responseErrorHandler } from '@/services/helper';
import { Button, Empty, Image, Popconfirm, Skeleton } from 'antd'
import React from 'react'
import { toast } from 'react-toastify';
import useSWR from 'swr';

function HotelGallery() {

  const { data: images, error, mutate } = useSWR('/hotel/hotel-image');
  const imageLoading = !images && !error;

  function deleteFileHandler(fileId: any) {
    mutate(images.filter((img: any) => img.id !== fileId), false);

    deleteServerFile(fileId)
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate)
  }

  return (
    <HoteladminLayout title="Gallery">
      <div className="row justify-content-center">
        <div className="col-lg-12 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Image Gallery</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Upload your hotel image here
              </h6>
              <HotelGalleryComponent />
              <hr />
              {
                imageLoading ?
                  <div className="mt-4">
                    <Skeleton active />
                  </div>
                  :
                  !images.length ?
                    <Empty description="You currently don't have any images" />
                    :
                    <div className="mt-4 d-flex gap-5 flex-wrap">
                      {images.map((img: any) => (
                        <div key={img.id}>
                          <Image
                            alt="img"
                            src={imageFullPath(img.path)}
                            style={{ objectFit: "cover", height: 200, width: 200 }}
                          />
                          <br />
                          <Popconfirm title="Are you sure to delete this image?" onConfirm={() => deleteFileHandler(img.id)}>
                            <Button
                              className="btn btn-admin-danger-outlined mt-3"
                            >
                              <i className='fa fa-trash mr_5' /> Delete
                            </Button>
                          </Popconfirm>
                        </div>
                      ))}
                    </div>
              }
            </div>
          </div>
        </div >
      </div >
    </HoteladminLayout>
  )
}

export default HotelGallery