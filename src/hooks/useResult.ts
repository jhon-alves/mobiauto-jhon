import { useEffect } from 'react';
import { vehiclesActions } from '@/actions/vehicles.actions';
import { useAppDispatch, useAppSelector } from '@/helpers/store';

export const useResult = () => {
  const dispatch = useAppDispatch();
  const {
    vehicleDetails,
    filters: { brand, model, year },
    loading,
  } = useAppSelector(state => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getVehicleDetails(brand.codigo, model.codigo, year.codigo));
  }, [dispatch, brand, model, year]);

  return { vehicleDetails, loading };
}