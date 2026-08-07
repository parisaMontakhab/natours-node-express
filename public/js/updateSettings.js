import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/users/updateMyPassword'
        : '/api/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert(
        'success',
        `${type === 'password' ? 'Password' : 'Data'} updated successfully!`,
      );

      return true;
    }
  } catch (err) {
    showAlert('error', err.response?.data?.message || 'Something went wrong!');

    return false;
  }
};
