import { useEffect } from 'react';
import { vehiclesActions } from '@/actions/vehicles.actions';
import { useAppDispatch, useAppSelector } from '@/helpers/store';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { 
    brands,
    models,
    years,
    filters: { brand, model },
    typeVehicle,
    loading
  } = useAppSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getAllBrands(typeVehicle));
  }, [dispatch, typeVehicle]);

  useEffect(() => {
    if (brand.nome.length > 0) {
      dispatch(vehiclesActions.getAllModels(typeVehicle, brand.codigo));
    }
  }, [dispatch, typeVehicle, brand]);

  useEffect(() => {
    if (model.nome.length > 0) {
      dispatch(vehiclesActions.getAllYears(typeVehicle, brand.codigo, model.codigo));
    }
  }, [dispatch, typeVehicle, brand, model]);

  return { brands, models, years, loading };
}