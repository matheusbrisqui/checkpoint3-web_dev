import {} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'; 
import './Card.css'


function Home() {

  const data = [
    { id: '1', image: 'https://st4.depositphotos.com/19157714/31390/i/450/depositphotos_313903296-stock-photo-close-view-delicious-sushi-set.jpg' },
    { id: '2', image: 'https://imgs.search.brave.com/iJZohS83PQETrjvvgz6s5pKBnP8FYIZg72SFJfUn7t0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vcGhvdG9z/L3N1c2hpLXBpY3R1/cmUtaWQxMTg5MTQz/MTg3P2s9MjAmbT0x/MTg5MTQzMTg3JnM9/NjEyeDYxMiZ3PTAm/aD1XTjIxaklVdGJf/TTNmbW5DWnluNmdm/UFByRjhrNG1yLUpJ/aHBCczZoY0o0PQ'},
    { id: '3' , image: 'https://imgs.search.brave.com/9mfpH_EtHKCgh3aQ-iceUrttHGTZPj7-ajKY5vjOiqw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/MjU3MzM4NC9wdC9m/b3RvL3N1c2hpLXNw/ZWNpYWx0eS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9S3Ni/eWl5ejVTVG44U1Ut/NFdSalpjUldRRWhQ/cTY3M0NJbU5nSjA5/VXMydz0'},
    { id: '4',image: 'https://imgs.search.brave.com/sKRxcdE7l5-0O8TfKE2RZ4sE78T-_AYIvrWhRVJrE78/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/NjM3MzE5My9wdC9m/b3RvL2NvdXBsZS1l/YXRpbmctc3VzaGku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZpNkdPVmVha3Jo/UTNzak1oMWk1ZTZ5/RnhPdlZKYlZxbnc1/YndMVVN5Wms9'},
  ]

  return (
    <>
    <h1>Tuko Sushi</h1>
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true}}
      navigation
    >
        {data.map( (item)=> (
          <SwiperSlide key={item.id}> 
            <img
              src={item.image}
              alt="SlideSushi"
              className='slide-item'
            />
          </SwiperSlide>
          ))}
    </Swiper>

  <div className='container-master'>
    
    <div className='card-container'>
      <div className="image-container">
        <img src="https://imgs.search.brave.com/BiH_P1r5uBx_IGjO5jsrXzK-Lcvh4ZFkYaU1MNOnzDI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMi5n/bGJpbWcuY29tLzJk/S0VZSURFWnFWNW9u/bFVCdGJIVGRsTWRj/MD0vNjIweDQxMy9z/bWFydC9lLmdsYmlt/Zy5jb20vb2cvZWQv/Zi9vcmlnaW5hbC8y/MDIyLzAzLzI0LzEy/LXJlc3RhdXJhbnRl/cy1qYXBvbmVzZXMt/ZGUtYWx0YS1nYXN0/cm9ub21pYS1wYXJh/LXZvY2UtY29uaGVj/ZXItMi1tYXphLmpw/Zw" alt=" " />
      </div>
      <div className="card-body">
        <p>Faça sua reserva</p>
      </div>
    </div>

    <div className='card-container'>
      <div className="image-container">
        <img src="https://imgs.search.brave.com/JqeGw1NC0eZPArA2Moc4s02m_RPT12yeRSF3aX3nHvg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VzaGltYW5hZG9t/aWNpbGlvLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NS8wMS9zdXNoaW1h/bi1lbS1jYXNhLmpw/Zw" alt=" " />
      </div>
      <div className="card-body">
        <p>Traga sua familia e amigos</p>
      </div>
    </div>

    <div className='card-container'>
      <div className="image-container">
        <img src="https://imgs.search.brave.com/KPTzwKKM0MsT8jkEph7WIf7luuSXy7gmHPxBSm5rmuA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ndWlh/dmlhamFybWVsaG9y/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNC9t/ZWxob3Jlcy1yZXN0/YXVyYW50ZXMtamFw/b25lcy1yaW8tZGUt/amFuZWlyby0xMDI0/eDY4Mi53ZWJw" alt=" " />
      </div>
      <div className="card-body">
        <p>Aproveite nosso rodizio</p>
      </div>
    </div>

    <div className='card-container'>
      <div className="image-container">
        <img src="https://imgs.search.brave.com/Bc7yHKv-Z-6xcV7tev9sNbTiDHM3QFB4nmv1bt1vtqk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Fib3JhdmlkYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMTIvcmVz/dGF1cmFudGUtamFw/b25lcy1jb25oZWNh/LW9zLTIwLW1lbGhv/cmVzLWRlLXNhby1w/YXVsby1zcC0xLTEu/d2VicA" alt=" " />
      </div>
      <div className="card-body">
      <Link to="/produtos" className="btn-1">
          Ver Cardápio
        </Link>
      </div>
    </div>
  </div>
  <div className="container-m2">
    <p>O Tuko Sushi é um refúgio gastronômico no coração da cidade, proporcionando uma experiência japonesa autêntica e memorável. Com um cardápio que destaca a frescura dos ingredientes, desde sushis e sashimis impecavelmente preparados até rolos de sushi inovadores que são verdadeiras obras de arte culinárias, o restaurante cativa os paladares mais exigentes. Além disso, pratos quentes como o tempurá crocante e as preparações no teppanyaki são igualmente excepcionais. A equipe atenciosa e a atmosfera inspirada na cultura japonesa completam essa experiência única, tornando o Tuko Sushi um local onde os sabores e a beleza da culinária do Japão ganham vida, proporcionando uma jornada gastronômica que envolve todos os sentidos.
    </p>
  </div>
    </>
  )
}

export default Home
