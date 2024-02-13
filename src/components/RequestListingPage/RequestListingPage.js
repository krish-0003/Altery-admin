import React, { useEffect, useState } from 'react'
import './RequestListingPage.css'
import Row from '../GeneralComponent/Row/Row'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as complaintsAction from '../../action/complaintsAction'

const RequestListingPage = (props) => {
  const data = [
    {
      complaintId: 'A86865765',
      subject: 'Crime',
      category: 'Cyber Crime',
      status: 'Pending',
      email: 'jaimi@dal.ca',
    },
    {
      complaintId: 'M57574346',
      subject: 'Environment',
      category: 'Garbage Issue',
      status: 'Solved',
      email: 'prit@dal.ca',
    },
    {
      complaintId: 'S29648632',
      subject: 'Safety',
      category: 'Road Safety',
      status: 'New',
      email: 'parth@dal.ca',
    },
  ]

  const [complaintsData, setComplaintsData] = useState([])
  const [openComplaintsData, setOpenComplaintsData] = useState([])
  const [closeComplaintsData, setCloseComplaintsData] = useState([])
  const [pendingComplaintsData, setPendingComplaintsData] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    props.action
      .getAllComplaints()
      .then((res) => {
        if (res.success) {
          setComplaintsData(res.complaints)
          generateComplaintsStats(res.complaints)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const generateComplaintsStats = (complaints) => {
    const openComplaints = []
    const closeComplaints = []
    const pendingComplaints = []

    complaints?.map((complaint) => {
      if (complaint.complaintStatus === 'pending') {
        pendingComplaints.push(complaint)
      } else if (complaint.complaintStatus === 'open') {
        openComplaints.push(complaint)
      } else if (complaint.complaintStatus === 'done') {
        closeComplaints.push(complaint)
      }
    })

    setOpenComplaintsData(openComplaints)
    setCloseComplaintsData(closeComplaints)
    setPendingComplaintsData(pendingComplaints)
  }

  const getData = () => {
    if (searchText.length === 0) {
      return complaintsData
    } else if (searchText === 'open') {
      return openComplaintsData
    } else if (searchText === 'done') {
      return closeComplaintsData
    } else if (searchText === 'pending') {
      return pendingComplaintsData
    } else {
      return complaintsData
    }
  }

  return (
    <div className='table-container'>
      <div>
        <input
          className='search-input'
          type='text'
          name='search'
          placeholder='Search...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className='status-filter'>
        <div
          className='status-filter-button'
          style={{ 'background-color': '#FBC668' }}
        >
          <div className='status-filter-button-text'>Active</div>
          <div className='status-filter-button-text'>
            {openComplaintsData?.length} Requests
          </div>
        </div>
        <div
          className='status-filter-button'
          style={{ 'background-color': '#DB2955' }}
        >
          <div className='status-filter-button-text'>Pending</div>
          <div className='status-filter-button-text'>
            {pendingComplaintsData?.length} Requests
          </div>
        </div>
        <div
          className='status-filter-button'
          style={{ 'background-color': '#F88961' }}
        >
          <div className='status-filter-button-text'>Solved</div>
          <div className='status-filter-button-text'>
            {closeComplaintsData?.length} Requests
          </div>
        </div>
        <div
          className='status-filter-button'
          style={{ 'background-color': '#6953be' }}
        >
          <div className='status-filter-button-text'>All</div>
          <div className='status-filter-button-text'>
            {complaintsData?.length} Requests
          </div>
        </div>
      </div>
      <table>
        <thead>
          <th>Complaint ID</th>
          <th>Subject</th>
          <th>Category</th>
          <th>Status</th>
          <th>Email ID</th>
          <th>View</th>
        </thead>
        <tbody>
          {getData()?.map((item) => (
            <Row data={item} />
          ))}
        </tbody>
      </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestListingPage)
