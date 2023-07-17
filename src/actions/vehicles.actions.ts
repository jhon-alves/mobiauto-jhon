import vehiclesConstants from '@/constants/vehicles.constants';
import services from '@/services';

export const vehiclesActions = {
  changeVehicle,
  changeField,
  clearFilters,
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails
};

function changeVehicle(name: string, value: string) {
  return (dispatch: any) => {
    dispatch({
      type: vehiclesConstants.CHANGE_VEHICLE,
      payload: { name, value }
    });
    dispatch(clearFilters());
  }
}

function changeField(name: string, codigo: string, nome: string) {
  return (dispatch: any) => {
    dispatch({
      type: vehiclesConstants.CHANGE_FIELD,
      payload: { name, codigo, nome }
    });
  }
}

function clearFilters() {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.CLEAR_FILTERS });
  }
}

function getAllBrands(vehicle:string) {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_BRANDS_REQUEST });
    services.getAllBrands(vehicle)
      ?.then((data) => {
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

function getAllModels(vehicle:string, brand: string) {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_MODELS_REQUEST });
    services.getAllModels(vehicle, brand)
      ?.then((data) => {
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

function getAllYears(vehicle:string, brand: string, model: string) {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_ALL_YEARS_REQUEST });
    services.getAllYears(vehicle, brand, model)
      ?.then((data) => {
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

function getVehicleDetails(vehicle:string, brand: string, model: string, year: string) {
  return (dispatch: any) => {
    dispatch({ type: vehiclesConstants.GET_VEHICLE_DETAILS_REQUEST });
    services.getVehicleDetails(vehicle, brand, model, year)
      ?.then((data) => {
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