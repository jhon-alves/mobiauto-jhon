import { fetchApi } from '@/helpers/api';

const services = {
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails,
};

function getAllBrands(vehicle: string) {
  try {
   return fetchApi(`/${vehicle}/marcas`);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

function getAllModels(vehicle: string, brand: string) {
  try {
    return fetchApi(`/${vehicle}/marcas/${brand}/modelos`);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } 
}

function getAllYears(vehicle: string, brand: string, model: string) {
  try {
    return fetchApi(`/${vehicle}/marcas/${brand}/modelos/${model}/anos`);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

function getVehicleDetails(vehicle: string, brand: string, model: string, year: string) {
  try {
    return fetchApi(`/${vehicle}/marcas/${brand}/modelos/${model}/anos/${year}`);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

export default services;