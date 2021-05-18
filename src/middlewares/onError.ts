import { NextApiRequest, NextApiResponse } from 'next'

import { BaseError } from '@/errors/base'

type ErrorResponse = {
  message?: string
  type?: string
  name?: string
  errors?: []
}

export const onError = (
  error: ErrorResponse,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log({
    url: req.url,
    ...error
  })

  let errorResponse = {} as ErrorResponse

  if (error instanceof BaseError) {
    errorResponse = {
      message: error.message,
      type: error.type,
      name: error.name
    }

    if (error.errors?.length !== 0) {
      errorResponse = { errors: error.errors }
    }

    return res.status(error.status).json(errorResponse)
  }

  return res.status(500).json(error)
}
