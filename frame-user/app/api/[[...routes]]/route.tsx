/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput, parseEther } from 'frog'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { neynar } from 'frog/middlewares'
import { abi } from './abi'

const projectData =  {
  name: 'bamba.stars',
  description: 'A project to support the bamba.stars community',
  user: 'seno',
  followers: 1000,
  image: 'banner.png',
  token: 'BAMBA'
}

const neynarMiddleware = neynar({
  apiKey: 'NEYNAR_FROG_FM',
  features: ['interactor', 'cast'],
})

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
}).frame('/', neynarMiddleware, (c) => { 
  const { displayName } = c.var.interactor || {}
  return c.res({
    action: '/mint',
    image: (
      <div
      style={{
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to right, #DAA520, #FFF200)',
        fontSize: 48,
        height: '100%',
        width: '100%',
        padding: 20,
      }}
    >
      Hi {displayName}, are you a fan of {projectData.user}? Support {projectData.name}!
    </div>
    ),
    intents: [
      <Button>Support</Button>
    ],
  })
}).frame('/mint', (c) => {
  return c.res({
    action: '/transaction-id',
    image: (
      <div
          style={{
            alignItems: 'center',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(to right, #DAA520, #FFF200)',
            fontSize: 48,
            height: '100%',
            width: '100%',
            padding: 20,
          }}
        >
          Purchase tokens ${projectData.token} to support the project
        </div>
    ),
    intents: [
      <TextInput placeholder="Value (ETH)" />,
      <Button.Redirect location="https://google.com">Go to Project</Button.Redirect>,
      <Button.Transaction target="/send-ether">Send Ether</Button.Transaction>,
      <Button>Skip</Button>
    ]
  })
}).frame('/transaction-id', neynarMiddleware, (c) => {
  const { transactionId } = c
  const { followerCount } = c.var.interactor || {}
  return c.res({
    image: (
      <div
          style={{
            alignItems: 'center',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(to right, #DAA520, #FFF200)',
            fontSize: 48,
            height: '100%',
            width: '100%',
            padding: 20,
          }}
        >
          TransactionId: ${transactionId}
          You have {followerCount} followers, copy and cast this frame to support more.
        </div>
    ),
    intents: [
      <Button.Redirect location="https://google.com">Go to Project</Button.Redirect>,
      <Button.Redirect location="https://google.com">Copy Frame</Button.Redirect>,
      <Button.Reset>Reset</Button.Reset>
    ],
  })
}).transaction('/send-ether', (c) => {
  const { inputText } = c
  // Send transaction response.
  return c.send({
    chainId: 'eip155:10',
    to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
    value: parseEther(inputText || "0"),
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
