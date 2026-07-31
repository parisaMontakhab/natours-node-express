import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/users/updateMe';

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
