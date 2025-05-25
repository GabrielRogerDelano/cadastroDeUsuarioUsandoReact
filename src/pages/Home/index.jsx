import './style.css'
import Trash from '../../assets/lixeira.svg'
function Home() {

  const users = [{
    id: '1',
    name: 'Tulio',
    age: 21,
    email: 'tu@gmail.com'
  }, {
    id: '2',
    name: 'angela',
    age: 31,
    email: 'd@gmail.com'
  }, {
    id: '2',
    name: 'geraldo',
    age: 21,
    email: 'gg@gmail.com'
  }]


  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de usuario</h1>
        <input placeholder='Nome :' required name='nome' type="text" />
        <input placeholder='Idade :' required name='idade' min={0} max={115} type="number" />
        <input placeholder='Email :' required name='email' type="email" />
        <button type='button'>Cadastrar</button>

      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
