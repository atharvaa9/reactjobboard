import { ClipLoader } from 'react-spinners'
const override = {
  display: 'block',
  margin: '100px auto',
  borderColor: 'red',
}

const Spinner = ({loading}) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <ClipLoader color="#36d7b7" loading={loading} 
      size={150} cssOverride={override}/>
    </div>
   )
}

export default Spinner
