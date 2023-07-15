import vehiclesConstants from '@/constants/vehicles.constants';

let initialState = {
  brands: [],
  models: [],
  years: [],
  vehicleDetails: {},
  filters: {
    brand: {
      codigo: '',
      nome: '',
    },
    model: {
      codigo: '',
      nome: '',
    },
    year: {
      codigo: '',
      nome: '',
    },
  },
  loading: false
}

export function vehicles(state = initialState, action: any) {
  switch (action.type) {
    case vehiclesConstants.CHANGE_FIELD: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: {
            codigo: action.payload.codigo,
            nome: action.payload.nome
          },
        }
      }
    }

    case vehiclesConstants.GET_ALL_BRANDS_REQUEST:
    case vehiclesConstants.GET_ALL_MODELS_REQUEST:
    case vehiclesConstants.GET_ALL_YEARS_REQUEST:
    case vehiclesConstants.GET_VEHICLE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case vehiclesConstants.GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload,
        loading: false
      }

    case vehiclesConstants.GET_ALL_MODELS_SUCCESS:
      return {
        ...state,
        models: action.payload,
        loading: false
      }

    case vehiclesConstants.GET_ALL_YEARS_SUCCESS:
      return {
        ...state,
        years: action.payload,
        loading: false
      }

    case vehiclesConstants.GET_VEHICLE_DETAILS_SUCCESS:
      return {
        ...state,
        vehicleDetails: action.payload,
        loading: false
      }

    case vehiclesConstants.GET_ALL_BRANDS_FAILURE:
    case vehiclesConstants.GET_ALL_MODELS_FAILURE:
    case vehiclesConstants.GET_ALL_YEARS_FAILURE:
    case vehiclesConstants.GET_VEHICLE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
}
