/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useAppointmentList = () => {
  const { data, error, mutate } = useSWR( '/appointments', API.fetcher );

  return {
    appointments: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};
