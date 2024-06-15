import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './components/Carousel'

const photos = [
  {
    image: "https://picsum.photos/id/50/200/300"
  },
  {
    image: "https://picsum.photos/id/51/200/300"
  },
  {
    image: "https://picsum.photos/id/52/200/300"
  },
  {
    image: "https://picsum.photos/id/53/200/300"
  },
  {
    image: "https://picsum.photos/id/54/200/300"
  },
  {
    image: "https://picsum.photos/id/55/200/300"
  },
  {
    image: "https://picsum.photos/id/56/200/300"
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
