import { useEffect } from 'react';
import { vehiclesActions } from '@/actions/vehicles.actions';
import { useAppDispatch, useAppSelector } from '@/helpers/store';

export const useResult = () => {
  const dispatch = useAppDispatch();
  const {
    vehicleDetails,
    filters: { brand, model, year },
    typeVehicle,
    loading,
  } = useAppSelector(state => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getVehicleDetails(typeVehicle, brand.codigo, model.codigo, year.codigo));
    return () => dispatch(vehiclesActions.clearFilters());
  }, [dispatch, brand, model, year]);

  return { vehicleDetails, loading };
}