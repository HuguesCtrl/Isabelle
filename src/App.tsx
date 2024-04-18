import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from './data';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/counter.css";
import {
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
  Counter
} from 'yet-another-react-lightbox/plugins';
import Header from './Header';
import Footer from './Footer';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from './Images';



function App() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}
      <Header/>

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Download, Fullscreen, Zoom, Thumbnails, Counter]}
        counter={{ container: { style: { top: 0, fontFamily: "Montserrat" } } }}
        // open={open}
        // close={() => setOpen(false)}

        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      <Footer/>
    </>
  );
}

export default App;
