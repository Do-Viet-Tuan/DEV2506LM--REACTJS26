import React from 'react'

export default function Student() {
    return (
        <>
            <tr className="align-middle">
                <td className="text-center">1</td>
                <td>SV01</td>
                <td>Nguyễn Văn A</td>
                <td className="text-center">20</td>
                <td className="text-center">Nam</td>
                <td className="text-center">
                    <button id="btnView" className="btn btn-success rounded-0 text-center">
                        Xem
                    </button>
                    <button id="btnEdit" className="btn btn-warning rounded-0 text-center">
                        Sửa
                    </button>
                    <button id="btnDel" className="btn btn-danger rounded-0 text-center">
                        Xóa
                    </button>
                </td>
            </tr>
            <tr className="align-middle">
                <td className="text-center">2</td>
                <td>SV02</td>
                <td>Trần Thị Bình</td>
                <td className="text-center">22</td>
                <td className="text-center">Nữ</td>
                <td className="text-center">
                    <button id="btnView" className="btn btn-success rounded-0">
                        Xem
                    </button>
                    <button id="btnEdit" className="btn btn-warning rounded-0">
                        Sửa
                    </button>
                    <button id="btnDel" className="btn btn-danger rounded-0">
                        Xóa
                    </button>
                </td>
            </tr>
        </>
    )
}
