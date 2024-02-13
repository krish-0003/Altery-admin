import { BASE_URL } from '../utils/string'

export function getAllComplaints() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'GET_COMPLAINTS',
          subtype: 'loading',
        })
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        }

        fetch(`${BASE_URL}findcomplaints`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            dispatch({
              type: 'GET_COMPLAINTS',
              subtype: 'success',
              complaintsData: result.complaints,
            })
            resolve(result)
          })
          .catch((error) => {
            console.log('complaints error', error)
            rejects(error)
          })
      } catch (e) {
        dispatch({
          type: 'GET_COMPLAINTS',
          error: e,
        })
        rejects(e)
      }
    })
  }
}

export function updateComplaint(value) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'UPDATE_COMPLAINT',
          subtype: 'loading',
        })
        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(value)

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        }

        fetch(`${BASE_URL}updatecomplaints`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            dispatch({
              type: 'UPDATE_COMPLAINT',
              subtype: 'success',
            })
            resolve(result)
          })
          .catch((error) => {
            console.log('complaints error', error)
            rejects(error)
          })
      } catch (e) {
        dispatch({
          type: 'UPDATE_COMPLAINT',
          error: e,
        })
        rejects(e)
      }
    })
  }
}
