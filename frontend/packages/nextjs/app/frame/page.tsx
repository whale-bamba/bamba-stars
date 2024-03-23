import Head from "next/head";
import Link from "next/link"; 

export default function UI() {
  // Example static image and action URL. Replace these with actual static values.
  const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg/800px-%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg";
  // const action = "/path/to/action";
  // const buttons = ["Button 1", "Button 2"]; // Example static buttons

  const redirectTo = "/other-page";

  // Function to handle the redirect
  const handleRedirect = () => {
    window.location.href = redirectTo;
  };

  return (
    <>
      <Head>
        <meta property="og:title" content="Frame" />
        <meta property="og:image" content={image} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={image} />
        <meta property="fc:frame:post_url" content="/path/to/action" />
      </Head>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <img className="max-w-xl h-auto" src={image} alt="Decorative Image" />
        <a href="https://tailwindcss.com/">
            Go to Page
        </a>
      </div>
    </>
  );
}

//   return (
//     <>
//       <Head>
//         <meta property="og:title" content="Frame" />
//         <meta property="og:image" content={image} />
//         <meta property="fc:frame" content="vNext" />
//         <meta property="fc:frame:image" content={image} />
//         {buttons.map((button, index) => (
//           <meta
//             key={button}
//             property={`fc:frame:button:${index + 1}`}
//             content={button}
//           />
//         ))}
//         <meta property="fc:frame:post_url" content={action} />
//       </Head>
//       <form
//         action={action}
//         method="POST"
//         className="h-screen w-screen flex flex-col items-center justify-center"
//       >
//         <img className="max-w-xl h-auto" src={image} />
//         <div>
//           {buttons.map((button, index) => (
//             <button
//               key={button}
//               type="submit"
//               name="buttonIndex"
//               value={index + 1}
//               className="w-32 h-8 border border-gray-300 shadow-sm rounded-md bg-white text-base font-medium text-gray-700 hover:bg-gray-50"
//             >
//               {button}
//             </button>
//           ))}
//         </div>
//       </form>
//     </>
//   );
// }