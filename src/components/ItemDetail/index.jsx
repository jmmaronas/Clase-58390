import { Card} from 'react-bootstrap';
import ItemCount from '../Count/ItemCount';


export default function Item({product, add, increment, decrement, count}) {
  return (
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={"../"+product.url_imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descripcion}
        </Card.Text>
        <Card.Subtitle className='text-center my-3'>$ {product.precio * count} </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
