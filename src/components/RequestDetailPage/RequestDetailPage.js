import React, { useEffect, useState } from 'react'
import './RequestDetailPage.css'
import '../LoginPage/LoginPage.css'
import ImageSlider from '../GeneralComponent/ImageSlider/ImageSlider'
import { useLocation, useNavigate } from 'react-router-dom'
import * as complaintsAction from '../../action/complaintsAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import swal from 'sweetalert'

const RequestDetailPage = (props) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const requestData = state?.complaint
  console.log(requestData)

  const updateStatus = (status) => {
    const data = {
      complaintId: requestData?.complaintId,
      useremail: requestData?.useremail,
      complaintStatus: status,
    }

    props.action
      .updateComplaint(data)
      .then((res) => {
        console.log(res)
        if (res.success) {
          swal('Status changed!', 'Notified the complainer!', 'success')
          navigate('/request-listing')
        }
      })
      .catch((error) => {
        console.log(error)
        swal('Something Wrong!', 'Unable to update complaint', 'error')
      })
  }

  return (
    <div className='detail-container'>
      <div className='detail-content'>
        <h1 className='request-header'>Complaint Detail</h1>
        <div className='status-change-container'>
          <div
            className='status-change-button'
            style={{ backgroundColor: '#FBC668' }}
            onClick={() => updateStatus('open')}
          >
            Active
          </div>
          <div
            className='status-change-button'
            style={{ backgroundColor: '#DB2955' }}
            onClick={() => updateStatus('pending')}
          >
            Pending
          </div>
          <div
            className='status-change-button'
            style={{ backgroundColor: '#F88961' }}
            onClick={() => updateStatus('done')}
          >
            Solved
          </div>
        </div>
        <div className='request-container'>
          <div className='request-detail'>
            <label className='request-label'>Complaint ID:</label>
            <div className='request-value'>{requestData?.complaintId}</div>
          </div>
          <div className='request-detail'>
            <label className='request-label'>Subject:</label>
            <div className='request-value'>{requestData?.subject}</div>
          </div>
          <div className='request-detail'>
            <label className='request-label'>Category:</label>
            <div className='request-value'>{requestData?.category}</div>
          </div>
          <div className='request-detail'>
            <label className='request-label'>Status: </label>
            <div className='request-value'>{requestData?.complaintStatus}</div>
          </div>
          <div className='request-detail'>
            <label className='request-label'>Email: </label>
            <div className='request-value'>{requestData?.useremail}</div>
          </div>
          {/*<div className='request-detail'>*/}
          {/*    <ImageSlider />*/}
          {/*</div>*/}
        </div>
        <div className='request-container'>
          <label className='request-label'>Images </label>
          <div className='request-image-container'>
            <ImageSlider imageData={requestData?.photos} />
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  if (state) {
    return {
      complaintsData: state.complaints.complaintsData,
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(complaintsAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetailPage)
