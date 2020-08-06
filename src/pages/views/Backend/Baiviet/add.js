import React from 'react'
import PropTypes from 'prop-types'

const AddBaiviet = props => {
    return (
        <div>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tiêu đề</label>
                    <input type="text" className="form-control" name="title" ref={register({required: true, maxLength: 20})} />
                    {errors.namesp && errors.namesp.type === "required" && <span className="bg-danger">Chọn ảnh</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
                  <textarea class="form-control" name="noidung" rows="1" ref={register}></textarea>
                  {errors.noidung && <span className="bg-danger">Nhập nội dung ngắn</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddBaiviet.propTypes = {

}

export default AddBaiviet
