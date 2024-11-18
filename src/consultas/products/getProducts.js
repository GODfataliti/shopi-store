import { storeApi } from '../../api'

export default async function getProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await storeApi.get('/products', {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        }
      })
      // .then((res) => {
      //   console.log({ res })
      // })
      // console.log({ response })
      return resolve(response.data);
    } catch (err) {
      console.info(err)
      reject(err)
    }
  })
}