import crypto from 'crypto'

export const api = async (endpoint: string, filter?: string) => {
  const ts: number = Date.now()
  const apikey = process.env.API_KEY
  const privatekey = process.env.PRIVATE_KEY
  const hash = crypto.createHash('md5').update(`${ts}${privatekey}${apikey}`).digest('hex')

  const response = await fetch(`https://gateway.marvel.com/v1/public${endpoint}?ts=${ts}&apikey=${apikey}&hash=${hash}&${filter || ''}`)

  const responseData = await response.json()
  const result = {
    code: responseData.code,
    data: responseData.data.results
  }
  return result
}
