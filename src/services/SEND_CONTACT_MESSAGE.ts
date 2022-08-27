interface IMessage {
  [k: string]: string | File
}

const statusMessages = {
  success: 'Send success',
  serverError: 'Server errorr',
  defaultError: 'An error ocurred'
}

export const SEND_CONTACT_MESSAGE = async (data: IMessage) => {
  try {
    const URL_CONTACT = 'https://getform.io/f/fcecfa87-e329-4bab-afdb-200c42b436e1'

    const response = await fetch(URL_CONTACT, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
      method: 'POST'
    })
    // const responseJSON = await response.json()
    // console.log(responseJSON)
    if (response.status === 200) {
      return statusMessages.success
    }
    // const statusN: string = response.status.toString()
    return statusMessages.defaultError
  } catch (error: Error | any) {
    console.error(error?.message)
    return statusMessages.serverError
    // throw new Error(statusMessages[500])
  }
}
