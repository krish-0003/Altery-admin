import React from 'react'
import '../../RequestListingPage/RequestListingPage.css'
import { useNavigate } from 'react-router-dom'

const Row = ({ data }) => {
  // console.log("data : ", data);
  const navigate = useNavigate()
  return (
    <tr>
      <td>{data.complaintId}</td>
      <td>{data.subject}</td>
      <td>{data.category}</td>
      <td>{data.complaintStatus}</td>
      <td>{data.useremail}</td>
      <td>
        <button
          className='view-listing-button'
          type='submit'
          onClick={() =>
            navigate(`/request-listing/${data.complaintId}`, {
              state: {
                complaint: data,
              },
            })
          }
        >
          View
        </button>
      </td>
    </tr>
  )
}

export default Row
