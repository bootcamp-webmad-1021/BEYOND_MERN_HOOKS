# Hooks

## useState

  - Devuelve un estado y una función que actualiza el estado. El valor que se le pasa es el valor inicial.
    ```js
    const [state, setState] = useState(initialValue)
    const [text, setText] = useState("Texto inicial")
    ```

## useEffect

  - Ejecuta una función cuando detecta un cambio en una lista de variables. Si se le pasa el array vacío se comporta como el componentDidMount, si no se le pasa array se ejecuta en cada render.
  
  ```js
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
  ```

## useParams, useLocation, useHistory

  - Estos 3 hooks pertenecen a react-router-dom, nos permiten acceder a los params, location e historial sin necesidad de mover las props desde las rutas.

### Otros hooks interesantes

  *useContext* permite crear un estado "global".
  *useRef* permite crear referencias inmutables entre renders.
