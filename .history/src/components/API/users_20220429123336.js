import axios from "axios";

export async function editUser (uuid, data) {
  try {
      const response = await axios.patch(`https://api.antontig.beget.tech/api/user/update/${uuid}`, { data })
        return response;
    } catch(err) {
        console.log(err)
    }
}