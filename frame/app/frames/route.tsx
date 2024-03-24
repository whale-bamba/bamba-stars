// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
 
const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `I clicked ${ctx.searchParams.value}`
          : `Click some button`}
      </span>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "Yes" }}}>
        Say Yes
      </Button>,
      <Button action="post" target={{ query: { value: "No" }}}>
        Say No
      </Button>,
      <Button action="post" target="/second">
        Go to next route
      </Button>,
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;


// /* eslint-disable react/jsx-key */
// import { Button } from "frames.js/next";
// import { createFrames } from "frames.js/next";
// import { Sparkles } from 'lucide-react';

// const frames = createFrames({
//   basePath: "/bamba/frame",
// });

// const handleRequest = frames(async (ctx) => {
//   if (ctx.message?.transactionId) {
//     return {
//       image: (
//         <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
//           Transaction submitted! {ctx.message.transactionId}
//         </div>
//       ),
//       imageOptions: {
//         aspectRatio: "1:1",
//       },
//       buttons: [
//         <Button
//           action="link"
//           target={`https://www.onceupon.gg/tx/${ctx.message.transactionId}`}
//         >
//           View on block explorer
//         </Button>,
//       ],
//     };
//   }

//   return {
//     image: (
//       <div tw="bg-[#DAA520] text-black text-6xl font-bold w-full h-full justify-center items-center">
//         Balance:
//       </div>
//     ),
//     imageOptions: {
//       aspectRatio: "1:1",
//     },
//     buttons: [
//       <Button action="tx" target="/txdata" post_url="/second">
//         Buy a unit
//       </Button>,
//     ],
//   };
// });

// export const GET = handleRequest;
// export const POST = handleRequest;
