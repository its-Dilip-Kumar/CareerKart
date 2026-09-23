import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/contant';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import React ,{useEffect} from 'react'
import { setCompanies} from '@/redux/companySlice';
const useGetAllCompanies=(companyId)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchCompanies=async () =>{
            try {
                const res=await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    },[])
}

export default useGetAllCompanies;