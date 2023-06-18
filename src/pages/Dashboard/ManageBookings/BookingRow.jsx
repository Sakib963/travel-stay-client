const BookingRow = ({ singleBooking, index, handleApprove, handleDeny }) => {
  const { _id, hotelName, price, reservedDate, status } = singleBooking;
  return (
    <tr className={status === "approved" ? "bg-[#ddebff]" : ""}>
      <th>{index + 1}</th>
      <td>{hotelName}</td>
      <td>$ {price}</td>
      <td>{reservedDate}</td>
      <td>{status}</td>
      <th className="space-x-2 space-y-1">
        <>
          <button
            onClick={() => handleApprove(_id)}
            disabled={status === "approved"}
            className="btn bg-[#003276] btn-xs text-white hover:text-black"
          >
            approve
          </button>
          <button
            onClick={() => handleDeny(_id)}
            disabled={status === "denied"}
            className="btn bg-[#003276] btn-xs text-white hover:text-black"
          >
            deny
          </button>
        </>
      </th>
    </tr>
  );
};

export default BookingRow;