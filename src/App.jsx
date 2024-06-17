import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './components/Carousel'


const photos = [
  {
    image: "https://picsum.photos/id/50/600/400",
    text: "My random image 1"
  },
  {
    image: "https://picsum.photos/id/51/600/400",
    text: "My random image 2"
  },
  {
    image: "https://picsum.photos/id/52/600/400",
    text: "My random image 3"
  },
  {
    image: "https://picsum.photos/id/53/600/400",
    text: "My random image 4"
  },
  {
    image: "https://picsum.photos/id/54/600/400",
    text: "My random image 5"
  },
  {
    image: "https://picsum.photos/id/55/600/400",
    text: "My random image 6"
  },
  {
    image: "https://picsum.photos/id/56/600/400",
    text: "My random image 7"
  }
]

function App() {

  return (
    <section>
      <Carousel
        photos={photos}
      ></Carousel>
    </section>
  )
}

export default App
