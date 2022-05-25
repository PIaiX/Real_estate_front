export async function updateUser (uuid, formData, axiosPrivate) {
  try {
      const response = await axiosPrivate.patch(`https://api.antontig.beget.tech/api/user/update/${uuid}`, formData)
        return response;
    } catch(err) {
        console.log(err)
    }
}