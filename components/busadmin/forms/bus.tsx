import React from 'react'

function Bus({ submitHandler, loading, formMethods }: any) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="row mb-3">
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">
            Plate Number<span className="text-danger"> *</span>
          </label>
          <input
            {...register("name", { required: "Hotel Name is required!" })}
            aria-invalid={!!errors?.name?.message}
            className="form-control"
            placeholder="Enter Hotel Name"
          />
          {errors?.name?.message && (
            <div className="text-danger">{errors?.name?.message + ""}</div>
          )}
        </div>
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">
            Total Travel Hours<span className="text-danger"> *</span>
          </label>
          <input
            {...register("name", { required: "Hotel Name is required!" })}
            aria-invalid={!!errors?.name?.message}
            className="form-control"
            placeholder="Enter Hotel Name"
          />
          {errors?.name?.message && (
            <div className="text-danger">{errors?.name?.message + ""}</div>
          )}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">
            Amenities<span className="text-danger"> *</span>
          </label>
          <input
            {...register("name", { required: "Hotel Name is required!" })}
            aria-invalid={!!errors?.name?.message}
            className="form-control"
            placeholder="Enter Hotel Name"
          />
          {errors?.name?.message && (
            <div className="text-danger">{errors?.name?.message + ""}</div>
          )}
        </div>
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">
            Total Travel Hours<span className="text-danger"> *</span>
          </label>
          <input
            {...register("name", { required: "Hotel Name is required!" })}
            aria-invalid={!!errors?.name?.message}
            className="form-control"
            placeholder="Enter Hotel Name"
          />
          {errors?.name?.message && (
            <div className="text-danger">{errors?.name?.message + ""}</div>
          )}
        </div>
      </div>
    </form>
  )
}

export default Bus