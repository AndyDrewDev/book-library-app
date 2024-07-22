import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { clearError, selectErrorMsg } from '../../redux/slices/booksSlice'

const Error = () => {
  const error = useSelector(selectErrorMsg)
  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      toast.info(error)
      dispatch(clearError())
    }
  }, [error, dispatch])

  return <ToastContainer position='top-right' autoClose={3000} />
}

export default Error
