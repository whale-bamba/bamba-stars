/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput, parseEther } from 'frog'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { neynar } from 'frog/middlewares'

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
  const { displayName, followerCount } = c.var.interactor || {}
  return c.res({
    action: '/finish',
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
      Hi {displayName}, you have {followerCount} followers, why not use this to take your project to the next level?
    </div>
    ),
    intents: [
      <Button>I am interested</Button>
    ],
  })
}).frame('/finish', (c) => {
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
          Know more in bamba.stars
        </div>
    ),
    intents: [
      <Button.Redirect location="https://google.com">Go to the website</Button.Redirect>,
      <Button.Reset>Reset</Button.Reset>
    ]
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
