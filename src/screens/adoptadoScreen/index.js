import React, { useEffect } from 'react'
import { Card} from 'react-bootstrap'
import './adoptadoScreen.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Adoptado = ({user, perrito, history}) => {

    useEffect(()=> {
        if(!perrito.selected_perrito || !user.authUser){
            history.push('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[perrito])
    console.log(perrito)
    return (
        <div className='contaner-fluid'>
            <h3 className='mt-4'> Felicidades {user.authUser.fullName}, has adoptado a {perrito.selected_perrito.nombre}!</h3>
            <div className='row'>
              
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={perrito.selected_perrito.img} />
                            <Card.Body>
                                <Card.Title>{perrito.selected_perrito.nombre}</Card.Title>
                                <Card.Text>
                                    
                                        {`genero: ${perrito.selected_perrito.genero}`}
                                   <br/>
                                        {`edad : ${perrito.selected_perrito.edad}`}
                                    
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
              
        </div>
    )
}

const mapStateToProps = ({user, perrito})=> ({
    user,
    perrito
})

export default withRouter(connect(mapStateToProps, null)(Adoptado));

 ;