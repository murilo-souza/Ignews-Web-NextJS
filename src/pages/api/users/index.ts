import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Murilo' },
        {id: 2, name: 'Kathy' },
        {id: 3, name: 'Arnaldo' },
    ]
    return response.json(users)
}