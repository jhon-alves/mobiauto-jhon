import api from '@/helpers/api';
import { IFipeApi } from '@/types';

const services = {
  getAllBrands,
  getAllModels,
  getAllYears,
  getVehicleDetails,
};

async function getAllBrands() {
  try {
    const response = await api.get('/carros/marcas');
    return response.data;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

async function getAllModels(brand: string) {
  try {
    const response = await api.get(`/carros/marcas/${brand}/modelos`);
    return response.data;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } 
}

async function getAllYears(brand: string, model: string) {
  try {
    const response = await api.get(`/carros/marcas/${brand}/modelos/${model}/anos`);
    return response.data;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

async function getVehicleDetails(brand: string, model: string, year: string) {
  try {
    const response = await api.get(`/carros/marcas/${brand}/modelos/${model}/anos/${year}`);
    return response.data;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

export default services;