
import './App.css'
import Homepage from './homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LaunchPad from './launchpad/Launchpad'
import Checkout from './checkout-page/Checkout';

function App() {
 useLayoutEffect(() => {
   function addMetaCode() {
     var metaNoscript = document.createElement("noscript");
     var metaScript = document.createElement("script");
     var metaImg = document.createElement("img");
     metaImg.setAttribute(
       "src",
       "https://www.facebook.com/tr?id=219032204013009&ev=PageView&noscript=1"
     );
     metaImg.setAttribute("width", "1");
     metaImg.setAttribute("height", "1");
     metaImg.style.display = "none";
     metaNoscript.appendChild(metaImg);
     metaScript.text =
       "!(function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)})(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '219032204013009');\r\nfbq('track', 'PageView');";
     document.head.appendChild(metaScript);
     document.head.appendChild(metaNoscript);
     console.log("hello");
   }
   addMetaCode();
 }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Homepage />}></Route>
        <Route path="/launchpad" element={<LaunchPad />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
