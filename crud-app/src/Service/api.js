import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080/users';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get('https://nodejs-nirmal.azurewebsites.net/api/GetAllUsers?code=pvVhCToGgTeKx3dYKfp54ukHRtwky64V0oj/Zqz7Wtp1Uv55XOU8mg==');
}

export const addUser = async (user) => {
    return await axios.post('https://nodejs-nirmal.azurewebsites.net/api/CreateUsers?code=eaa5PLg9j7Z88dUJKPLrIn3rQxUkzcUByQ9J5VLAHen3NATJBOOYIA==', user);
}

export const deleteUser = async (id) => {
    return await axios.delete('https://nodejs-nirmal.azurewebsites.net/api/CreateUsers?code=eaa5PLg9j7Z88dUJKPLrIn3rQxUkzcUByQ9J5VLAHen3NATJBOOYIA==', id);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}