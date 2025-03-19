import axios from 'axios';
import { State, City } from '../types/form';

const API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export const fetchStates = async (): Promise<State[]> => {
  const response = await axios.get(API_URL);
  return response.data.map((state: { id: number; sigla: string; nome: string }) => ({
    id: state.id,
    acronym: state.sigla,
    name: state.nome,
  }));
};

export const fetchCitiesForState = async (acronym: string): Promise<City[]> => {
  const response = await axios.get(`${API_URL}/${acronym}/municipios`);
  return response.data.map((city: { id: number; nome: string }) => ({
    id: city.id,
    name: city.nome,
  }));
};
