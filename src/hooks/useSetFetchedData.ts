import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useAppDispatch } from "redux/app/hooks"
import { setFetching, setFetchingError } from "redux/slices/appSlice"



export const useSetFetchedData = (data: any, action: ActionCreatorWithPayload<any>, isFetching: boolean, isError: boolean) => {
  const dispatch = useAppDispatch()
  // dispatch data
  useEffect(()=>{
    if(data){
      dispatch(action(data))
    }
  },[data])
  // set fetching
  useEffect(()=>{
     dispatch(setFetching(isFetching)) 
  },[isFetching])
  // set error
  useEffect(()=>{
    dispatch(setFetchingError(isError))
  }, [isError])
}