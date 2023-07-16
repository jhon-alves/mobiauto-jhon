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
    loading
  } = useAppSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getAllBrands());
  }, []);

  useEffect(() => {
    if (brand.nome.length > 0) {
      dispatch(vehiclesActions.getAllModels(brand.codigo));
    }
  }, [brand]);

  useEffect(() => {
    if (model.nome.length > 0) {
      dispatch(vehiclesActions.getAllYears(brand.codigo, model.codigo));
    }
  }, [model]);

  return { brands, models, years, loading };
}