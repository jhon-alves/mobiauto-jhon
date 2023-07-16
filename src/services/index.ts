import { fetchApi } from '@/helpers/api';

const services = {
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails,
};

function getAllBrands() {
  try {
   return fetchApi('/carros/marcas');
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

function getAllModels(brand: string) {
  try {
    return fetchApi(`/carros/marcas/${brand}/modelos`);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } 
}

function getAllYears(brand: string, model: string) {
  try {
    return fetchApi(`/carros/marcas/${brand}/modelos/${model}/anos`);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

function getVehicleDetails(brand: string, model: string, year: string) {
  try {
    return fetchApi(`/carros/marcas/${brand}/modelos/${model}/anos/${year}`);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

export default services;