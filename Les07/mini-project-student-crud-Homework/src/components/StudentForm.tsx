import React, { FormEvent, use, useEffect, useState } from "react";
import IStudent1 from "../IStudent1";



interface StudentFormProps {
  renderActionName: string; // Nhận actionName từ props
  onClose: () => void; // Hàm để đóng form nếu cần
  renderSelectedStudent: IStudent1 | null;

  onSubmit?: (student: IStudent1) => void;
}
export default function StudentForm({ renderActionName, onClose, renderSelectedStudent, onSubmit }: StudentFormProps) {
  //quan ly trang thai du lieu tren form
  const [form, setForm] = useState<IStudent1>({
    studentId: '',
    studentName: '',
    studentAge: 0,
    gender: true,
    birthDay: new Date(),
    address: '',
    isActive: true
  });
  useEffect(() => {
    if (renderSelectedStudent === null) {
      setForm({
    studentId: '',
    studentName: '',
    studentAge: 0,
    gender: true,
    birthDay: new Date(),
    address: '',
    isActive: true
      });
    } else if (renderSelectedStudent) {
      setForm(renderSelectedStudent);
    }
  }, [renderSelectedStudent]);
  //su kien dong form /submit neu can
  const handleSubmitAndClose = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    if (renderActionName === "add" || renderActionName === "edit") {
      onSubmit && onSubmit(form);
    }
    onClose();
  };
  return (
    <form action="" method="post" className="py-2" onSubmit={handleSubmitAndClose}>
      <h3>Thông tin sinh viên</h3>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="id">
          Mã sinh viên
        </span>
        <input
          type="text"
          className="form-control rounded-0"
          aria-describedby="id"
          id="studentId"
          name="studentId"
          value={form.studentId || ''}
          onChange={(e) =>
            form && setForm({ ...form, studentId: e.target.value })
          }
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="name">
          Họ và tên
        </span>
        <input
          type="text"
          className="form-control rounded-0"
          aria-describedby="name"
          id="studentName"
          name="studentName"
          value={form.studentName}
          onChange={(e) =>
            form && setForm({ ...form, studentName: e.target.value })
          }
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="age">
          Tuổi
        </span>
        <input
          type="number"
          className="form-control rounded-0"
          id="studentAge"
          name="studentAge"
          value={form.studentAge}
          onChange={(e) =>
            form && setForm({ ...form, studentAge: Number(e.target.value) })
          }
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="sex">
          Giới tính
        </span>
        <div className="d-flex align-items-center">
          <input
            type="radio"
            className="mx-1 ms-3"
            name="gender"
            id="male"
            // value="true"
            checked={form.gender === true}
            onChange={(e) =>
              form && setForm({ ...form, gender: true })
            }
          />{" "}
          <label htmlFor="male">Nam</label>
          <input
            type="radio"
            className="mx-1 ms-3"
            name="gender"
            id="female"
            // value="false"
            checked={form.gender === false}
            onChange={(e) =>
              form && setForm({ ...form, gender: false })
            }
          />{" "}
          <label htmlFor="female">Nữ</label>

        </div>
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="birthday">
          Ngày sinh
        </span>
        <input type="date"
          className="form-control rounded-0"
          id="birthday"
          name="birthDay"
          value={form?.birthDay.toISOString().split("T")[0]} // Chuyển đổi ngày thành định dạng YYYY-MM-DD
          onChange={(e) => form && setForm({ ...form, birthDay: new Date(e.target.value) })}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="name">
          Địa chỉ
        </span>
        <textarea
          name="address"
          id="address"
          className="form-control rounded-0"
          defaultValue={""}
          value={form.address} // Cập nhật giá trị địa chỉ
          onChange={(e) => form && setForm({ ...form, address: e.target.value })} // Cập nhật địa chỉ
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="active">
          Trạng thái
        </span>
        <div className="d-flex align-items-center">
          <input
            type="radio"
            className="mx-1 ms-3"
            name="isActive"
            id="is-active"
            defaultChecked
            // value="true"
            checked={form.isActive === true}
            onChange={(e) =>
              form && setForm({ ...form, isActive: true })
            }
          />{" "}
          <label htmlFor="is-active">Active</label>
          <input
            type="radio"
            className="mx-1 ms-3"
            name="isActive"
            id="non-active"
            defaultChecked
            // value="false"
            checked={form.isActive === false}
            onChange={(e) =>
              form && setForm({ ...form, isActive: false })
            }
          />{" "}
          <label htmlFor="non-active">Non-Active</label>
        </div>
      </div>
      {/* <button className="btn btn-success rounded-0 mt-2" id="btnSubmit"> */}
      <button className={`btn rounded-0 mt-2 
        ${renderActionName === "add" ? "btn-primary" : renderActionName === "edit" ? "btn-warning" : "btn-success"}`} id="btnSubmit">
        {renderActionName === "add" ? "Save" : renderActionName === "edit" ? "Update" : "Close"}
      </button>
    </form>
  );
}
