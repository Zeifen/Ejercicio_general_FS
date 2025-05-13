import { useEffect, useState } from "react";

const Home = () => {

  const [word, setWord] = useState('');
  const [users, setUser] = useState([]);

  /**
 * 🧠 Problema: Buscador de Anagramas
 * 
 * Dado un array fijo de palabras, construye una función que reciba una palabra como entrada
 * y devuelva una lista con todos los anagramas válidos de esa palabra presentes en el array.
 * 
 * La función debe:
 * - Ignorar mayúsculas/minúsculas
 * - No incluir la palabra original como parte de los resultados
 * - Considerar solo palabras que sean verdaderos anagramas (mismos caracteres, distinto orden)
 */

  const WORDS = [
    "code", "doce", "ecod", "framer", "frame", 
    "coder", "rac", "car", "arc"
  ];
  
  const findAnagrams = (word, list) => {
    const newMap = list.map((w) =>  
      w.split(word)
  )

  }
  


  // Ejemplos esperados:
  console.log(findAnagrams("code", WORDS )); // ["doce", "ecod"]
  console.log(findAnagrams("rac", WORDS));  // ["car", "arc"]
  console.log(findAnagrams("framer", WORDS)); // []
 

  useEffect(() =>{
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    console.log(res);
    console.log(data);
    setUser(data);
    console.log(users);
  }


  return (
    <>
     <div>
      <input className="form-control mb-5" type="text" value={word} onChange={(e) => setWord(e.target.value)} />
      <button className="btn btn-info" onClick={() => findAnagrams(word, WORDS)}> Enviar</button>
     </div>

     <div className="container mt-5">
      <h3>Petición</h3>
      <ul>
      {users.map(user=> (
        <li>
          <span>{user.name} {user.firstName} {user.secondName}</span>
        </li>
      ))}
      </ul>

     </div>
    </>
  )
}

export default Home;

