import { cache } from 'react'
import {fullBaseUrl} from '../exportVariables';


export const getCountries = cache(async () => {
  const res = await fetch(`${fullBaseUrl()}/countries`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) throw new Error('Failed to fetch');
  
  const countryOption = await res.json();


  return countryOption.data
});