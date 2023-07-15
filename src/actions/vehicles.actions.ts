import vehiclesConstants from '@/constants/vehicles.constants';
import services from '@/services';

export const vehiclesActions = {
  changeField,
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails
};

function changeField(name: string, codigo: string, nome: string) {
  return (dispatch: any) => {
    dispatch({
      type: vehiclesConstants.CHANGE_FIELD,
      payload: { name, codigo, nome }
    });
  }
}

function getAllBrands() {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_BRANDS_REQUEST });
    services.getAllBrands()
      .then((data) => {
        dispatch({
          type: vehiclesConstants.GET_ALL_BRANDS_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        dispatch({ type: vehiclesConstants.GET_ALL_BRANDS_FAILURE, error });
      })
  }
}

function getAllModels(brand: string) {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_MODELS_REQUEST });
    services.getAllModels(brand)
      .then((data) => {
        dispatch({
          type: vehiclesConstants.GET_ALL_MODELS_SUCCESS,
          payload: data.modelos
        });
      })
      .catch((error) => {
        dispatch({ type: vehiclesConstants.GET_ALL_MODELS_FAILURE, error });
      })
  }
}

function getAllYears(brand: string, model: string) {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_YEARS_REQUEST });
    services.getAllYears(brand, model)
      .then((data) => {
        dispatch({
          type: vehiclesConstants.GET_ALL_YEARS_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        dispatch({ type: vehiclesConstants.GET_ALL_YEARS_FAILURE, error });
      })
  }
}

function getVehicleDetails(brand: string, model: string, year: string) {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_VEHICLE_DETAILS_REQUEST });
    services.getVehicleDetails(brand, model, year)
      .then((data) => {
        dispatch({
          type: vehiclesConstants.GET_VEHICLE_DETAILS_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        dispatch({ type: vehiclesConstants.GET_VEHICLE_DETAILS_FAILURE, error });
      })
  }
}