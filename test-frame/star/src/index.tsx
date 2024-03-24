// import { serveStatic } from '@hono/node-server/serve-static'
// import { Button, Frog } from 'frog'
// import { neynar } from 'frog/hubs'

// export const app = new Frog({
//   // Supply a Hub to enable frame verification.
//   hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
// })

// app.use('/*', serveStatic({ root: './public' }))

// // Frame to capture user's favorite fruit.
// app.frame('/', (c) => {
//   return c.res({
//     action: '/mint',
//     image: (
//       <div style={{ 
//         color: 'black', 
//         display: 'flex', 
//         fontSize: 60,
//         backgroundImage: 'linear-gradient(to right, #DAA520, #FFF200)',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100vw',
//         height: '100vh',
//       }}>
//         @bamba.labs
//       </div>
//     ),
//     intents: [
//       <Button value="apple">Apple</Button>,
//       <Button value="banana">Banana</Button>,
//       <Button value="mango">Mango</Button>,
//       <Button>Skip</Button>
//     ]
//   })
// })
 
// // Frame to display user's response.
// app.frame('/mint', (c) => { 
//   const { buttonValue } = c
//   return c.res({
//     action: '/final',
//     image: (
//       <div style={{ 
//         color: 'black', 
//         display: 'flex', 
//         fontSize: 60,
//         backgroundImage: 'linear-gradient(to right, #DAA520, #FFF200)',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100vw',
//         height: '100vh',
//       }}>
// //         Selected: {buttonValue}
// //       </div>
//     ),
//     intents: [
//       <Button>Skip</Button>,
//       <Button.Reset>Reset</Button.Reset>,
//     ]
//   })
// })

// // Frame to display user's response.
// app.frame('/final', (c) => { 
//   const { buttonValue } = c
//   return c.res({
//     image: (
//       <div style={{ 
//         color: 'black', 
//         display: 'flex', 
//         fontSize: 60,
//         backgroundImage: 'linear-gradient(to right, #DAA520, #FFF200)',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100vw',
//         height: '100vh',
//       }}>
//         Selected: {buttonValue}
//       </div>
//     ),
//     intents: [
//       <Button.Reset>Reset</Button.Reset>,
//     ]
//   })
// })

import { Button, Frog, TextInput } from 'frog'
import { neynar } from 'frog/middlewares'

const projectData =  {
    name: 'bamba.stars',
    description: 'A project to support the bamba.stars community',
    user: 'seno',
    followers: 1000,
    image: 'banner.png',
    token: 'BAMBA'
  }


export const neynarMiddleware = neynar({
  apiKey: 'NEYNAR_FROG_FM',
  features: ['interactor', 'cast'],
})

export const app = new Frog()
  .frame('/', neynarMiddleware, (c) => { 
    // const { displayName, followerCount } = c.var.interactor || {}
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
        {projectData.description} by {projectData.user}
      </div>
      ),
      intents: [
        <Button>Support</Button>
      ],
    })
  })
  .frame('/mint', (c) => { 
    return c.res({
      action: '/guess',
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
          Number of tokens ${projectData.token} you want
        </div>
      ),
      intents: [
        <TextInput placeholder="Enter number of tokens" />,
        <Button>Send</Button>,
        <Button.Reset>Reset</Button.Reset>
      ],
    })
  })
  .frame('/guess', neynarMiddleware, (c) => {
    const { displayName, followerCount } = c.var.interactor || {}
    console.log('interactor: ', c.var.interactor)
    console.log('cast: ', c.var.cast)
    const { buttonValue, inputText } = c
    const numtokens = inputText || buttonValue || ''
    return c.res({
      action: '/final',
      image: (
        <div
          style={{
            alignItems: 'center',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 48,
            height: '100%',
            width: '100%',
          }}
        >
          Greetings {displayName}, you have {followerCount} followers and now you have {numtokens} tokens.
        </div>
      ),
      intents: [
        <Button>Support</Button>,
        <Button.Reset>Reset</Button.Reset>
      ],
    })
  })
  .frame('/final', (c) => { 
    return c.res({
      action: '/final',
      image: (
        <img src='banner.png' alt="bamba.stars"/>
      ),
      intents: [
        <Button.Redirect location="https://google.com">Go to the Project</Button.Redirect>,
        <Button.Reset>Reset</Button.Reset>
      ],
    })
  })